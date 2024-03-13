import Image from "next/image";
import Images from "@/app/assets/unsplash_JE3Y9a2zgOI.png";

export default function Description() {
  return (
    <div className="mt-2 justify-between flex">
      <div className="mr-20 flex flex-col   mt-12">
        <div className="text-center text-gray-700 text-3xl font-normal font-['Italiana'] tracking-wide mt-12">
          <span>
            Welcome to Flavor Fusion <br /> where culinary creativity takes{" "}
            <br /> center stage! I&apos;m [Your Name], <br /> the proud owner
            and head chef <br /> behind this gastronomic haven.
            <br /> With a passion for pushing the <br />
            boundaries of flavor and a <br />
            commitment to crafting <br /> unforgettable dining experiences,{" "}
            <br />
            Flavor Fusion is not just a <br />
            restaurant; it&aspos;s a journey through <br />a world of taste.
          </span>
        </div>
      </div>
      <div>
      <div className="items-end justify-end mt-12 flex mr-44 ">
        <Image
          src={Images.src}
          alt="hero"
          width={600}
          height={839}
          className=" absolute w-[400px] h-[550px] mt-[10px] ml-48"
        />
        
        <div className="border w-[340px] h-[500px] flex justify-end items-end bg-black mt-[24px] mr-[-14px] border-black"></div>
      </div>
      </div>
      
    </div>
  );
}
