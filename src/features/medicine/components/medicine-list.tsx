import { Button } from "@/components/ui/button";
import { ParsedSearchParams } from "@/lib/search-params";
import { cartPath } from "@/paths";
import Link from "next/link";
import { getMedicines } from "../actions/get-medicines";
import MedicineItem from "./medicine-item";
import MedicinePagination from "./medicine-pagination";

type MedicineListProps = {
  searchParams: ParsedSearchParams;
};

export default async function MedicineList({
  searchParams,
}: MedicineListProps) {
  const { medicines, metadata } = await getMedicines(searchParams);
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-4 mx-auto ">
      {medicines.map((medicine) => (
        <MedicineItem key={medicine.id} medicine={medicine} />
      ))}

      <MedicinePagination paginatedTicketMetadata={metadata} />

      <Button className="bg-indigo-800 p-2" asChild>
        <Link href={cartPath()} className="text-lg">
          تکمیل خرید
        </Link>
      </Button>
    </div>
  );
}
