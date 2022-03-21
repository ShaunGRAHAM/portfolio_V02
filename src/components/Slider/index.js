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

  // console.log({props});
  // console.log({images});
  // console.log({lengthImg});
  // console.log({imageIndex});
  // console.log({page});
  // console.log({direction});

  return (
    <div className="mx-auto relative flex flex-row">
      <>
      <motion.button
          className="previous"
          onClick={() => paginate(-1)}
        ></motion.button>
        <motion.button
          className="next"
          onClick={() => paginate(+1)}
        ></motion.button>

        <AnimatePresence  initial={false} custom={direction}>

        <motion.img
          key={page}
          className="rounded"
          src={images[imageIndex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{x: {type: 'spring', stiffness: 300, damping: 30},
         opacity: {duration: 0.1}
         }}
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
        />
        </AnimatePresence>

      </>

    </div>
  )
}
