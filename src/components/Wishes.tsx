import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  "17. I love your zeal to get things done",
  "18. I love your passion for your work and projects",
  "19. I love your your desire to lead a decent life",
  "20. I love all our conversations, from the hard ones, to the easy ones, to the funny ones, to the ones that makes us laugh till we cry",
  "21. Thank you for your creative input every time",
  "22. Thank you for your vibe, your down to earthness, it's been so easy and so much fun with you",
  "23. I love that you answer all my battish questions",
  "24. I love it when you laugh",
  "25. I love your passion and drive to make an impact",
  "26. I love how you love and care for those you love",
  "27. I love how far against all odds you've come, you're truly an inspiration and I'm sooo proud",
  "28. Your dedication to the people you love is inspiring. You're loyal and can be counted on even when people don't match the benevolence you give",
  "29. I love how easy it is for you to forgive and not hold grudge",
  "30. I love how smart and knowledgeable you are. You know so much about everything and I love it when you tell me about things I know little of",
  "31. I love our late night calls and laughter and our inside jokes",
  "32. I love how you acknowledge and appreciate my presence and value in your life",
  "33. I love that you love and accept me for who I am. You create a safe space for me to be open and expressive",
  "34. I love that you bring excitement and joy into my life",
  "35. I love it when you seek my opinion on little things like outfit to wear, pictures to post, what to respond in a specific situation",
  "36. I love all the weird nicknames you give me, I've never said it but I find it adorable",
  "37. I love your silly jokes and pun",
  "38. I love the love notes and letters you write me",
  "39. I love that you're emotionally intelligent and you express your dissatisfaction in a healthy way",
  "40. I love that you respect my opinion even when it differs from your own",
  "41. I love your sweet and charming nature",
  "42. And lastly I love your effort and consistency in staying connected and making our long distance relationship work",
];

const Wishes: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (index >= wishes.length) {
      setShowFinalMessage(true);
      return;
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 2);
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <VStack
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgColor={"#E1EBEE"}
      spacing={6}
    >
      {!showFinalMessage ? (
        <>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="#012169"
            fontFamily={"Satisfy"}
            textAlign="center"
          >
            On your 42nd birthday, here are the 42 reasons why I love you:
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
              {[index, index + 1].map((currentIndex) =>
                currentIndex < wishes.length ? (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Text
                      fontSize="lg"
                      color="#012169"
                      fontFamily={"Cardo"}
                      fontWeight={400}
                    >
                      {wishes[currentIndex]}
                    </Text>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </Box>
        </>
      ) : (
        <Flex
          px={"10px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"30px"}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            fontFamily={"Satisfy"}
            color="#012169"
            textAlign="center"
            mt={6}
          >
            Happy 42nd birthday babe. Even when you're 90, this list will be so
            easy to write, as it was today. I love you.
          </Text>
          <Flex>
            <Button fontFamily={"Cardo"} onClick={() => navigate("/")}>
              Click to go home
            </Button>
          </Flex>
        </Flex>
      )}
    </VStack>
  );
};

export default Wishes;
