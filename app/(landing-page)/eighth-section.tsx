
import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const GetStartedFree = () => {
    return ( 
    <>
        <div id="section2" className="py-20 xl:py-24 flex justify-center items-center flex-col border-b">
        <div className="text-4xl xl:text-5xl font-medium  text-center">
          Contatez nous dès maintenant!
        </div>
        <div className="py-4 xl:w-1/3  text-center px-10">
        Nos ateliers et hackathons sont l&apos;occasion de mettre en pratique vos compétences et de rencontrer d&apos;autres passionnés.
        </div>
        <Button className="py-1 bg-[#175CFF] ">
            <div className="flex items-center justify-center">
              <div className="text-lg">Nous contacter</div>
              <div>
                <PiArrowRight className="ml-2 " />
              </div>
            </div>
          </Button>

        <Image
            src="/assets/sms.gif"
            alt="hero image"
            width={1000}
            height={1000}
            className="w-80 pt-10"
            />

      </div>
    </>
    
    );
}
 
export default GetStartedFree;