import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

const Home = () => {
  redirect(`/${routing.defaultLocale}`);
};

export default Home;
