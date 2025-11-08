import { useTranslations } from "next-intl";
import { cn } from "@/utils/helpers";

interface Props {
  onClick: () => void;
  className?: string;
}

export const AdviceButton = ({ onClick, className }: Props) => {
  const t = useTranslations();

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-1.5 px-3.5 sm:py-2 sm:px-4 text-white bg-[#1570EF] hover:bg-[#1056c2] transition cursor-pointer rounded-xl",
        className
      )}
    >
      {t("Получить консультацию")}
    </button>
  );
};
