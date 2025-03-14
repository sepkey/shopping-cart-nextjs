"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { Plus } from "lucide-react";
import { Medicine } from "../types";

type MedicineAddToCartProps = { medicine: Medicine };

export default function MedicineAddToCart({
  medicine,
}: MedicineAddToCartProps) {
  //   const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  console.log(items, "items");
  const handleAddToCart = async () => {
    addItem({ ...medicine, quantity: medicine.quantity || 1 });
    // setIsAdded(true);
  };
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={handleAddToCart}
      className="text-indigo-800 font-semibold self-end"
      //   disabled={isAdded}
    >
      افزودن
      <Plus className="h-5 w-5" />
    </Button>
  );
}
