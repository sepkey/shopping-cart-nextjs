"use client";
import { Button } from "@/components/ui/button";
import { purchasePath } from "@/paths";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";

export default function CartCta() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  if (items.length === 0) return null;
  return (
    <div className="w-full max-w-[600px] flex mx-auto gap-4">
      <Button className="bg-indigo-800 p-2 w-1/2" asChild>
        <Link href={purchasePath()} className="text-lg">
          تکمیل خرید
        </Link>
      </Button>

      <Button onClick={clearCart} variant="outline" className="w-1/2 p-2">
        حذف سبد
      </Button>
    </div>
  );
}
