"use client";

import Image from "next/image";
import type { Medicine } from "../types";
import MedicineAddToCart from "./medicine-add-to-cart";

type MedicineCardProps = {
  medicine: Medicine;
};

export default function MedicineItem({ medicine }: MedicineCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-input flex justify-between items-center">
      <div className="flex">
        <Image
          src="/medicine.jpg"
          alt={medicine.name}
          width={80}
          height={80}
          className="rounded-lg ml-4"
        />
        <div className=" flex flex-col justify-between text-base">
          <h3 className="font-bold text">{medicine.name}</h3>
          <p className="text-sm text-muted-foreground/70">
            {medicine.price.toLocaleString()} تومان
          </p>
        </div>
      </div>

      <MedicineAddToCart medicine={medicine} />
    </div>
  );
}
