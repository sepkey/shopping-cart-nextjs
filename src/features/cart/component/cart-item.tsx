"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Item } from "../types";

type CartItemProps = { item: Item };

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Image
            src="/medicine.jpg"
            alt={item.name}
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h3 className="font-medium">{item.name}</h3>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between items-center ">
        <div className="">تعداد کالا</div>
        <div className="">{item.quantity} عدد</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="">قیمت</div>
        <div className="text-gray-700">{item.price.toLocaleString()} تومان</div>
      </div>
    </div>
  );
}
