import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Item } from "../types";

type CartItemProps = { item: Item };

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Image
            src="/medicine.jpg"
            alt={item.name}
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>
        <h3 className=" font-semibold">{item.name}</h3>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between items-center mb-1 ">
        <span className="text-sm">تعداد کالا</span>
        <span className="text-sm">{item.quantity} عدد</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm">قیمت</span>
        <span className="text-sm text-muted-foreground/80">
          {item.price.toLocaleString()} تومان
        </span>
      </div>
    </div>
  );
}
