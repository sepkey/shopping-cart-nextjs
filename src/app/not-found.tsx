import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { homePath } from "@/paths";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("not_found");

  return (
    <Placeholder
      label={t("placeholder_message")}
      button={
        <Button asChild variant="outline">
          <Link href={homePath()}>{t("back_to")}</Link>
        </Button>
      }
    />
  );
}
