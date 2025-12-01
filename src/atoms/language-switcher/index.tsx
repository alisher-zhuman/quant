"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { LANGUAGES } from "@/utils/constants";

export const LanguageSwitcher = () => {
  const router = useRouter();

  const pathname = usePathname();

  const currentLang = useLocale();

  const onLanguageChange = (nextLang: string) => {
    if (nextLang === currentLang) return;

    sessionStorage.setItem("scrollY", window.scrollY.toString());
    router.replace(pathname.replace(/^\/[a-z]{2}/, `/${nextLang}`));
  };

  return (
    <div className="w-full lg:w-fit inline-flex bg-[#F2F4F7] rounded-xl p-1">
      {LANGUAGES.map(({ code, label }, i) => (
        <button
          key={i}
          onClick={() => onLanguageChange(code)}
          className={`flex-1 px-3 py-1 rounded-xl transition-colors ${
            currentLang === code
              ? "bg-white text-[#1570EF] font-medium"
              : "text-[#101828B2] cursor-pointer"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
