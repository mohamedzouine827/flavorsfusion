
import Image from "next/image";

import Images from "@/app/assets/unsplash_ZW9CSUdANqw.png";

export default function HeroSection() {

  return (
    <div>
      <div className="mt-32 overflow-hidden items-center justify-center">
        <p className=" relative text-gray-500 text-6xl xl:text-8xl text-opacity-80">
          FLAVOURS FUSION
        </p>
        <p className="relative text-gray-400 text-6xl xl:text-8xl mt-12 mx-24">FLAVOURS FUSION</p>

        <p className="relative text-gray-300 text-6xl xl:text-8xl mt-12 mx-32 xl:mx-48 text-opacity-80">
          FLAVOURS FUSION
        </p>
      </div>
      <div className="flex flex-col justify-end items-end  mr-20">
      <div className="relative justify-end items-end flex mr-24  mt-[-300px] lg:mt-[-460px]">
      <Image
          src={Images.src}
          alt="Hero Image"
          width={500}
          height={739}
          className="w-[350px] h-[500px]"
        />
        
      </div>
      <div className="border w-[340px] h-[500px] bg-black mt-[-480px] mr-20 border-black"></div>
      </div>
    </div>
  );
}
