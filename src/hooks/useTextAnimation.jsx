import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

 export const useTextAnimation = (textArray) => {
  const spanRefs = useRef([]);

  useEffect(() => {
    spanRefs.current.forEach((span, index) => {
      span.style.opacity = 1;
      span.style.transform = 'translateY(0)';
      span.style.transitionDelay = `${index * 0.1}s`;
    });
  }, [textArray]);

  return (
    <>
      {textArray&& textArray.map((item, index) => (
        <motion.span
          key={index}
          ref={(element) => (spanRefs.current[index] = element)}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0', opacity: 1 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.1,
          }}
          className="inline-block"
        >
          {item}
        </motion.span>
      ))}
    </>
  );
};





