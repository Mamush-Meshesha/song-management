import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Update = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Edit", "Delete", "Favourate", "Edit"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 300); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <motion.div className="w-[200px] flex flex-col gap-5 mr-[20px] mt-[60px] rounded-lg top-0 right-0 p-5 h-auto bg-secondary absolute">
        <AnimatePresence>
          {texts.map((text, index) => (
            <motion.button
                  key={index}
                  whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index <= currentIndex ? 1 : 0, backgroundColor: "green", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent:"center" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Update;
