import { GoodNewsArticle, GoodNewsCategory } from "./api_types.ts";
import { dummyData } from "./dummy_data.ts";

export interface ContentfulItemFields {
  datum: string;
  headline: string;
  layout: string;
  bildManuell:
    | { sys: { type: string; linkType: "Asset"; id: string } }
    | undefined;
  bildSource: string | undefined;
  photoCredit: string;
  teaserText: string;
  quelle: string;
  articleUrl: string;
  sortKey: number;
  language: "de" | "en";
  categoryID:
    | "animal_rights"
    | "climate"
    | "digitization"
    | "education"
    | "global_health"
    | "human_rights"
    | "sustainability"
    | undefined;
}

// only covers the fields we're interested in
export type ContentfulItem = Record<string, unknown> & {
  sys: Record<string, unknown> & {
    id: string;
  };
  fields: ContentfulItemFields;
};

const resolveCategory = (
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
  }
};

const resolvePictureUrlFromAsset = (
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
    pictureUrl: await resolvePictureUrlFromAsset(item),
    pictureCredit: item.fields.photoCredit,
    articleUrl: item.fields.articleUrl,
    source: item.fields.quelle,
    sortKey: item.fields.sortKey,
    category: resolveCategory(item.fields),
    language: item.fields.language,
  };
};

const allowedLocales = ["de", "en"];

export const fetchArticles = (
  // deno-lint-ignore no-explicit-any
  _parent: any,
  parameters: { locale: string; _lastDate: string | undefined },
): Promise<GoodNewsArticle[]> => {
  // TODO implement language filtering
  // TODO consider using Date type
  //  from https://the-guild.dev/graphql/scalars/docs/scalars/date
  //  or https://the-guild.dev/graphql/scalars/docs/scalars/local-date
  if (!allowedLocales.includes(parameters.locale)) {
    throw new Error(
      `Unknown locale "${parameters.locale}" (known locales: ${
        allowedLocales.join(",")
      })`,
    );
  }
  return Promise.all(
    dummyData
      .filter((article) => article.fields.language === parameters.locale)
      .map(toGoodNewsArticle),
  );
};
