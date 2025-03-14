"use client";

import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { homePath } from "@/paths";
import { useCartStore } from "@/store/cart-store";
import { MessageSquareWarning } from "lucide-react";
import Link from "next/link";
import CartItem from "./cart-item";

export default function CartList() {
  const { items, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <Placeholder
        label="سبد خرید شما خالی است"
        icon={<MessageSquareWarning />}
        button={
          <Button asChild variant="outline">
            <Link href={homePath()}>بازگشت به فروشگاه</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-4 mx-auto ">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <Separator className="mt-8" />

      <div className="flex justify-between items-center font-bold">
        <span>جمع کل</span>
        <span>{totalPrice().toLocaleString()} تومان</span>
      </div>
    </div>
  );
}
