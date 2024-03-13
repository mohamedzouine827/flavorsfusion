import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SecondHero from "./components/SecondHero";
import Description from "./components/Description";

export default function Home() {
  return (
   <div className="mx-[100px] mt-[54px] h-[300vh]">
      <Navbar />
      <HeroSection />
      <SecondHero />
      <Description />
   </div>
  );
}
