import CartIndicator from "@/features/cart/component/cart-indicator";
import { cartPath, homePath } from "@/paths";
import { ChevronRight, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import ToggleHeaderIcon from "./toggle-header-icon";

export default function Header() {
  return (
    <nav className="bg-[#E0E4EF]  supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b  backdrop-blur w-full flex  py-4 px-8 justify-between">
      <Link href={homePath()}>
        <ToggleHeaderIcon main={<Menu />} alternative={<ChevronRight />} />
      </Link>

      <Link href={cartPath()}>
        <ToggleHeaderIcon main={<ShoppingCart />} alternative={null} />
        <CartIndicator />
      </Link>
    </nav>
  );
}
