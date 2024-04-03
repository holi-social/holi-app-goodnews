import { returnsNext, stub } from "./dev_deps.ts";
import { GraphQLServer } from "./server.ts";

export type ResponsePayload = Record<string, unknown> | Error;

export const stubFetch = (response: ResponsePayload) => {
  return stub(
    globalThis,
    "fetch",
    returnsNext([Promise.resolve(new Response(JSON.stringify(response)))]),
  );
};

export type UrlPrefix = string;

export const stubFetchByUrlPrefix = (
  responses: Record<UrlPrefix, ResponsePayload>,
) => {
  return stub(globalThis, "fetch", (input) => {
    const url = input.toString();
    for (const [urlPrefix, response] of Object.entries(responses)) {
      if (url.startsWith(urlPrefix)) {
        if (response instanceof Error) {
          return Promise.reject(response);
        } else {
          return Promise.resolve(new Response(JSON.stringify(response)));
        }
      }
    }
    const prefixes = Object.keys(responses);
    throw Promise.reject(
      new Error(
        `Unexpected request URL "${url}", expected prefixes are:\n  ${
          prefixes.join("\n  ")
        }`,
      ),
    );
  });
};

export const processGqlRequest = (
  graphQLServer: GraphQLServer,
  query: string,
  variables: Record<string, unknown> = {},
  headers: Record<string, unknown> = {},
): Promise<Record<string, unknown> | undefined | null> => {
  const request = new Request("http://localhost:8002/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "*/*",
      ...headers,
    },
    body: JSON.stringify({
      operationName: null,
      variables: variables,
      query: query,
      extensions: { headers },
    }),
  });
  return graphQLServer.handleRequest(request)
    // deno-lint-ignore no-explicit-any
    .then((response: any) => response.json())
    // deno-lint-ignore no-explicit-any
    .then((response: any) => response.data);
};
