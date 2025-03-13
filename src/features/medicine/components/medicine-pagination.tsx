"use client";
import Pagination from "@/components/pagination";
import { paginationOptions, paginationParser } from "@/lib/search-params";
import { useQueryStates } from "nuqs";

type MedicinePaginationProps = {
  paginatedTicketMetadata: {
    count: number;
    hasNextPage: boolean;
  };
};

export default function MedicinePagination({
  paginatedTicketMetadata,
}: MedicinePaginationProps) {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOptions
  );

  return (
    <Pagination
      pagination={pagination}
      onPagination={setPagination}
      paginatedMetadata={paginatedTicketMetadata}
    />
  );
}
