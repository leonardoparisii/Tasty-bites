import React from "react";
import {motion, AnimatePresence} from 'framer-motion'

const FullScreenSideBar = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div className="sm:hidden flex flex-col items-center h-fit w-full z-40 relative"  initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FullScreenSideBar;