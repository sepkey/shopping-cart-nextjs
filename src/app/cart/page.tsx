import CartCta from "@/features/cart/component/cart-cta";
import CartList from "@/features/cart/component/cart-list";

export default function CartPage() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <CartList />
      <CartCta />
    </div>
  );
}
