import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/atoms/language-switcher";
import { cn } from "@/utils/helpers";

interface Props {
  mobile?: boolean;
}

export const Navbar = ({ mobile }: Props) => {
  const t = useTranslations();

  return (
    <nav
      className={cn(
        "items-center gap-3 lgx:gap-10",
        mobile ? "flex flex-col" : "hidden lg:flex"
      )}
    >
      <ul className="flex items-center gap-3 lgx:gap-10">
        <li>
          <Link href="/documents" className="hover:text-[#1570EF]">
            {t("Документы")}
          </Link>
        </li>

        <li>
          <Link href="/addresses" className="hover:text-[#1570EF]">
            {t("Где купить")}
          </Link>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <Link
            href="https://wa.me/996997111888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 px-4 text-[#12B76A] bg-[#F9FAFB] rounded-xl"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="Ватсап"
              width={22}
              height={22}
            />
            <p>+996 997 111 888</p>
          </Link>
        </li>

        <li>
          <LanguageSwitcher />
        </li>

        <li>
          <Link
            href="http://cabinet.quant.kg/cabinet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 px-4 text-[#1570EF] bg-[#1570EF1A] rounded-xl"
          >
            {t("Войти")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
