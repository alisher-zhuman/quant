import dynamic from "next/dynamic";
import { Intro } from "@/organisms/modules/intro";

const Equipment = dynamic(() => import("@/organisms/modules/equipment"));

const Home = () => (
  <>
    <Intro />
    <Equipment />
  </>
);

export default Home;
