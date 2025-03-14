"use client";
import { Button } from "@/components/ui/button";
import { Item } from "@/features/cart/types";
import { useCartStore } from "@/store/cart-store";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { Medicine } from "../types";

type MedicineAddToCartProps = { medicine: Medicine };

export default function MedicineAddToCart({
  medicine,
}: MedicineAddToCartProps) {
  const addItem = useCartStore((state) => state.addItem);
  const t = useTranslations("medicine");

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
      variant="ghost"
      onClick={handleAddToCart}
      className="text-primary font-semibold self-end "
    >
      <Plus className="[&_svg]:size-6 " />
      {t("add")}
    </Button>
  );
}
