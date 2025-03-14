import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { homePath } from "@/paths";
import Link from "next/link";

export default function NotFound() {
  return (
    <Placeholder
      label="این صفحه وجود ندارد."
      button={
        <Button asChild variant="outline">
          <Link href={homePath()}>بازگشت به صفحه محصولات</Link>
        </Button>
      }
    />
  );
}
