import {returnsNext, stub} from "./dev_deps.ts";

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
    throw Promise.reject(new Error(`Unexpected request URL "${url}"`));
  });
};