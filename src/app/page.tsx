import Spinner from "@/components/ui/spinner";
import MedicineCta from "@/features/medicine/components/medicine-cta";
import MedicineList from "@/features/medicine/components/medicine-list";
import { searchParamsCache } from "@/lib/search-params";
import { SearchParams } from "nuqs";
import { Suspense } from "react";

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

export default function Home({ searchParams }: HomePageProps) {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <Suspense fallback={<Spinner />}>
        <MedicineList searchParams={searchParamsCache.parse(searchParams)} />
      </Suspense>
      <MedicineCta />
    </div>
  );
}
