import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/atoms/language-switcher";
import { usePathname } from "next/navigation"; // <--- Импортируем
import { cn } from "@/utils/helpers";

interface Props {
  mobile?: boolean;
  closeMenu?: () => void;
}

export const Navbar = ({ mobile, closeMenu }: Props) => {
  const pathname = usePathname();

  const t = useTranslations();

  const isActive = (href: string) => pathname.endsWith(href);

  if (mobile) {
    return (
      <nav className="flex flex-col gap-3">
        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <Link
              href="https://wa.me/996997111888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-1.5 px-3.5 sm:py-2 sm:px-4 text-[#12B76A] bg-[#F9FAFB] rounded-xl"
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
              href="/cabinet"
              className="flex items-center justify-center gap-2 py-1.5 px-3.5 sm:py-2 sm:px-4 text-[#1570EF] bg-[#1570EF1A] rounded-xl"
            >
              {t("Войти")}
            </Link>
          </li>

          <li>
            <Link
              href="/documents"
              className={cn(
                "hover:text-[#1570EF] flex items-center justify-between gap-0.5",
                isActive("/documents") && "text-[#1570EF]"
              )}
              onClick={() => closeMenu?.()}
            >
              {t("Документы")}
              {mobile && (
                <Image
                  src="/icons/arrow.svg"
                  alt="Иконка"
                  width={24}
                  height={24}
                />
              )}
            </Link>
          </li>

          <li>
            <Link
              href="/addresses"
              className={cn(
                "hover:text-[#1570EF] flex items-center justify-between gap-0.5",
                isActive("/addresses") && "text-[#1570EF]"
              )}
              onClick={() => closeMenu?.()}
            >
              {t("Где купить")}

              {mobile && (
                <Image
                  src="/icons/arrow.svg"
                  alt="Иконка"
                  width={24}
                  height={24}
                />
              )}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-3 lgx:gap-10">
      <ul className="flex items-center gap-3 lgx:gap-10">
        <li>
          <Link
            href="/documents"
            className={cn(
              "hover:text-[#1570EF]",
              isActive("/documents") && "text-[#1570EF]"
            )}
          >
            {t("Документы")}
          </Link>
        </li>
        <li>
          <Link
            href="/addresses"
            className={cn(
              "hover:text-[#1570EF]",
              isActive("/addresses") && "text-[#1570EF]"
            )}
          >
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
            href="/cabinet"
            className="flex items-center gap-2 py-2 px-4 text-[#1570EF] bg-[#1570EF1A] rounded-xl"
          >
            {t("Войти")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
