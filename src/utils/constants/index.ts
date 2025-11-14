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
    titleKey: "programma_svu",
    pages: 3,
    size: "2,8 МБ",
    file: "/files/Программа испытания СВУ.pdf",
  },
  {
    titleKey: "programma_svk",
    pages: 3,
    size: "2,8 МБ",
    file: "/files/Программа испытания СВК.pdf",
  },
  {
    titleKey: "sertifikat_svk15u",
    pages: 2,
    size: "37,5 МБ",
    file: "/files/Сертификат СВК15У.pdf",
  },
  {
    titleKey: "sertifikat_sv15u",
    pages: 2,
    size: "38,1 МБ",
    file: "/files/Сертификат СВ15У.pdf",
  },
  {
    titleKey: "opisanie_svu",
    pages: 3,
    size: "3 МБ",
    file: "/files/Описание типа СВУ.pdf",
  },
];

export const EQUIPMENTS = [
  {
    name: "first_equipment",
    image: "/images/first_equipment.png",
    certificate: "/files/first_equipment_certificate.pdf",
    instruction: "/files/first_equipment_instruction.pdf",
  },
  {
    name: "second_equipment",
    image: "/images/second_equipment.png",
    certificate: "/files/second_equipment_certificate.pdf",
    instruction: "/files/second_equipment_instruction.pdf",
  },
  {
    name: "third_equipment",
    image: "/images/third_equipment.png",
    certificate: "/files/third_equipment_certificate.pdf",
    instruction: "/files/third_equipment_instruction.pdf",
  },
  {
    name: "fourth_equipment",
    image: "/images/fourth_equipment.png",
    certificate: "/files/fourth_equipment_certificate.pdf",
    instruction: "/files/fourth_equipment_instruction.pdf",
  },
  {
    name: "fifth_equipment",
    image: "/images/fifth_equipment.png",
    certificate: "/files/fifth_equipment_certificate.pdf",
    instruction: "/files/fifth_equipment_instruction.pdf",
  },
  {
    name: "sixth_equipment",
    image: "/images/sixth_equipment.png",
    certificate: "/files/sixth_equipment_certificate.pdf",
    instruction: "/files/sixth_equipment_instruction.pdf",
  },
];

export const ADVANTAGES = [
  {
    title: "Автономная передача данных",
    description: "Работает по GSM, не требует Wi‑Fi или проводов",
    icon: "/icons/first-advantage.svg",
  },
  {
    title: "IP68 – полная защита",
    description: "Не боится погружения в воду, работает в колодцах и на улице",
    icon: "/icons/second-advantage.svg",
  },
  {
    title: "6 лет без замены батареи",
    description: "Энергоэффективный – рассчитан на годы работы",
    icon: "/icons/third-advantage.svg",
  },
  {
    title: "Интеграция в умный дом",
    description: "Совместим с системами Smart City и любым софтом через API",
    icon: "/icons/fourth-advantage.svg",
  },
  {
    title: "Точный учет и контроль",
    description:
      "Двойной механизм (механика+электроника) обеспечивает точность; защита от вмешательства",
    icon: "/icons/fifth-advantage.svg",
  },
  {
    title: "Для дома и для бизнеса",
    description:
      "Подходит для квартир, коттеджей, ЖК, коммерческих и муниципальных объектов",
    icon: "/icons/sixth-advantage.svg",
  },
];
