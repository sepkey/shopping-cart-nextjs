"use client";
import { Button } from "@/components/ui/button";
import { cartPath } from "@/paths";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";

export default function MedicineCta() {
  const items = useCartStore((state) => state.items);

  if (items.length === 0) return null;

  return (
    <div className="w-full max-w-[600px] flex flex-col mx-auto ">
      <Button className="bg-indigo-800 p-2" asChild>
        <Link href={cartPath()} className="text-lg">
          تکمیل خرید
        </Link>
      </Button>
    </div>
  );
}
