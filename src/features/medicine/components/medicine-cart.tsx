"use client";

// import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import type { Medicine } from "../types";
import MedicineAddToCart from "./medicine-add-to-cart";

type MedicineCardProps = {
  medicine: Medicine;
};

export default function MedicineCard({ medicine }: MedicineCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-zinc-300 flex justify-between items-center">
      <div className="flex">
        <Image
          src="/medicine.jpg"
          alt={medicine.name}
          width={80}
          height={80}
          className="rounded-lg ml-4"
        />
        <div className=" flex flex-col justify-between">
          <div className=" font-bold">{medicine.name}</div>
          <div className="text-gray-600 text-sm">
            {medicine.price.toLocaleString()} تومان
          </div>
        </div>
      </div>

      <MedicineAddToCart medicine={medicine} />
    </div>
  );
}
