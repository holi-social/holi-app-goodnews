import {
  afterEach,
  assert,
  assertEquals,
  assertExists,
  describe,
  it,
  Stub,
} from "./dev_deps.ts";
import {
  contentfulResponse,
  item0,
  item0_articleUrl,
  item0_bildSource,
  item0_headline,
  item0_id,
  item0_photoCredit,
  item0_quelle,
  item0_teaserText,
  item1,
  item1_id,
  item2,
  item2_bild_url,
  item2_id,
  item3,
  item3_id,
  item4,
  item4_id,
  item5,
  item5_id,
} from "./goodnews_test_data.ts";
import { executeArticlesQuery } from "./goodnews.ts";
import {
  ContentfulConfig,
  createGraphQLServer,
  GraphQLServer,
  ServerConfig,
} from "./server.ts";
import { GoodNewsArticle, GoodNewsArticleQueryResponse } from "./api_types.ts";
import { processGqlRequest, stubFetchByUrlPrefix } from "./common_test.ts";
import {
  ContentfulEntriesResponse,
  ContentfulItem,
} from "./contentful_types.ts";

const mockConfig = (pageSize: number): ContentfulConfig => ({
  baseUrl: "https://test.com/spaces",
  spaceId: "testSpaceId",
  environment: "master",
  deliveryApiAccessToken: "testAccessToken",
  pageSize,
});

type MockPage = {
  skip: number;
  limit: number;
  items: ContentfulItem[];
};

const withMockedResponses = async (
  config: ContentfulConfig,
  pages: MockPage[],
  testFn: () => unknown,
) => {
  const urlFor = (skip: number, limit: number): string =>
    `https://test.com/spaces/${config.spaceId}/environments/${config.environment}/entries?skip=${skip}&limit=${limit}&access_token=${config.deliveryApiAccessToken}`;

  const responses: Record<string, ContentfulEntriesResponse> = pages.map(
    (page) => {
      // deno-lint-ignore no-explicit-any
      const obj: any = {};
      const url = urlFor(page.skip, page.limit);
      obj[url] = contentfulResponse(page.skip, page.limit, page.items);
      return obj as Record<string, ContentfulEntriesResponse>;
    },
  ).reduce((prev, curr) => ({ ...prev, ...curr }));

  const fetchStub = stubFetchByUrlPrefix(responses);
  try {
    await testFn();
  } finally {
    fetchStub.restore();
  }
};

const assertContains = (result: GoodNewsArticleQueryResponse, id: string) => {
  const articlesIds = result.articles.map((article) => article.id);
  assertEquals(
    articlesIds.includes(id),
    true,
    `Article with ID "${id}" is NOT contained in result ([${
      articlesIds.join(",")
    }])"`,
  );
};

const assertNotContains = (
  result: GoodNewsArticleQueryResponse,
  id: string,
) => {
  const articlesIds = result.articles.map((article) => article.id);
  assertEquals(
    articlesIds.includes(id),
    false,
    `Article with ID "${id}" is contained in result ([${
      articlesIds.join(",")
    }]) but SHOULD NOT BE"`,
  );
};

const assertPreviousDateTeaser = (
  result: GoodNewsArticleQueryResponse,
  id: string,
) => {
  assertExists(
    result.previousDateTeaser,
    `previousDateTeaser is not contained in result but it should be`,
  );
  assertEquals(
    result.previousDateTeaser!.id,
    id,
    `previousDateTeaser does not have expected ID "${id}" (actual ID: ${
      result.previousDateTeaser!.id
    }`,
  );
};

