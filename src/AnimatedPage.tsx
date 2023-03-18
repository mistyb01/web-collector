import React, { ReactNode }  from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode
}
export const AnimatedPage: React.FC<Props> = ({children}) => {

    const animations = {
        initial: {opacity: 0},
        animate: {opacity: 100},
        exit: {opacity: 0},
    }
  return (
    <motion.div 
        variants={animations} 
        initial="initial" 
        animate="animate" 
        exit="exit"
        transition={{duration: 0.33}}>
        {children}
    </motion.div>
  );
}

export default AnimatedPage;
