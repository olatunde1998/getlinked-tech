import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "../../../assets/icons";
import { BackIcon } from "../../../assets/icons/BackIcon";
import { Input, TextArea } from "../components/Input";

const Contact = () => {
  return (
    <section className="bg-[#140D27] pb-16 text-white px-6 md:px-8 pt-12 xl:h-screen">
      <div className="md:flex gap-2 lg:gap-8  md:justify-center max-w-[1200px] mx-auto">
        <div className="mb-8 md:hidden">
          <BackIcon width={24} height={24} />
        </div>
        <div className="hidden md:block md:w-1/2 lg:pl-20">
          <div className=" mt-32">
            <h3 className="text-[#D434FE] text-[28px] font-bold">
              Get in touch
            </h3>
            <p className="text-[18px]  mt-4">
              {" "}
              Contact <br />
              Information
            </p>
            <p className="text-[18px]  mt-4">
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
            <p className="text-[18px]  mt-4">Call Us : 07067981819</p>
            <p className="text-[18px]  mt-4">
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
            </p>
            <p className="text-[#D434FE] mt-20">Share on</p>
            <div className="flex items-center gap-4 mt-4">
              <InstagramIcon width={16} height={20} />
              <XIcon width={16} height={20} />
              <FacebookIcon width={16} height={20} />
              <LinkedinIcon width={16} height={20} />
            </div>
          </div>
        </div>
        {/* form side */}
        <div className="md:w-2/3 md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-lg lg:p-6">
          <div className="md:border-2 md:border-gray-200 rounded-lg max-w-[600px] md:p-12 lg:pl-16 md:bg-[#1C142E]">
            <div>
              <h3 className="text-[#D434FE] font-bold text-[20px] max-w-[190px]">
                Questions or need assistance? Let us know about it
              </h3>
              <p className="md:hidden text-[12px] max-w-[200px] my-6">
                Email us below to any question related to our event
              </p>
            </div>
            <div className="max-w-[550px]">
              <form action="">
                <Input
                  type="text"
                  className="mt-6"
                  classNameTwo="p-3 bg-[#1C142E] pl-8"
                  placeholder="Team's Name"
                />
                <Input
                  type="text"
                  className="mt-6"
                  classNameTwo="p-3 bg-[#1C142E] pl-8"
                  placeholder="Topic"
                />
                <Input
                  type="text"
                  className="mt-6"
                  classNameTwo="p-3 bg-[#1C142E] pl-8"
                  placeholder="Mail"
                />
                <TextArea
                  placeholder="Message"
                  rows={4}
                  classNameTwo="p-3 bg-[#1C142E] pl-8"
                />
                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-[#B038FF] p-4 w-1/2 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="md:hidden  text-center mt-12">
                <p className="text-[#D434FE]">Share on</p>
                <div className="flex items-center gap-4 mt-2 w-fit mx-auto">
                  <InstagramIcon width={16} height={20} />
                  <XIcon width={16} height={20} />
                  <FacebookIcon width={16} height={20} />
                  <LinkedinIcon width={16} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
