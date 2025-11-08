"use client";
import { useRouter, usePathname } from "next/navigation";

const languages = [
  { code: "ru", label: "РУС" },
  { code: "kg", label: "КЫР" },
  { code: "en", label: "ENG" },
];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1];

  return (
    <div className="inline-flex bg-[#F2F4F7] rounded-xl p-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => router.push(`/${lang.code}${pathname.slice(3)}`)}
          className={`px-3 py-2 rounded-xl transition-colors ${
            currentLang === lang.code
              ? "bg-white text-[#1570EF]"
              : "text-[#101828B2] cursor-pointer"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
