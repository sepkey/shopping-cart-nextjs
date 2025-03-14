"use client";

import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { homePath } from "@/paths";
import { useCartStore } from "@/store/cart-store";
import { MessageSquareWarning } from "lucide-react";
import Link from "next/link";
import CartItem from "./cart-item";

export default function CartList() {
  const items = useCartStore((state) => state.items);

  if (items.length === 0) {
    return (
      <Placeholder
        label="سبد خرید شما خالی است"
        icon={<MessageSquareWarning />}
        button={
          <Button asChild>
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
    </div>
  );
}
