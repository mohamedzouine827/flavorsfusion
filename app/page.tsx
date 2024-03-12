import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
   <div className="mx-[100px] mt-[54px]">
      <Navbar />
      <HeroSection />
   </div>
  );
}
