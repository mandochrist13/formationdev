"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { useState } from "react";
import {
  PiArrowRight,
  PiAtomBold,
  PiBrainDuotone,
  PiExcludeSquareLight,
  PiSparkleLight,

} from "react-icons/pi";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "Designer UI/UX",
    feature: "Now with Q&A",
    description: " Concepteur d'interfaces et de fonctionnalités innovantes.",
    more: (
      <div className="text-purple-600 flex items-center">
        En savoir plus <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/images/ui.jpg",
  },
  {
    icon: (
      <PiAtomBold className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Développeur Front-End",
    description:
      "Sculpter des interfaces intuitives. Avec React et JavaScript, le développeur front-end crée des expériences utilisateur fluides et esthétiques",
    more: (
      <div className="text-red-600 flex items-center">
        En savoir plus <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/images/front.jpg",
  },

  {
    icon: (
      <PiBrainDuotone className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Développeur Back-End",
    description:
      "Maîtriser les coulisses du web. Grâce à Node.js et MongoDB, le développeur back-end construit des architectures robustes.",
    more: (
      <div className="text-blue-600 flex items-center">
        En savoir plus <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/images/back.jpg",
  },
  {
     icon: (
       <PiExcludeSquareLight className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
     ),
     name: "Développeur Full-stack",
     description: "L'orchestre d'applications complètes, créant des expériences numériques fluides et cohérentes.",
     more: (
       <div className="text-yellow-600 flex items-center">
         En savoir plus <PiArrowRight className="ml-1 text-sm" />
       </div>
     ),

     image: "/images/full.jpg",
   },
];

const HeroSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col ">
      <div
        className="
     
          font-medium text-[#083849]
        
          
          md:w-2/3
          xl:w-1/2
          
          
          lg:px-0
          px-8
    

  text-2xl
            xl:text-6xl     
            flex
            justify-center
            xl:font-medium
            xl:pt-14
            text-center 
            pt-6
            "
      >
        Concevoir, coder, déployer. Façonner le numérique.
      </div>

      <p
        className="
           text-base md:text-2xl
            pt-4
            text-center
            md:w-2/3
            mx-auto
            "
      >
        Épanouissez-vous dans le monde du développement web.
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href="/">
          <Button className="py-1 bg-[#175CFF] ">
            <div className="flex items-center justify-center">
              <div className="text-lg">Commencer</div>
              <div>
                <PiArrowRight className="ml-2 " />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="py-10 xl:py-20 items-center justify-center">
        <Image
          src="/images/hero.gif"
          unoptimized
          alt="hero image"
          width={1000}
          height={1000}
          className="flex items-center justify-center mx-auto w-60 xl:w-80"
        />
      </div>
      {isSmallScreen ? (
        <div id="section1" className="px-8">
          <div className="grid grid-cols-2   md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`
              flex 
            p-1
              md:p-8
             
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                    : "md:bg-[#f6f5f4]   rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                } `}
                onClick={() => setActiveTab(tab)}
              >
                <div className="flex flex-col   items-center md:justify-center mx-auto">
                  <div className="flex text-4xl">{tab.icon}</div>
                  <div className="font-medium text-sm  xl:text-lg mt-1">
                    {tab.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Display content based on the active tab */}
          <div className="pt-6 md:py-10   lg:px-16 xl:px-0 md:px-16  w-full ">
            {activeTab && (
              <div className=" flex justify-center items-center flex-col  ">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  unoptimized
                  className="
                w-full
             border
             
             xl:p-40
             rounded-xl
          
             
                "
                />
                <div  className="flex items-center  md:hidden"><h1 className="text center">{activeTab.description}</h1></div>
                
                
              </div>
              
            )}
            
          </div>
        </div>
      ) : (
        <div id="section1" className="lg:flex md:grid md:grid-cols-2  xl:space-x-4 items-center lg:justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`
                xl:flex 
                justify-center 
                space-x-4
                xl:pt-4
                sm:my-10
               
                xl:my-0
                w-60
                h-60
                ${
                  activeTab === tab
                    ? "border rounded-xl pt-2 bg-white "
                    : "shadow-md rounded-xl pt-2  bg-[#f6f5f4] m"
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl text-center font-medium">{tab.name}</div>

                  {/* Render feature tag only for "AI" tab */}
                  {tab.name === "AI" && (
                    <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-2">
                      {tab.feature}
                    </div>
                  )}
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    {/* Only animate the description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.description}
                    </motion.div>
                  </div>

                  {/* Conditional rendering for "Learn more" link */}
                  {activeTab === tab && (
                    <div className="text-sm mt-2">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Display content based on the active tab */}
      <div className="hidden md:flex py-10 px-8 md:px-0    lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className=" md:flex  items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="
                w-full
                
                
                shadow-md
                rounded-xl
                bg-[#f6f5f4]
        "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
