import Image from "next/image";
import Images from "@/app/assets/soupe.png";
export default function SecondHero() {
  return (
    <div className="flex justify-between">
      <div className="items-center flex ">
        <Image
          src={Images.src}
          alt="hero"
          width={600}
          height={839}
          className=" absolute w-[400px] h-[550px] mt-[-180px] ml-48"
        />
      </div>
      <div className="mr-24 flex flex-col  justify-center items-center mt-12">
        <div className="text-5xl font-normal font-['Italiana'] tracking-wide">
            About
        </div>
        <div className="text-center text-gray-700 text-3xl font-normal font-['Italiana'] tracking-wide mt-12">
            <span>
            Welcome to Flavor Fusion <br /> where culinary creativity takes <br /> center stage! I&apos;m [Your Name], <br/> the proud owner and head chef <br /> behind this gastronomic haven.<br/> With a passion for pushing the <br/>boundaries of flavor and a <br/>commitment to crafting <br/> unforgettable dining experiences, <br />Flavor Fusion is not just a <br />restaurant; it&aspos;s a journey through <br />a world of taste.
            </span>
        </div>
      </div>
    </div>
  );
}
