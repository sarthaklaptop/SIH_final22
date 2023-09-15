import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ExpertIcon from '../assets/ExpertIcon.png'
import Upload from '../assets/UPLOAD.png'
import { Tilt } from 'react-tilt';
import Review from '../assets/Review.png'

import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({ index, title, icon ,desc }) => (
  <Tilt className='xs:w-[250px] w-full '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card flex justify-evenly mb-10'
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
          className=' object-contain rounded-md'
          height={255}
          width={170}

        />

        <h3 className=' text-[20px] font-bold text-center text-black'>
          {title}
        </h3>
        <p className="text-black">{desc}</p>
      </div>
    </motion.div>
  </Tilt>
);

export default function ImageScroll() {
  return(
    <>
      <ServiceCard key="" index="" icon={Upload} title="Step 1: Capture and Upload" desc="Snap a photo of your crops using your smartphone or camera. Upload the image securely to our platform."/>
      <ServiceCard key="" index="" icon={ExpertIcon} title="Step 2: Connect with Experts" desc="Our network of experienced agricultural experts will analyze your photos and provide personalized recommendations."/>
      <ServiceCard key="" index="" icon={Review} title="Step 3: Receive Expert Reviews" desc="You'll receive expert advice on crop care, disease control, and pest management to ensure your harvest thrives."/>
    </>
  )
}
  