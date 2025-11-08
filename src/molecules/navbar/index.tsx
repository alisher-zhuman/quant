import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/atoms/language-switcher";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-10">
      <ul className="flex items-center gap-10">
        <li>
          <Link href="/documents" className="hover:text-[#1570EF]">
            Документы
          </Link>
        </li>

        <li>
          <Link href="/addresses" className="hover:text-[#1570EF]">
            Где купить
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
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
};
