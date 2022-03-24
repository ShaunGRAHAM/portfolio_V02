import React, { useState } from 'react' ;
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

export default function Slider (props) {

  const [[page, direction], setPage] = useState([0, 0]);
  const images = props.path;
  const lengthImg = props.path.length;
  const imageIndex = wrap(0, lengthImg, page);

  const paginate = newDirection => {
      setPage([page + newDirection, newDirection])
  };
  return (
    <div className="mx-auto flex-column rounded ">
      <>
      <AnimatePresence  initial={false} custom={direction}>
        <motion.img
          key={page}
          className="p-2 rounded-xl absolute h-149 w-screen object-cover"
          src={images[imageIndex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{x: {type: 'spring', stiffness: 300, damping: 30},
         opacity: {duration: 0}
         }}
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
        />
      </AnimatePresence>
      <div
        className="absolute bottom-10 sm:bottom-32 w-screen px-2 pb-2 flex flex-row justify-between z-20">
        <motion.button
            className="">
          <text
            onClick={() => paginate(-1)}
            className="rounded-full bg-gray-100 transition ease-in-out duration-300 hover:bg-black hover:text-white hover:font-medium text-sans text-xs font-light text-black py-1 px-2">
            PREV
          </text>
        </motion.button>
        <motion.button
            className="">
         <text
            onClick={() => paginate(+1)}
            className="rounded-full bg-gray-100 transition ease-in-out delay-150 duration-150 hover:bg-black hover:text-white hover:font-medium text-sans text-xs font-light text-black py-1 px-2">
            NEXT
          </text>
        </motion.button>
      </div>
      </>

    </div>
  )
}
