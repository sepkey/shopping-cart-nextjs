import { ParsedSearchParams } from "@/lib/search-params";
import { getMedicines } from "../actions/get-medicines";
import MedicineCard from "./medicine-cart";
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
        <MedicineCard key={medicine.id} medicine={medicine} />
      ))}

      <MedicinePagination paginatedTicketMetadata={metadata} />
    </div>
  );
}
