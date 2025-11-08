import { Metadata } from "next";

export const METADATA: Metadata = {
  title: "КВАНТ",
  description:
    "Интеллектуальный счётчик воды КВАНТ — автоматический сбор показаний, контроль расхода и экономия для дома и бизнеса. Современные IoT-решения с точностью и надёжностью.",
  icons: {
    icon: "/icons/logo.svg",
  },
  keywords: [
    "счётчик воды",
    "умный счётчик",
    "КВАНТ",
    "IoT",
    "интернет вещей",
    "учёт воды",
    "автоматизация ЖКХ",
    "передача показаний",
    "умный дом",
  ],
  authors: [
    {
      name: "Alisher Jumanov",
      url: "https://www.linkedin.com/in/alisher-jumanov/",
    },
  ],
  creator: "Alisher Jumanov",
  publisher: "Alisher",
  metadataBase: new URL("https://quant.kg"),
  openGraph: {
    title: "КВАНТ — интеллектуальный счётчик воды",
    description:
      "Автоматический сбор и передача показаний. Экономия, контроль, удобство — КВАНТ для вашего дома и бизнеса.",
    url: "https://quant.kg",
    siteName: "Quant",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "КВАНТ — интеллектуальный счётчик воды",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "КВАНТ — интеллектуальный счётчик воды",
    description:
      "Автоматический сбор показаний и контроль расхода воды с помощью IoT-технологий.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://quant.kg",
  },
};

export const LANGUAGES = [
  { code: "ru", label: "РУС" },
  { code: "kg", label: "КЫР" },
  { code: "en", label: "ENG" },
];

export const DOCUMENTS = [
  {
    title: "Программа испытания СВУ",
    pages: 3,
    size: "2,8 МБ",
    file: "/files/Программа испытания СВУ.pdf",
  },
  {
    title: "Программа испытания СВК",
    pages: 3,
    size: "2,8 МБ",
    file: "/files/Программа испытания СВК.pdf",
  },
  {
    title: "Сертификат СВК15У",
    pages: 2,
    size: "37,5 МБ",
    file: "/files/Сертификат СВК15У.pdf",
  },
  {
    title: "Сертификат СВ15У",
    pages: 2,
    size: "38,1 МБ",
    file: "/files/Сертификат СВ15У.pdf",
  },
  {
    title: "Описание типа СВУ",
    pages: 3,
    size: "3 МБ",
    file: "/files/Описание типа СВУ.pdf",
  },
];
