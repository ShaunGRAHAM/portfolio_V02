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
          className="p-2 rounded-xl absolute h-full  w-screen object-cover"
          src={images[imageIndex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{x: {type: 'spring', stiffness: 300, damping: 30},
         opacity: {duration: 0.2}
         }}
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
        />
      </AnimatePresence>
      <div
        className=
          "px-2 sm:px-4
           py-2
           flex flex-row
           w-screen
           absolute
           bottom-11 sm:bottom-3
           justify-between
           bg-white sm:bg-transparent
           z-20
           ">
        <motion.button
            className="">
          <text
            onClick={() => paginate(-1)}
            className=
              "px-2 sm:px-2
               py-1
               rounded-full
               bg-gray-100 hover:bg-black sm:bg-white
               transition ease-in-out delay-150 duration-150
               border-solid
               border-0 sm:border-2
               text-black hover:text-white
               font-light hover:font-medium
               hover:border-white
               text-sans
               text-xs sm:text-sm
               "
               >
            PREV
          </text>
        </motion.button>
        <motion.button
            className="">
           <text
              onClick={() => paginate(+1)}
              className=
                "px-2 sm:px-2
                 py-1
                 rounded-full
                 bg-gray-100 hover:bg-black sm:bg-white
                 transition ease-in-out delay-150 duration-150
                 border-solid
                 border-0 sm:border-2
                 text-black hover:text-white
                 font-light hover:font-medium
                 hover:border-white
                 text-sans
                 text-xs sm:text-sm
                 ">
              NEXT
            </text>
        </motion.button>
      </div>
      </>
    </div>
  )
}
