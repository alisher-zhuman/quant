import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru", "kg", "en"],
    defaultLocale: "ru",
  },
};

export default nextConfig;
