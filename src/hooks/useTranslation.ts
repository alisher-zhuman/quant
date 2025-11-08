import { useRouter } from "next/router";
import ru from "../../public/locales/en/common.json";
import kg from "../../public/locales/en/common.json";
import en from "../../public/locales/en/common.json";

const translations = { en, ru, kg };

export const useTranslation = () => {
  const { locale } = useRouter();

  const t = (key) => {
    return translations[locale]?.[key] || key;
  };

  return { t, locale };
};
