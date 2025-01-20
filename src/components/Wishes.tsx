import React, { useState, useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Your list of wishes
const wishes = [
  "1. I love our strong friendship and bond",
  "2. I love that you're genuine and sincere",
  "3. I love your views and standard when it comes to family",
  "4. I love your commitment to transparency and honesty",
  "5. I love that you are unapologetically yourself and not pretentious",
  "6. I love your handsome face",
  "7. I love your ability to connect with people from all works of life",
  "8. I love your passion and connection to nature and your surrounding",
  "9. I love the way you listen and value my opinion and input",
  "10. I love the way you push to communicate effectively and resolve conflict amicably",
  "11. I love your sense of responsibility and accountability",
  "12. I love your sense of humor and your ability to make me laugh",
  "13. I love that you always come through for me babe, you have absolutely no idea how grateful I am",
  "14. Thank you for being my unpaid therapist, you literally hear me out through it all",
  "15. I love how you look out for me, you care and concerns warms my heart",
  "16. Thank you for the push when I'm literally just tired. Your words of encouragement and motivation always does the trick",
];

const Wishes: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % wishes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <VStack
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg="pink.50"
      spacing={6}
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="purple.700"
        textAlign="center"
      >
        On your 42nd birthday, here are the reasons why I love you:
      </Text>

      <Box
        w="350px"
        h="200px"
        p="6px"
        borderRadius="md"
        bg="white"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <AnimatePresence>
          {[index, index + 1].map((currentIndex) => (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                textAlign: "center",
              }}
            >
              <Text fontSize="lg" color="purple.700">
                {wishes[currentIndex % wishes.length]}
              </Text>
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>
    </VStack>
  );
};

export default Wishes;
