"use client";
import Image from "next/image";

export const Partners = () => {
  return (
    <>
      <section className="text-center">
        <div>
          <p className="text-[20px] font-bold  mx-auto my-4 md:text-[32px]">
            Partners and Sponsors
          </p>
          <p className="text-[12px] w-[240px] leading-6 mx-auto mb-4 md:w-[400px] md:text-[14px] lg:mb-20">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="border-2 border-[#D434FE] rounded-lg max-w-[1200px] p-20 mx-auto ">
          <div className="p-6 grid grid-cols-3 max-w-[500px] mx-auto">
            <div className="flex items-center mx-auto border-b-2 border-[#D434FE] p-4">
              <Image
                src="/images/logos/liberty-assured.png"
                alt="liberty assured brand logo"
                width={60}
                height={20}
                className="lg:w-[80px] lg:h-[60px]"
              />
            </div>
            <div className="flex items-center mx-auto border-x-2 border-b-2 border-[#D434FE] p-4">
              <Image
                src="/images/logos/liberty-pay.png"
                alt="liberty pay brand logo"
                width={60}
                height={20}
                className="lg:w-[250px] lg:h-[20px]"
              />
            </div>
            <div className="flex items-center mx-auto border-b-2 border-[#D434FE] p-4">
              <Image
                src="/images/logos/winwise.png"
                alt="winwise brand logo"
                width={30}
                height={20}
                className="lg:w-[80px] lg:h-[60px]"
              />
            </div>
            <div className="flex items-center mx-auto p-4">
              <Image
                src="/images/logos/wispersms.png"
                alt="wispersms brand logo"
                width={30}
                height={20}
                className="lg:w-[80px] lg:h-[60px]"
              />
            </div>
            <div className="flex items-center mx-auto border-x-2 border-[#D434FE] p-4">
              <Image
                src="/images/logos/paybox.png"
                alt="liberty assured brand logo"
                width={60}
                height={20}
                className="lg:w-[250px] lg:h-[20px]"
              />
            </div>
            <div className="flex items-center mx-auto p-4">
              <Image
                src="/images/logos/vizual-plus.png"
                alt="liberty assured brand logo"
                width={30}
                height={20}
                className="lg:w-[250px] lg:h-[20px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
