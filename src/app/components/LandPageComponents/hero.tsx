"use client";

import Image from "next/image";
import { HeroRingIcon } from "../../../../assets/icons/HeroRingIcon";

export const Hero = () => {
  return (
    <>
      <main className="md:max-w-[1200px] md:mx-auto">
        <div className="md:pr-4 lg:pr-0">
          <p className="text-[18px] text-center  md:text-right lg:text-[24px] font-bold ">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="mx-auto md:hidden">
            <Image
              src="/images/mobile-images/curved-line.png"
              alt="bulb picx"
              width={100}
              height={20}
              className="ml-auto mr-8"
            />
          </div>
          <div className="mx-auto hidden md:block">
            <Image
              src="/images/mobile-images/curved-line.png"
              alt="bulb picx"
              width={200}
              height={20}
              className="ml-auto"
            />
          </div>
        </div>
        <section className="md:flex md:max-w-[1200px] mx-auto  md:mt-8 lg:ml-0 lg:mr-auto">
          <div className="text-center mt-8 md:w-1/2">
            <div className="text-[32px] font-bold md:text-left lg:text-[52px]">
              getlinked Tech <br />
              <p className="flex items-center justify-center md:justify-start">
                Hackathon 1.0
                <HeroRingIcon width={55} height={33} />
              </p>
            </div>
            <p className=" text-[12px] w-[250px] text-center  mx-auto my-4 leading-6 md:text-left md:mx-0">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="text-center bg-[#903AFF] mb-6 p-3 rounded-lg w-[150px] mx-auto md:mx-0">
              Register
            </div>
            {/* time */}
            <div className="md:mx-0 md:text-left">
              <span className="font-bold text-[32px]">00</span>
              <span>H</span> <span className="font-bold text-[32px]">00</span>
              <span>M</span> <span className="font-bold text-[32px]">00</span>
              <span>s</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="relative w-full h-[250px] ml-3 md:hidden">
              <Image
                src="/images/mobile-images/hackaton-guy.png"
                alt="hackaton guy picx"
                fill
              />
            </div>
            <div className="mx-auto hidden md:block">
              <Image
                src="/images/desktop-images/hackathon-guy-desktop.png"
                alt="hackathon guy picx"
                width={690}
                height={665}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
