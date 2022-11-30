import {
  afterEach, assertEquals, describe, it, Stub
} from "./dev_deps.ts";
import {
  contentfulResponse,
  item0,
  item0_headline,
  item0_id,
  item1,
  item1_headline, item1_id,
  item2, item2_id,
  item3, item3_id,
  item4, item4_id,
  item5, item5_id
} from "./goodnews_test_data.ts";
import {executeArticlesQuery} from "./goodnews.ts";
import {ContentfulConfig} from "./server.ts";
import {GoodNewsArticleQueryResponse} from "./api_types.ts";
import {stubFetchByUrlPrefix} from "./common_test.ts";
import {ContentfulEntriesResponse, ContentfulItem} from "./contentful_types.ts";

const mockConfig: ContentfulConfig = {
  spaceId: "testSpaceId",
  environment: "master",
  deliveryApiAccessToken: "testAccessToken",
}

type MockPage = {
  skip: number
  limit: number
  items: ContentfulItem[]
}

const mockResponse = (pages: MockPage[]) => {
  const urlFor = (skip: number, limit: number): string =>
    `https://cdn.contentful.com/spaces/${mockConfig.spaceId}/environments/${mockConfig.environment}/entries?skip=${skip}&limit=${limit}`

  const responses: Record<string, ContentfulEntriesResponse> =
    pages.map((page) => {
      let obj: any = {}
      const url = urlFor(page.skip, page.limit);
      const response = contentfulResponse(page.skip, page.limit, page.items);
      obj[url] = response
      return obj as Record<string, ContentfulEntriesResponse>
    }).reduce((prev, curr) => ({...prev, ...curr}));

  stubFetchByUrlPrefix(responses)
}

const assertContains = (result: GoodNewsArticleQueryResponse, id: string) => {
  const articlesIds = result.articles.map((article) => article.id);
  assertEquals(
    articlesIds.includes(id),
    true,
    `Article with ID "${id} is NOT contained in result ([${articlesIds.join(',')}])"`
  )
}

const assertNotContains = (result: GoodNewsArticleQueryResponse, id: string) => {
  const articlesIds = result.articles.map((article) => article.id);
  assertEquals(
    articlesIds.includes(id),
    false,
    `Article with ID "${id} is contained in result ([${articlesIds.join(',')}]) but SHOULD NOT BE"`
  )
}


describe("goodnews", () => {
  let fetchStub: Stub;

  afterEach(() => {
    fetchStub?.restore();
  });

  it("should fetch articles of one day when within the page", async () => {
    mockResponse([
      {skip: 0, limit: 3, items: [item0("2022-11-29"), item1("2022-11-29"), item2("2022-11-28")]},
      {skip: 3, limit: 3, items: [item3("2022-11-28"), item4("2022-11-27"), item5("2022-11-27")]}
    ])

    const result = await executeArticlesQuery(mockConfig)(null, {locale: "en", lastDate: undefined})

    assertContains(result, item0_id)
    assertContains(result, item1_id)

    assertNotContains(result, item2_id)
    assertNotContains(result, item3_id)
    assertNotContains(result, item4_id)
    assertNotContains(result, item5_id)
  });

  it("should fetch articles of one day when distributed over multiple pages", () => {
    // [d1, d1, d1, d1], [d1, d2, d2, d2], ...
    // TODO should fetch 1st page
    // TODO should fetch 2nd page
    // TODO should not fetch 3rd page
    assertEquals(true, true);
  });

  it("should fetch articles of an older day when within the page", () => {
    // [d1, d1, d1], [d2, d2, d3], [d3, d3, d3], ...
    // TODO should fetch 1st page
    // TODO should fetch 2nd page
    // TODO should not fetch 3rd page
    assertEquals(true, true);
  });

  it("should fetch articles of an older day when fills the page and check next page for more", () => {
    // [d1, d1, d1], [d2, d2, d2], [d3, d3, d3], ...
    // TODO should fetch 1st page
    // TODO should fetch 2nd page
    // TODO should fetch 3rd page
    // TODO should not fetch 4th page
    assertEquals(true, true);
  });

  it("should fetch articles of an older day when distributed over multiple pages", () => {
    // [d1, d1], [d1, d2], [d2, d3], ...
    // TODO should fetch 1st page
    // TODO should fetch 2nd page
    // TODO should fetch 3rd page
    // TODO should not fetch 4th page
    assertEquals(true, true);
  });

  it("should deliver articles according to sortKey order", () => {
    assertEquals(true, true);
  })

  it("should filter out articles with a different language", () => {
    assertEquals(true, true);
  })

  it("includes image url from bildSource", () => {
    assertEquals(true, true);
  });

  it("includes image url from bildManuell (asset resolution)", () => {
    assertEquals(true, true);
  });
});