describe("goodnews", () => {
  it("should fetch articles of one day when within the page", () => {
    const config = mockConfig(3);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 3,
        items: [
          item0("2022-11-29", "de"),
          item1("2022-11-29", "de"),
          item2("2022-11-28", "de"),
        ],
      },
      {
        skip: 3,
        limit: 3,
        items: [
          item3("2022-11-28", "de"),
          item4("2022-11-27", "de"),
          item5("2022-11-27", "de"),
        ],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {}, {
        language: "de",
      });

      assertContains(result, item0_id);
      assertContains(result, item1_id);

      assertNotContains(result, item2_id);
      assertNotContains(result, item3_id);
      assertNotContains(result, item4_id);
      assertNotContains(result, item5_id);

      assertPreviousDateTeaser(result, item2_id);
    });
  });

  it("should fetch articles of one day when distributed over multiple pages", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-29", "de"), item3("2022-11-28", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {}, {
        language: "de",
      });

      assertContains(result, item0_id);
      assertContains(result, item1_id);
      assertContains(result, item2_id);

      assertNotContains(result, item3_id);

      assertPreviousDateTeaser(result, item3_id);
    });
  });

  it("should fetch articles of an older day when within the page", () => {
    const config = mockConfig(3);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 3,
        items: [
          item0("2022-11-29", "de"),
          item1("2022-11-29", "de"),
          item2("2022-11-29", "de"),
        ],
      },
      {
        skip: 3,
        limit: 3,
        items: [
          item3("2022-11-28", "de"),
          item4("2022-11-28", "de"),
          item5("2022-11-27", "de"),
        ],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {
        lastDate: "2022-11-29",
      }, { language: "de" });

      assertNotContains(result, item0_id);
      assertNotContains(result, item1_id);
      assertNotContains(result, item2_id);

      assertContains(result, item3_id);
      assertContains(result, item4_id);

      assertNotContains(result, item5_id);

      assertPreviousDateTeaser(result, item5_id);
    });
  });

  it("should fetch articles of an older day when fills the page and check next page for more", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-28", "de"), item3("2022-11-28", "de")],
      },
      {
        skip: 4,
        limit: 2,
        items: [item4("2022-11-27", "de"), item5("2022-11-27", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {
        lastDate: "2022-11-29",
      }, { language: "de" });

      assertNotContains(result, item0_id);
      assertNotContains(result, item1_id);

      assertContains(result, item2_id);
      assertContains(result, item3_id);

      assertNotContains(result, item4_id);
      assertNotContains(result, item5_id);

      assertPreviousDateTeaser(result, item4_id);
    });
  });

  it("should fetch articles of an older day when distributed over multiple pages", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-28", "de"), item3("2022-11-28", "de")],
      },
      {
        skip: 4,
        limit: 2,
        items: [item4("2022-11-28", "de"), item5("2022-11-27", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {
        lastDate: "2022-11-29",
      }, { language: "de" });

      assertNotContains(result, item0_id);
      assertNotContains(result, item1_id);

      assertContains(result, item2_id);
      assertContains(result, item3_id);
      assertContains(result, item4_id);

      assertNotContains(result, item5_id);

      assertPreviousDateTeaser(result, item5_id);
    });
  });

  it("should deliver articles according to sortKey order", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-28", "de", 3), item3("2022-11-28", "de", 2)],
      },
      {
        skip: 4,
        limit: 2,
        items: [item4("2022-11-28", "de", 1), item5("2022-11-27", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {
        lastDate: "2022-11-29",
      }, { language: "de" });

      assertEquals(
        result.articles.map((article) => article.id),
        [item4_id, item3_id, item2_id],
      );
    });
  });

  it("should filter out articles with a different language (same language first in response)", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-29", "en"), item3("2022-11-28", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {}, {
        language: "de",
      });

      assertContains(result, item0_id);
      assertContains(result, item1_id);

      assertNotContains(result, item2_id);
      assertNotContains(result, item3_id);

      assertPreviousDateTeaser(result, item3_id);
    });
  });

  it("should filter out articles with a different language (other language first in response)", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-29", "de"), item3("2022-11-29", "en")],
      },
      {
        skip: 4,
        limit: 2,
        items: [item4("2022-11-29", "en"), item5("2022-11-28", "en")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {}, {
        language: "en",
      });

      assertNotContains(result, item0_id);
      assertNotContains(result, item1_id);
      assertNotContains(result, item2_id);

      assertContains(result, item3_id);
      assertContains(result, item4_id);

      assertNotContains(result, item5_id);

      assertPreviousDateTeaser(result, item5_id);
    });
  });

  it("includes image url from bildSource", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-29", "en"), item3("2022-11-28", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {}, {
        language: "de",
      });

      const article = result.articles.find((article) =>
        article.id === item0_id
      );
      assert(article);
      assertEquals(article?.pictureUrl, item0_bildSource);
    });
  });

  it("includes image url from bildManuell (asset resolution)", () => {
    const config = mockConfig(2);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 2,
        items: [item0("2022-11-29", "de"), item1("2022-11-29", "de")],
      },
      {
        skip: 2,
        limit: 2,
        items: [item2("2022-11-29", "de"), item3("2022-11-28", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {}, {
        language: "de",
      });

      const article = result.articles.find((article) =>
        article.id === item2_id
      );
      assert(article);
      assertEquals(article?.pictureUrl, item2_bild_url);
    });
  });

  it("should include all expected data", () => {
    const config = mockConfig(1);
    return withMockedResponses(config, [
      {
        skip: 0,
        limit: 1,
        items: [item0("2022-11-29", "de", 13)],
      },
      {
        skip: 1,
        limit: 1,
        items: [item1("2022-11-28", "de")],
      },
    ], async () => {
      const result = await executeArticlesQuery(config)(null, {}, {
        language: "de",
      });

      const article = result.articles.find((article) =>
        article.id === item0_id
      );
      assert(article);
      assertEquals(article?.date, "2022-11-29");
      assertEquals(article?.headline, item0_headline);
      assertEquals(article?.teaserText, item0_teaserText);
      assertEquals(article?.pictureUrl, item0_bildSource);
      assertEquals(article?.pictureCredit, item0_photoCredit);
      assertEquals(article?.articleUrl, item0_articleUrl);
      assertEquals(article?.source, item0_quelle);
      assertEquals(article?.sortKey, 13);
      assertEquals(article?.category, "CLIMATE");
      assertEquals(article?.language, "de");
    });
  });
});

