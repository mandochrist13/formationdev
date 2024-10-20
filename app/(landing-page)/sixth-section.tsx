"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight, PiArrowRight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    text: "1000+",
    subtext: "Developpeur web au Gabon",
  },
  {
    text: "150+",
    subtext: "Offre d'emploi dans le secteur",
  },
  {
    text: "40M+",
    subtext: "Demande de développeur en Afrique",
  },

  {
    header: "Devenez l'architecte du numérique de demain !",
    subheading:
      "Les développeurs sont parmi les professionnels les mieux payés et les plus recherchés sur le marché du travail.",

    image: "/assets/argent.gif",
  },

  {
    header: "Créateur de solutions numériques",
    subheading:
      "le développeur utilise son expertise en programmation pour concevoir, développer et maintenir des logiciels qui améliorent notre quotidien.",
    image: "/assets/crea.gif",
  },

  // {
  //   icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
  //   title: "Visualize, filter & sort any way you want",
  //   description:
  //     "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.",
  //   images: [
  //     { title: "Event in New York", picture: "/assets/ZombieingDoodle.svg" },
  //     {
  //       title: "Community meet up in London",
  //       picture: "/assets/SprintingDoodle.svg",
  //     },
  //     { title: "Conference in Brazil", picture: "/assets/UnboxingDoodle.svg" },
  //     { title: "Milan Tech Week", picture: "/assets/RollingDoodle.svg" },
  //     { title: "Madrid tech festival", picture: "/assets/DogJumpDoodle.svg" },
  //   ],
  // },
  // {
  //   profile: "/assets/DoogieDoodle.svg",
  //   userName: "Carlos Hernandez",
  //   userHandle : "@carlos",
  //   userText: (
  //     <div className="md:mt-6">
  //       <span className="text-sky-500">@birdsoftware </span>
  //     it is definitely the best tool I have ever used.
  //     </div>
  //   ),
  // },
  // {
  //   profile: "/assets/DoogieDoodle.svg",
  //   userName: "John Wright",
  //   userHandle : "@johnwrigh31t",
  //   userText: (
  //     <div className="md:mt-6">
  //     <span className="text-sky-500">@birdsoftware </span>
  //   it is definitely the best tool I have ever used.
  //   </div>
  //   ),
  // },
  // {
  //   profile: "/assets/DoogieDoodle.svg",
  //   userName: "Jessica Smith",
  //   userHandle : "@JessicaS1",
  //   userText: (
  //     <div className="md:mt-6">
  //     <span className="text-sky-500">@birdsoftware </span>
  //   it is definitely the best tool I have ever used.
  //   </div>
  //   ),
  // }
];


const SixthSection = () => {
  const ref = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      <div className="pt-20  xl:pt-24 flex justify-center items-center flex-col ">
        <div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/2 text-center">
        Apprendre sans limites.
        </div>
        <div className="py-4 px-10  xl:w-1/2 2xl:w-1/3 md:w-2/3 text-center">
        Rejoignez notre communauté et accédez à une multitude de formations, de tutoriels et d&apos;ateliers pour booster votre carrière.
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
          En savoir plus <PiArrowRight className="ml-3 text-sm " />
        </div>
        <div className="grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8  md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
              col-span-12
              ${
                index <= 2
                  ? "md:col-span-6 lg:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : index <= 4
                  ? "md:col-span-6 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : index === 5
                  ? " md:col-span-6  lg:col-span-8  lg:row-span-3    bg-[#f6f5f4] p-6 rounded-xl "
                  : index > 5
                  ? "col-span-12 lg:col-span-4  md:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex-col "
                  : "l"
              }
            `}
            >
              {index <= 2 ? (
                <div className="flex flex-col">
                  <div className=" text-5xl font-medium text-sky-600">
                    {tab.text}
                  </div>
                  <div className="text-sm">{tab.subtext}</div>
                </div>
              ) : index <= 4 ? (
                <div>
                  <div className="text-2xl font-medium">{tab.header}</div>
                  <div className="text-sm mt-2">{tab.subheading}</div>
                  <div className="flex justify-center items-center flex-col">
                    <Image
                      src={tab.image || ""}
                      width={1025}
                      height={500}
                      alt="logo"
                      className="w-full  rounded-xl p-10 xl:p-20"
                    />
                  </div>
                </div>
              ) : index === 5 ? (
                <>
                
                    {/* {tab.images && (
                      <div className="flex justify-center items-center flex-col ">
                        <Image
                          src={tab.images[activeImageIndex].picture}
                          alt={`${tab.images[activeImageIndex].title} Image`}
                          width={1025}
                          height={500}
                          className="w-full rounded-xl "
                        />

                        <div>
                          <div className="text-xl font-medium mt-10 md:mt-0  pb-4">
                            {tab.images[activeImageIndex].title}
                          </div>
                        </div>

                        <div className="flex space-x-2 xl:space-x-6 xl:mt-10">
                          {tab.images.map((image, index) => (
                            <div
                              key={index}
                              onClick={() => handleDotClick(index)}
                              className={`${
                                index === activeImageIndex
                                  ? "p-2 rounded-full bg-green-400 "
                                  : "  p-2 rounded-full bg-blue-400"
                              }  `}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )} */}
              
                </> 
              ) 
              : index > 5 && (
                <>
                  <div className="flex  flex-col">
                    <Image
                      src={""}
                      width={500}
                      height={500}
                      alt="logo"
                      className="w-10 h-10 rounded-full border p-1"
                    />
                  </div>
                  <div className="text-xl font-normal ">
                    {""}
                  </div>
                  <div className="text-sm font-normal ">
                    {""}
                  </div>
                  <div className="text-sm font-normal mt-10 md:mt-0  pb-4">
                    {""}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}





export default SixthSection;

