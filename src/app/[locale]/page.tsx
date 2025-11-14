import dynamic from "next/dynamic";
import { Intro } from "@/organisms/modules/intro";

const Equipment = dynamic(() => import("@/organisms/modules/equipment"));
const Advantages = dynamic(() => import("@/organisms/modules/advantages"));

const Home = () => (
  <>
    <Intro />
    <Equipment />
    <Advantages />
  </>
);

export default Home;
