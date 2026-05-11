import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MetadataParams } from "../interfaces";
import { OG_LOCALE_MAP, SITE_URL } from "../constants";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const checkFormValid = (phone: string, name: string) => {
  const digitsOnly = phone.replace(/\D/g, "");
  const digitsAfter996 = digitsOnly.slice(3);

  return name.trim() !== "" && digitsAfter996.length >= 6;
};

export const generateMetadata = async ({
  params,
}: Readonly<MetadataParams>): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/icons/logo.svg",
    },
    keywords: t.raw("keywords") as string[],
    authors: [
      {
        name: "Alisher Zhuman",
        url: "https://www.linkedin.com/in/alisher-zhuman",
      },
    ],
    creator: "Alisher Zhuman",
    publisher: "Alisher",
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${SITE_URL}/${locale}`,
      siteName: "Quant",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale: OG_LOCALE_MAP[locale] ?? "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/images/logo.png"],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ru: `${SITE_URL}/ru`,
        kg: `${SITE_URL}/kg`,
        en: `${SITE_URL}/en`,
      },
    },
  };
};
