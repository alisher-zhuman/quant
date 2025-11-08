"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { LANGUAGES } from "@/utils/constants";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = useLocale();

  return (
    <div className="inline-flex bg-[#F2F4F7] rounded-xl p-0.5">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() =>
            router.push(pathname.replace(/^\/[a-z]{2}/, `/${code}`))
          }
          className={`px-3 py-2 rounded-xl transition-colors ${
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
