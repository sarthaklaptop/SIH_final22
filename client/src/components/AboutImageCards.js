import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Tilt } from 'react-tilt';
import About1stimg from '../assets/About1stimg.jpg'
import About2stimg from '../assets/About2ndimg.jpg'
import About3stimg from '../assets/About3rdimg.jpg'

import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({ index, title, icon ,desc }) => (
  <Tilt className='xs:w-[250px] w-full '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card flex justify-evenly'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary bg-[#f0f0f0] rounded-[20px] py-5 px-12  min-h-[280px] flex space-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className=' object-contain w-[245px] h-[160px] rounded-xl'
          height={160}

        />

        <h3 className=' text-[20px] font-bold text-center text-black'>
          {title}
        </h3>
        <p className="text-black pt-4">{desc}</p>
      </div>
    </motion.div>
  </Tilt>
);

export default function AboutImageCards() {
  return(
    <>
      <ServiceCard key="" index="" icon={About1stimg} title="" desc="Empower farmers with our app. Capture and upload plant disease photos from your smartphone for expert solutions, revolutionizing agriculture for 
      healthier yields."/>
      <ServiceCard key="" index="" icon={About2stimg} title="" desc="Access expert guidance. Our network of scientists analyzes your photos to provide precise solutions for crop diseases, 
      bridging the gap between farmers and science."/>
      <ServiceCard key="" index="" icon={About3stimg} title="" desc="Achieve healthy crops. Join our community focused on sustainable agriculture. Timely disease identification and expert solutions 
      ensure abundant harvests and a brighter farming future."/>
    </>
  )
}
  