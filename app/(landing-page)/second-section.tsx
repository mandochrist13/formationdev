import Image from 'next/image';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';

const logos = [
  { image: "/logos/css.png" },
  { image: "/logos/figma.png" },
  { image: "/logos/framer.png" },
  { image: "/logos/html.png" },
  { image: "/logos/js.png" },
  { image: "/logos/mysql.png" },
  { image: "/logos/next.png" },
  { image: "/logos/node-js.png" },
  { image: "/logos/react.png" },
  { image: "/logos/tailwind.png" },
  { image: "/logos/ts.png" },
];

const SecondSection = () => {
  return (
    <div className="pt-16 flex justify-center items-center flex-col">
      <div className="text-2xl md:text-4xl md:w-2/4 text-center xl:text-5xl font-medium">
        Répondre aux défis d&apos;un monde en constante évolution.
      </div>
      <div className="py-4 xl:w-2/4 text-center px-8">
      Le développeur est un architecte du numérique qui façonne le monde numérique en maîtrisant un éventail de langages, de frameworks et d&apos;outils pour créer des solutions logicielles innovantes et personnalisées.
      </div>
      {/* <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
        Read customer stories <PiArrowRight className="ml-3 text-sm " />
      </div> */}

      <div className='grid grid-cols-3  xl:grid-cols-4 items-center justify-center  px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto'>
        {logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.image}
              alt="logo"
              width={500}
              height={500}
              className='w-24'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
