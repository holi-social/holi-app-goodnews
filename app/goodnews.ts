import { GoodNewsArticle } from "./api_types.ts";

export type ContentfulItem = {
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
};

const resolvePictureUrlFromAsset = (_item: ContentfulItem): Promise<string> => {
  // TODO implement asset resolution
  return Promise.resolve(
    "https://www.motherjones.com/wp-content/uploads/2022/05/hawkesbay.jpg?resize=1536,863",
  );
};

export const toGoodNewsArticle = async (
  item: ContentfulItem,
): Promise<GoodNewsArticle> => {
  return {
    date: item.datum,
    headline: item.headline,
    teaserText: item.teaserText,
    pictureUrl: item.bildSource || await resolvePictureUrlFromAsset(item),
    pictureCredit: item.photoCredit,
    articleUrl: item.articleUrl,
    source: item.quelle,
    sortKey: item.sortKey,
    category: item.categoryID && item.categoryID.toUpperCase(),
    language: item.language,
  };
};
