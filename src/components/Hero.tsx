import Image from "next/image";
import {outfit, museo} from "@/app/font";
import {Spotlight} from "@/components/ui/spotlight-new";

const Companies = [
  {
    name: "The Washington Post",
    image: "/images/wash.png",
  },
  {
    name: "TechCrunch",
    image: "/images/tc.png",
  },
  {
    name: "BloomBerg",
    image: "/images/bb.png",
  },
  {
    name: "Gizmodo",
    image: "/images/gm.png",
  },
];

const Hero = () => {
  return (
    <div className="bg-radial from-[#10104C] to-black">
      <Spotlight/>
      <section className={`min-h-dvh w-full flex items-center justify-center flex-col gap-10 ${outfit.className}`}>
        <h1 className="flex flex-col items-center justify-center font-semibold text-white py-1 px-10 border-1 border-white/20 rounded-full backdrop-blur-md bg-white/10">
          You Build. We Back You.
        </h1>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-violet-100 font-bold text-center text-8xl">
              Hiring is{" "}
              <span className={`bg-blue-700 px-4 rounded-full ${museo.className}`}>bROkEn</span> <br />
            </h1>
            <h1 className="text-violet-100 font-bold text-justify text-8xl word-spacing">
              We are to fix it
            </h1>
          </div>
          <p className="text-violet-200/60 text-center text-xl font-semibold">
            Get hired fast through Proof of Work and Community. <br />
            No more resumes lost in the void. Let your skills speak louder than
            your degree.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <button className="bg-blue-700 px-10 py-4 rounded-full text-white font-semibold cursor-pointer hover:bg-blue-800 transition-all duration-200 text-xl">
            Get Started
          </button>
          <button className="backdrop-blur-md bg-white/10 px-10 py-4 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-200 cursor-pointer text-xl">
            Explore Proof of Work Projects
          </button>
        </div>
      </section>
      <section className="-mt-60 flex flex-col items-center justify-center gap-10 pb-10">
        <h1 className={`text-violet-200/50 text-center text-4xl font-semibold mt-25 ${outfit.className}`}>
          Companies that hired from us
        </h1>
        <div className="flex items-center justify-evenly gap-20">
          {Companies.map((company, index) => (
            <Image
              key={index}
              src={company.image}
              alt="company"
              width={index === 1 ? 80 : 250}
              height={100}
              className="aspect-auto invert opacity-40"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Hero