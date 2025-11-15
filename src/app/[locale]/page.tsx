"use client";
import dynamic from "next/dynamic";
import { Intro } from "@/organisms/modules/intro";
import { useScrollRestorer } from "@/hooks/useScrollRestorer";

const Equipment = dynamic(() => import("@/organisms/modules/equipment"));
const Advantages = dynamic(() => import("@/organisms/modules/advantages"));
const HowItWorks = dynamic(() => import("@/organisms/modules/how-it-works"));
const Consultation = dynamic(() => import("@/organisms/modules/consultation"));
const Areas = dynamic(() => import("@/organisms/modules/areas"));
const TechSpecs = dynamic(() => import("@/organisms/modules/tech-specs"));

const Home = () => {
  useScrollRestorer();

  return (
    <>
      <Intro />
      <Equipment />
      <Advantages />
      <HowItWorks />
      <Consultation />
      <Areas />
      <TechSpecs />
    </>
  );
};

export default Home;
