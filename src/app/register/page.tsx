"use client";
import Image from "next/image";
import { Input, Selector } from "../components/Input";
import { useState } from "react";
import { Confirmation, Modal } from "../components/modal/index";

const Register = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const categoryData = [
    "Nigeria",
    "Ghana",
    "South Africa",
    "Kenya",
    "Togo",
    "Benin",
  ];
  const groupData = ["0-20", "20-40", "40-80", "80-100"];
  const handleSelect = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <main className="bg-[#140D27] pb-16  xl:h-screen">
        <p className="pt-6 md:hidden text-[#FF26B9] text-[28px] pl-8 font-bold mb-6">
          Register
        </p>
        <section className="max-w-[1200px] mx-auto md:flex">
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative w-[250px] h-[150px] mx-auto md:mx-0 md:hidden">
              <Image
                src="/images/mobile-images/register-3d.png"
                alt="register 3D picx"
                fill
              />
            </div>
            <div className="relative  w-[400px] h-[250px] lg:w-[700px] lg:h-[500px] hidden md:block">
              <Image
                src="/images/desktop-images/register-3d.png"
                alt="register 3D picx"
                fill
              />
            </div>
          </div>
          <div className="md:w-2/3 md:border-2 md:border-white px-6 md:px-4 lg:p-12 lg:pt-4 rounded-xl">
            <div className="text-white text-center my-8 md:text-left">
              <div className="flex items-baseline pl-5 gap-4 mb-3 md:hidden">
                <p className="text-[12px] md:text-left  ">
                  Be part of this movement!
                </p>
                <div className="relative w-[89px] h-[27px]  ">
                  <Image
                    src="/images/mobile-images/movement.png"
                    alt="register 3D picx"
                    fill
                  />
                </div>
              </div>
              <div className="">
                <p className="hidden md:block text-[#FF26B9] text-[32px] font-bold mb-6">
                  Register
                </p>
                <div className="items-baseline gap-4 mb-3  hidden md:flex">
                  <p className="text-[12px] md:text-left">
                    Be part of this movement!
                  </p>
                  <div className="relative w-[89px] h-[27px] ">
                    <Image
                      src="/images/desktop-images/movement.png"
                      alt="register 3D picx"
                      fill
                    />
                  </div>
                </div>
              </div>
              <p className="uppercase text-left pl-6 text-[24px] md:pl-0">
                Create your account
              </p>
            </div>
            <form action="">
              <div className="px-6 md:px-0">
                <div className="md:flex gap-4">
                  <Input
                    type="text"
                    label="Team's Name"
                    className="mt-6 md:w-1/2"
                    classNameTwo="p-4 bg-[#1C142E] pl-2 text-[12px] md:text-[8px] lg:text-[12px]"
                    placeholder="Enter the name of your group"
                  />
                  <Input
                    type="text"
                    label="Phone"
                    className="mt-6 md:w-1/2"
                    classNameTwo="p-4 bg-[#1C142E] pl-2 text-[12px] md:text-[8px] lg:text-[12px]"
                    placeholder="Enter the name of your group"
                  />{" "}
                </div>
                <div className="md:flex gap-6">
                  <Input
                    type="text"
                    label="Email"
                    className="mt-6 md:w-1/2"
                    classNameTwo="p-4 bg-[#1C142E] pl-2 text-[12px] md:text-[8px] lg:text-[12px]"
                    placeholder="Enter the name of your group"
                  />
                  <Input
                    type="text"
                    label="Project Topic"
                    className="mt-6 md:w-1/2"
                    classNameTwo="p-4 bg-[#1C142E] pl-2 text-[12px] md:text-[8px] lg:text-[12px]"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <Selector
                      label="Country of Interest"
                      focusContent=""
                      placeholder="Draft"
                      onSelect={handleSelect}
                      selectOption=""
                      className="mt-4"
                      classNameTwo="bg-[#1C142E] p-3"
                      inputData={categoryData}
                    />
                  </div>
                  <div className="w-1/2">
                    <Selector
                      label="Group Size"
                      focusContent=""
                      placeholder="Draft"
                      onSelect={handleSelect}
                      selectOption=""
                      className="mt-4"
                      classNameTwo="bg-[#1C142E] p-3"
                      inputData={groupData}
                    />
                  </div>
                </div>
              </div>
              <p className="text-[#FF26B9] text-[8px] pl-8 my-4 md:text-left">
                Please review your registration details before submitting
              </p>
              <div className="text-[10px] text-white flex items-center justify-cente gap-2 w-[300px] pl-8 mr-auto md:pl-0 md:w-full md:justify-start">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="cursor-pointer"
                />
                <p className="max-w-[300px] md:max-w-none">
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
              <div className="mt-6 flex justify-center cursor-pointer">
                <div
                  onClick={() => setShowConfirmation(true)}
                  className="text-white bg-[#B038FF] p-4 w-[150px] rounded-md md:w-full text-center cursor-pointer"
                >
                  Submit
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Modal show={showConfirmation} onClose={() => setShowConfirmation(false)}>
        <Confirmation setShowConfirmation={setShowConfirmation} />
      </Modal>
    </>
  );
};
export default Register;
