
export const LanguageSwitcher = () => {

  return (
    <div className="inline-flex bg-[#F2F4F7] rounded-xl p-0.5">
      {["RUS", "KYP", "ENG"].map((lang) => (
        <button
          key={lang}
          onClick={() => setActive(lang as "RUS" | "KYP" | "ENG")}
          className={`px-3 py-2 rounded-xl transition-colors
            ${
              active === lang
                ? "bg-white text-[#1570EF]"
                : "text-[#101828B2] cursor-pointer"
            }`}
        >
          {lang === "RUS" ? "РУС" : lang === "KYP" ? "КЫР" : "ENG"}
        </button>
      ))}
    </div>
  );
};
