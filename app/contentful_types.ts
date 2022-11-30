/** items contain either bildManuell OR bildSource but not both */
export type ContentfulItemBild = {
  bildManuell:
    | { sys: { type: string; linkType: "Asset"; id: string } }
    | undefined;
} | {
  bildSource: string | undefined;
};

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
}

export type ContentfulItemFields =
  ContentfulItemCategory &
  ContentfulItemBild & {
  datum: string;
  headline: string;
  layout: string;
  photoCredit: string;
  teaserText: string;
  quelle: string;
  articleUrl: string;
  sortKey: number;
  language: "de" | "en";
}

// only covers the fields we're interested in
export type ContentfulItem = Record<string, unknown> & {
  sys: Record<string, unknown> & {
    id: string;
  };
  fields: ContentfulItemFields;
};

export type ContentfulEntriesResponse = Record<string, unknown> & {
  total: number;
  skip: number;
  limit: number;
  items: ContentfulItem[];
};