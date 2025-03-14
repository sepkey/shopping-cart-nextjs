"use client";

import { homePath } from "@/paths";
import { useCartStore } from "@/store/cart-store";
import { usePathname } from "next/navigation";

export default function CartIndicator() {
  const items = useCartStore((state) => state.items);
  const pathname = usePathname();

  if (items.length === 0 || pathname !== homePath()) {
    return null;
  }

  return (
    <div className="absolute top-2 left-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
      {items.length}
    </div>
  );
}
