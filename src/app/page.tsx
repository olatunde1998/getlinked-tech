import { Footer } from "./components/Footer/footer";
import {
  Criteria,
  Hero,
  Introduction,
  NavBar,
  Partners,
  PrivacyPolicy,
  Rewards,
  Rules,
} from "./components/LandPageComponents";
import { Faq } from "./components/LandPageComponents/Faq";

export default function Home() {
  return (
    <div className="bg-[#190E2D] h-screen text-white overflow-x-hidden">
      <nav>
        <NavBar />
        {/* Hero section */}
        <Hero />
        <div className="bg-[#140D27] py-10 border-b-[1.5px] border-gray-200 md:border-none">
          <Introduction />
        </div>
        <div className="bg-[#140D27] py-10 border-b-[1.5px] border-gray-200 md:border-none">
          <Rules />
        </div>
        <div className="bg-[#140D27] py-10 border-b-[1.5px] border-gray-200 md:border-none">
          <Criteria />
        </div>
        <div className="bg-[#140D27] py-10 border-b-[1.5px] border-gray-200 md:border-none">
          <Faq />
        </div>
        <div className="bg-[#140D27] py-10 px-4 border-b-[1.5px] border-gray-200 md:border-none">
          <Rewards />
        </div>
        <div className="bg-[#140D27] py-10 px-4 border-b-[1.5px] border-gray-200 md:border-none">
          <Partners />
        </div>
        <div className="bg-[#140D27] py-10 px-4 border-b-[1.5px] border-gray-200 md:border-none ">
          <PrivacyPolicy />
        </div>
        <div className="bg-[#140D27] py-10 px-4 border-b-[1.5px] border-gray-200 md:border-none">
          <Footer />
        </div>
      </nav>
    </div>
  );
}
