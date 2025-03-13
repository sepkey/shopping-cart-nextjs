import { createSearchParamsCache, parseAsInteger } from "nuqs/server";

export const sortOptions = { shallow: false, clearOnDefault: true };

export const paginationParser = {
  page: parseAsInteger.withDefault(1),
  size: parseAsInteger.withDefault(4),
};

export const paginationOptions = { shallow: false, clearOnDefault: true };

export const searchParamsCache = createSearchParamsCache({
  ...paginationParser,
});

export type ParsedSearchParams = ReturnType<typeof searchParamsCache.parse>;
