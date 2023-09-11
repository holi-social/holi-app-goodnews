import {
  GoodNewsArticle,
  GoodNewsArticleQueryResponse,
  GoodNewsCategory,
} from "./api_types.ts";
import { ContentfulConfig } from "./server.ts";
import {
  ContentfulAsset,
  ContentfulEntriesResponse,
  ContentfulItem,
  ContentfulItemBildManuell,
  ContentfulItemFields,
  ContentfulLanguage,
} from "./contentful_types.ts";
import { logger } from "./logging.ts";

export const SUPPORTED_LANGUAGES = ["en", "de"];
export const DEFAULT_LANGUAGE: ContentfulLanguage = "en";

export const resolveCategory = (
  fields: ContentfulItemFields,
): GoodNewsCategory | undefined => {
  switch (fields.categoryID) {
    case "animal_rights":
      return "ANIMAL_RIGHTS";
    case "climate":
      return "CLIMATE";
    case "digitization":
      return "DIGITIZATION";
    case "education":
      return "EDUCATION";
    case "global_health":
      return "GLOBAL_HEALTH";
    case "human_rights":
      return "HUMAN_RIGHTS";
    case "sustainability":
      return "SUSTAINABILITY";
    case undefined:
      return undefined;
    default:
      logger.error(`Received unknown category "${fields.categoryID}"`);
      return undefined;
  }
};

export const resolvePictureUrlFromAssets = (
  item: ContentfulItem,
  assets: ContentfulAsset[],
): string => {
  const asset = assets.find((asset) => {
    return (
      asset.sys.id ===
        (item.fields.bildManuell as ContentfulItemBildManuell).sys.id
    );
  });
  return "https:" + asset?.fields.file.url;
};

export const resolvePictureUrl = (
  item: ContentfulItem,
  assets: ContentfulAsset[],
): string => {
  if ("bildSource" in item.fields) return item.fields.bildSource as string;
  else if ("bildManuell" in item.fields) {
    return resolvePictureUrlFromAssets(item, assets);
  } else throw Error("Item missing both bildSource and bildManuell");
};

export const toGoodNewsArticle = (
  item: ContentfulItem,
  assets: ContentfulAsset[],
): GoodNewsArticle => {
  return {
    id: item.sys.id,
    date: item.fields.datum,
    headline: item.fields.headline,
    teaserText: item.fields.teaserText,
    pictureUrl: resolvePictureUrl(item, assets),
    pictureCredit: item.fields.photoCredit,
    articleUrl: item.fields.articleUrl,
    source: item.fields.quelle,
    sortKey: item.fields.sortKey,
    category: resolveCategory(item.fields),
    language: item.fields.language,
  };
};

const fetchPage =
  (config: ContentfulConfig) =>
  (skip: number, limit: number): Promise<ContentfulEntriesResponse> => {
    // baseUrl used for logging to not leak access_token
    const baseUrl =
      `${config.baseUrl}/${config.spaceId}/environments/${config.environment}/entries`;
    const url = new URL(baseUrl);

    url.searchParams.set("skip", skip.toString());
    url.searchParams.set("limit", limit.toString());
    url.searchParams.set("access_token", config.deliveryApiAccessToken);

    logger.info(`fetching articles ${skip} to ${skip + limit} from ${baseUrl}`);

    const start = Date.now();
    return fetch(url)
      .then((result) => result.json())
      .then((result) => {
        const duration = Date.now() - start;
        logger.debug(`fetching articles took ${duration} ms`);
        return result;
      });
  };

type ContentfulItemFilter = (item: ContentfulItem) => boolean;

const olderThan =
  (date: string): ContentfulItemFilter => (item: ContentfulItem) =>
    item.fields.datum.localeCompare(date) === -1;

const sameLanguage =
  (language: ContentfulLanguage): ContentfulItemFilter =>
  (item: ContentfulItem) => item.fields.language === language;

const containsMandatoryFields = (item: ContentfulItem) => {
  const { fields } = item;
  return (
    !!fields.datum &&
    !!fields.headline &&
    !!fields.teaserText &&
    !!fields.articleUrl &&
    !!fields.language &&
    typeof fields.sortKey === "number"
  );
};

const sortKeyComparator = (a: ContentfulItem, b: ContentfulItem) =>
  a.fields.sortKey - b.fields.sortKey;

export const executeArticlesQuery = (config: ContentfulConfig) =>
async (
  parameters: { lastDate?: string },
  validatedLocale: ContentfulLanguage,
): Promise<GoodNewsArticleQueryResponse> => {
  let responseDate: string | undefined;
  const responseItems: ContentfulItem[] = [];
  const responseAssets: ContentfulAsset[] = [];
  let skip = 0;
  const limit = config.pageSize;
  let fetchMore = true;
  while (fetchMore) {
    const contentfulResponse = await fetchPage(config)(skip, limit);
    responseItems.push(
      ...contentfulResponse.items
        .filter(sameLanguage(validatedLocale))
        .filter(containsMandatoryFields),
    );
    responseItems.sort(sortKeyComparator);
    responseAssets.push(...contentfulResponse.includes.Asset);

    if (parameters.lastDate && !responseDate) {
      responseDate = responseItems.find(olderThan(parameters.lastDate))
        ?.fields.datum;
    } else if (!responseDate) {
      responseDate = responseItems.length
        ? responseItems[0].fields.datum
        : undefined;
    }
    if (responseDate && responseItems.find(olderThan(responseDate!))) {
      fetchMore = false;
    }
    skip = skip + limit;
  }

  const responseArticles: GoodNewsArticle[] = responseItems
    .filter(
      (item) =>
        item.fields.datum === responseDate &&
        item.fields.language === validatedLocale,
    )
    .map((item) => toGoodNewsArticle(item, responseAssets));

  const previousDateTeaser: GoodNewsArticle | undefined = !responseDate
    ? undefined
    : responseItems
      .filter(
        (item) =>
          item.fields.datum < responseDate! &&
          item.fields.language === validatedLocale,
      )
      .map((item) => toGoodNewsArticle(item, responseAssets))[0];

  return {
    articles: responseArticles,
    previousDateTeaser: previousDateTeaser,
  };
};
