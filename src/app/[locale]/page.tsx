import dynamic from "next/dynamic";
import { Intro } from "@/organisms/modules/intro";

const Equipment = dynamic(() => import("@/organisms/modules/equipment"));
const Advantages = dynamic(() => import("@/organisms/modules/advantages"));
const HowItWorks = dynamic(() => import("@/organisms/modules/how-it-works"));
const Consultation = dynamic(() => import("@/organisms/modules/consultation"));

const Home = () => (
  <>
    <Intro />
    <Equipment />
    <Advantages />
    <HowItWorks />
    <Consultation />
  </>
);

export default Home;
