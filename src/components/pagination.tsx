import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type PageAndSize = { page: number; size: number };

type PaginationProps = {
  pagination: PageAndSize;
  onPagination: (pagination: PageAndSize) => void;
  paginatedMetadata: {
    count: number;
    hasNextPage: boolean;
  };
};
export default function Pagination({
  onPagination,
  pagination,
  paginatedMetadata: { count, hasNextPage },
}: PaginationProps) {
  const totalPages = Math.ceil(count / pagination.size);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePreviousPage = () => {
    onPagination({ ...pagination, page: pagination.page - 1 });
  };

  const handleNextPage = () => {
    onPagination({ ...pagination, page: pagination.page + 1 });
  };

  const handleSpecificPage = (page: number) => {
    onPagination({ ...pagination, page });
  };

  const previousButton = (
    <Button
      variant="outline"
      size="icon"
      disabled={pagination.page <= 1}
      onClick={handlePreviousPage}
      className="bg-muted border border-transparent shadow-transparent"
    >
      <ChevronRight />
    </Button>
  );

  const nextButton = (
    <Button
      variant="outline"
      size="icon"
      className="bg-muted border border-transparent shadow-transparent"
      disabled={!hasNextPage}
      onClick={handleNextPage}
    >
      <ChevronLeft />
    </Button>
  );
  return (
    <div className="flex items-center justify-center gap-2">
      {previousButton}

      {pages.map((page) => (
        <Button
          key={page}
          variant="outline"
          size="icon"
          onClick={() => handleSpecificPage(page)}
          className={cn(
            "bg-muted border border-transparent shadow-transparent transition-colors",
            {
              "border-secondary text-secondary": pagination.page === page,
            }
          )}
        >
          {page}
        </Button>
      ))}

      {nextButton}
    </div>
  );
}