describe("GoodNews server", () => {
  let fetchStub: Stub;
  const contentfulConfig = mockConfig(2);
  const config: ServerConfig = {
    cacheEnabled: false,
    port: 8002,
    cacheTtlMs: 0,
    contentful: contentfulConfig,
  };
  const responses = [
    {
      skip: 0,
      limit: 2,
      items: [item0("2022-11-29", "de"), item1("2022-11-29", "en")],
    },
    {
      skip: 2,
      limit: 2,
      items: [item2("2022-11-28", "de"), item3("2022-11-28", "en")],
    },
  ];

  interface TestGoodNewsResponse {
    articles: Partial<GoodNewsArticle>[];
    previousDateTeaser: Partial<GoodNewsArticle> | undefined;
  }
  const queryArticles = (
    graphQLServer: GraphQLServer,
    headers = {},
  ): Promise<TestGoodNewsResponse> => {
    const query = `
  query Articles {
    articles {
      articles {
        id
        language
      }
      previousDateTeaser {
        id
        language
      }
    }
  }`;
    return processGqlRequest(graphQLServer, query, {}, headers).then(
      (result) => result?.articles as TestGoodNewsResponse,
    );
  };

  afterEach(() => {
    fetchStub?.restore();
  });

  it("correctly extracts language from locale", () => {
    return withMockedResponses(contentfulConfig, responses, async () => {
      const graphQLServer = createGraphQLServer(config);
      const result = await queryArticles(graphQLServer, {
        "accept-language": "de-DE",
      });

      assertEquals(result, {
        articles: [
          {
            id: item0_id,
            language: "de",
          },
        ],
        previousDateTeaser: {
          id: item2_id,
          language: "de",
        },
      });
    });
  });

  it("uses correct language as default if requested language is not supported", () => {
    return withMockedResponses(contentfulConfig, responses, async () => {
      const graphQLServer = createGraphQLServer(config);
      const result = await queryArticles(graphQLServer, {
        "accept-language": "es",
      });

      assertEquals(result, {
        articles: [
          {
            id: item1_id,
            language: "en",
          },
        ],
        previousDateTeaser: {
          id: item3_id,
          language: "en",
        },
      });
    });
  });
});
