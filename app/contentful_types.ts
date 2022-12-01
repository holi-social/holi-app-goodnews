export type ContentfulLanguage = "de" | "en";

export type ContentfulItemBildSource = string;

export type ContentfulItemBildManuell = {
  sys: { type: string; linkType: string; id: string };
};

/** items contain either bildManuell OR bildSource but not both */
export type ContentfulItemBild =
  | { bildSource: ContentfulItemBildSource }
  | { bildManuell: ContentfulItemBildManuell };

export type ContentfulItemCategory = {
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

export type ContentfulItemFields =
  & Record<string, unknown>
  & ContentfulItemCategory
  & ContentfulItemBild
  & {
    datum: string;
    headline: string;
    layout: string;
    photoCredit: string;
    teaserText: string;
    quelle: string;
    articleUrl: string;
    sortKey: number;
    language: ContentfulLanguage;
  };

// only covers the fields we're interested in
export type ContentfulItem =
  & Record<string, unknown>
  & {
    sys:
      & Record<string, unknown>
      & {
        id: string;
      };
    fields: ContentfulItemFields;
  };

export type ContentfulAssetFields = {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
};

// only covers the fields we're interested in
export type ContentfulAsset = Record<string, unknown> & {
  sys: Record<string, unknown> & {
    id: string;
  };
  fields: ContentfulAssetFields;
};

export type ContentfulEntriesResponse = Record<string, unknown> & {
  total: number;
  skip: number;
  limit: number;
  items: ContentfulItem[];
  includes: {
    Asset: ContentfulAsset[];
  };
};
