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
    file: "/pdfs/Программа испытания СВУ.pdf",
  },
  {
    titleKey: "programma_svk",
    pages: 3,
    size: "2,8 МБ",
    file: "/pdfs/Программа испытания СВК.pdf",
  },
  {
    titleKey: "sertifikat_svk15u",
    pages: 2,
    size: "37,5 МБ",
    file: "/pdfs/Сертификат СВК15У.pdf",
  },
  {
    titleKey: "sertifikat_sv15u",
    pages: 2,
    size: "38,1 МБ",
    file: "/pdfs/Сертификат СВ15У.pdf",
  },
  {
    titleKey: "opisanie_svu",
    pages: 3,
    size: "3 МБ",
    file: "/pdfs/Описание типа СВУ.pdf",
  },
];

export const EQUIPMENTS = [
  {
    name: "first_equipment",
    image: "/images/first_equipment.png",
    certificate: "/pdfs/Сертификат СВК15У.pdf",
    instruction: "/pdfs/СВК15У.pdf",
  },
  {
    name: "second_equipment",
    image: "/images/second_equipment.png",
    certificate: "/pdfs/Сертификат СВК15У.pdf",
    instruction: "/pdfs/СВК15У.pdf",
  },
  {
    name: "third_equipment",
    image: "/images/third_equipment.png",
    certificate: "/pdfs/Сертификат СВ15У.pdf",
    instruction: "/pdfs/СВ15У.pdf",
  },
  {
    name: "fourth_equipment",
    image: "/images/fourth_equipment.png",
    certificate: "/pdfs/Сертификат СВ15У.pdf",
    instruction: "/pdfs/СВ15У.pdf",
  },
  {
    name: "fifth_equipment",
    image: "/images/fifth_equipment.png",
    certificate: "/pdfs/Сертификат СВ15У.pdf",
    instruction: "/pdfs/СВ15У.pdf",
  },
  {
    name: "sixth_equipment",
    image: "/images/sixth_equipment.png",
    certificate: "/pdfs/Сертификат СВ15У.pdf",
    instruction: "/pdfs/СВ15У.pdf",
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

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "Измерение",
    description: "Измерение_описание",
    icon: "/icons/how-it-works-1.svg",
  },
  {
    id: 2,
    title: "Сбор и шифрование",
    description: "Сбор_описание",
    icon: "/icons/how-it-works-2.svg",
  },
  {
    id: 3,
    title: "Отправка данных",
    description: "Отправка_описание",
    icon: "/icons/how-it-works-3.svg",
  },
  {
    id: 4,
    title: "Обработка и учет",
    description: "Обработка_описание",
    icon: "/icons/how-it-works-4.svg",
  },
  {
    id: 5,
    title: "Контроль состояния",
    description: "Контроль_описание",
    icon: "/icons/how-it-works-5.svg",
  },
  {
    id: 6,
    title: "Получите консультацию",
    description: "Получите_описание",
    icon: null,
  },
];

export const AREAS = [
  {
    title: "Квартиры и многоквартирные дома",
    description: "Автоматизация снятия показаний и выставления счетов в ЖК",
    icon: "/icons/first-area.svg",
  },
  {
    title: "Частные дома и коттеджи",
    description: "Удобный мониторинг через смартфон для домовладельцев",
    icon: "/icons/second-area.svg",
  },
  {
    title: "Коммерческая недвижимость",
    description: "Удаленный контроль потребления в бизнес-центрах, ТРЦ",
    icon: "/icons/third-area.svg",
  },
  {
    title: "Муниципальные объекты",
    description: "Снижение затрат на персонал и потерь воды",
    icon: "/icons/fourth-area.svg",
  },
  {
    title: "Промышленные предприятия",
    description: "Интеграция в систему учета ресурсов предприятия",
    icon: "/icons/fifth-area.svg",
  },
];

export const TECH_SPECS = [
  {
    badge: "Тип",
    title: "Комбинированный",
    description:
      "Совмещает проверенную механику с современным IoT-модулем (двойной контроль показаний)",
  },
  {
    badge: "Назначение",
    title: "Для холодной и горячей воды",
    description:
      "Подходит для любых систем водоснабжения, от квартир до небольших зданий",
  },
  {
    badge: "Диаметры моделей",
    title: "ДУ 15, 20 мм",
    description:
      "Различные размеры для разных потребностей – от квартирного до промышленного применения",
  },
  {
    badge: "Материал корпуса",
    title: "Латунь/чугун с антикоррозийным покрытием",
    description: "Прочный корпус для долговечности в жестких условиях",
  },
  {
    badge: "Класс точности",
    title: "Соответствует ГОСТ / ISO",
    description:
      "Точность измерения на уровне стандартов, пригоден для расчетов с потребителями",
  },
  {
    badge: "Интерфейсы связи",
    title: "GSM",
    description:
      "Гибкие каналы передачи – основная связь по сотовой сети, возможно локальное считывание через Bluetooth при необходимости",
  },
  {
    badge: "Питание",
    title: "Литиевый аккумулятор",
    description: "Автономная работа до 6 лет без замены батареи",
  },
  {
    badge: "Диапазон температур",
    title: "От нуля до +50 °C",
    description: "Работоспособен при морозе и жаре",
  },
  {
    badge: "Класс защиты",
    title: "IP68",
    description:
      "Полная герметичность – может быть погружен в воду, допускается установка в затапливаемых колодцах",
  },
];

export const WHY_US = [
  {
    title: "Локальный производитель",
    descriptionKey: "why_local",
    icon: "/icons/first-why.svg",
  },
  {
    title: "Современные технологии – ваше конкурентное преимущество",
    descriptionKey: "why_tech",
    icon: "/icons/second-why.svg",
  },
  {
    title: "Надежный партнер для роста",
    descriptionKey: "why_partner",
    icon: "/icons/third-why.svg",
  },
  {
    title: "Экономическая выгода для застройщика",
    descriptionKey: "why_profit",
    icon: "/icons/fourth-why.svg",
  },
  {
    title: "Соответствие нормативам и требованиям",
    descriptionKey: "why_standards",
    icon: "/icons/fifth-why.svg",
  },
];

export const VIDEOS = [
  {
    src: "/videos/first.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/first-video-poster.png",
  },
  {
    src: "/videos/second.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/second-video-poster.png",
  },
  {
    src: "/videos/third.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/third-video-poster.png",
  },
  {
    src: "/videos/fourth.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/fourth-video-poster.png",
  },
  {
    src: "/videos/fifth.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/fifth-video-poster.png",
  },
  {
    src: "/videos/sixth.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/sixth-video-poster.png",
  },
  {
    src: "/videos/seventh.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/seventh-video-poster.png",
  },
  {
    src: "/videos/eighth.mp4",
    text: "Настройка микросхем для работы",
    poster: "/images/eighth-video-poster.png",
  },
];
