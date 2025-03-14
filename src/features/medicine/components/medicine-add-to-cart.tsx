"use client";
import { Button } from "@/components/ui/button";
import { Item } from "@/features/cart/types";
import { useCartStore } from "@/store/cart-store";
import { Plus } from "lucide-react";
import { Medicine } from "../types";

type MedicineAddToCartProps = { medicine: Medicine };

export default function MedicineAddToCart({
  medicine,
}: MedicineAddToCartProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async () => {
    const newItem: Item = {
      id: medicine.id,
      image: medicine.image,
      name: medicine.name,
      price: medicine.price,
      quantity: 1,
    };
    addItem(newItem);
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
