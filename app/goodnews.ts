import {log} from "./deps.ts";
import {
  GoodNewsArticle,
  GoodNewsArticleQueryResponse,
  GoodNewsCategory,
} from "./api_types.ts";
import {ContentfulConfig} from "./server.ts";
import {ContentfulItem, ContentfulItemFields, ContentfulEntriesResponse } from "./contentful_types.ts"

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
      console.error(`Received unknown category "${fields.categoryID}"`);
      return undefined;
  }
};

export const resolvePictureUrlFromAsset = (
  item: ContentfulItem,
): Promise<string> => {
  // TODO implement asset resolution
  return item.fields.bildSource
    ? Promise.resolve(item.fields.bildSource)
    : Promise.resolve(
      `https://www.motherjones.com/wp-content/uploads/2022/05/hawkesbay.jpg?${item.sys.id}`,
    );
};

export const toGoodNewsArticle = async (
  item: ContentfulItem,
): Promise<GoodNewsArticle> => {
  return {
    id: item.sys.id,
    date: item.fields.datum,
    headline: item.fields.headline,
    teaserText: item.fields.teaserText,
    pictureUrl: await resolvePictureUrlFromAsset(item), // TODO have resolvers do this work
    pictureCredit: item.fields.photoCredit,
    articleUrl: item.fields.articleUrl,
    source: item.fields.quelle,
    sortKey: item.fields.sortKey,
    category: resolveCategory(item.fields),
    language: item.fields.language,
  };
};

export const toGoodNewsArticleQueryResponse =
  (locale: string, lastDate: string | undefined) =>
    async (
      response: ContentfulEntriesResponse,
    ): Promise<GoodNewsArticleQueryResponse> => {
      return {
        // TODO async can be removed once resolvers receive pictureUrls
        articles: (await Promise.all(response.items.map(toGoodNewsArticle)))
          .filter((article) => article.language === locale),
      };
    };

const allowedLocales = ["de", "en"];

const BASE_URL = "https://cdn.contentful.com/spaces/";

export const executeArticlesQuery = (config: ContentfulConfig) =>
  (
    // deno-lint-ignore no-explicit-any
    _parent: any,
    parameters: { locale: string; lastDate: string | undefined },
  ): Promise<GoodNewsArticleQueryResponse> => {
    // TODO consider using Date type
    //  from https://the-guild.dev/graphql/scalars/docs/scalars/date
    //  or https://the-guild.dev/graphql/scalars/docs/scalars/local-date

    const validatedLocale = allowedLocales.includes(parameters.locale)
      ? parameters.locale
      : "en";
    const url = new URL(`${BASE_URL}/${config.spaceId}/environments/${config.environment}/entries`);
    url.searchParams.set('skip', '0')
    url.searchParams.set('limit', '10')
    log.debug(`fetching articles from ${url}`);
    const start = Date.now();
    return fetch(url, { headers: { 'Authentication': `Bearer ${config.deliveryApiAccessToken}}`}})
      .then((result) => result.json())
      .then(toGoodNewsArticleQueryResponse(validatedLocale, parameters.lastDate))
      .then((result) => {
        const duration = Date.now() - start;
        log.debug(`  fetching articles took ${duration} ms`);
        return result;
      });
  };
