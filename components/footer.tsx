import Image from "next/image";
import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className=" flex items-center justify-center pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto">
      <div className="flex items-center justify-center lg:space-x-32 md:px-0 ">
        <div className="items-center justify-between gap-5 flex  pt-4">
          <Image
            src="/logos/bird-logo.png"
            width={1025}
            height={500}
            alt="logo"
            className=" w-28 "
          />
          <div className="flex items-center justify-between flex-col md:flex-row space-x-2 md:space-x-5">
            <div className="flex"><PiInstagramLogoFill className="text-2xl text-[#083849]  hover:text-[#175CFF] " />
            <PiTwitterLogoFill className="text-2xl text-[#083849]  hover:text-[#175CFF] " />
            <PiFacebookLogoFill className="text-2xl text-[#083849]  hover:text-[#175CFF] " />
            <PiYoutubeLogoFill className="text-2xl text-[#083849]  hover:text-[#175CFF] " />
            <PiLinkedinLogoFill className="text-2xl text-[#083849]  hover:text-[#175CFF] " /></div>
            
            <div>Tous Droits Reservés.</div>
          </div>
        </div>

        {/* <div className="flex-col space-y-6 ">
          <div className="pt-10 font-medium">PRODUCT</div>
          <div className="font-light space-y-4 text-sm">
            <div>Home</div>
            <div>Product</div>
            <div>What&apos;s New</div>
            <div>Pricing</div>
            <div>Premium</div>
          </div>
        </div>

        <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">USE CASES</div>
          <div className="font-light space-y-4 text-sm">
            <div>Company</div>
            <div>Leadership</div>

            <div>Customers</div>
            <div>Diversity</div>
          </div>
        </div> */}

        {/* <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">FOR BUSINESS</div>
          <div className="font-light space-y-4 text-sm">
            <div>Project Management</div>
            <div>Goal Management</div>

            <div>Increase Productivity</div>
            <div>Work Management</div>
            <div>Project Planning</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
