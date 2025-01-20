import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import Cake from "../assets/images/bdb.jpeg";
import BB from "../assets/images/balloons.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Banner = () => {
  const navigate = useNavigate();

  // Add bubbles dynamically
  useEffect(() => {
    const bubbleContainer = document.getElementById("bubble-container");
    if (!bubbleContainer) return;

    const createBubble = () => {
      const bubble = document.createElement("div");
      const size = Math.random() * 50 + 10; // Random size between 10px and 60px
      const left = Math.random() * 100; // Random horizontal position

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.position = "absolute";
      bubble.style.bottom = "-60px";
      bubble.style.left = `${left}%`;
      bubble.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`; // Random pastel color
      bubble.style.borderRadius = "50%";
      bubble.style.animation = `float ${
        Math.random() * 5 + 5
      }s ease-in infinite`;

      bubbleContainer.appendChild(bubble);

      // Remove the bubble after animation
      bubble.addEventListener("animationend", () => bubble.remove());
    };

    const interval = setInterval(() => createBubble(), 500); // Create a bubble every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        pt="10px"
        position="relative"
        overflow="hidden"
        bgColor="#f9f9f9"
      >
        {/* Bubble container */}
        <Box
          id="bubble-container"
          position="absolute"
          width="100%"
          height="100%"
          top="0"
          left="0"
          zIndex={0}
          overflow="hidden"
        />

        <Flex
          direction="column"
          justifyContent="center"
          width="100%"
          zIndex={1} 

        >
          <Flex direction="column" alignItems="center">
            <Box width="100%" height="200px">
              <Image src={BB} width="100%" height="100%" objectFit="contain" />
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
              mt="10px"
              bgColor="#3f89f4"
              width="100%"
              height="100px"
              pb="20px"
            >
              <Text
                fontSize="3xl"
                fontWeight={400}
                color="#FFFFFF"
                lineHeight="30px"
                textAlign="center"
                fontFamily="Satisfy"
              >
                Happy Birthday <br />
                <Text
                  color="#FFFFFF"
                  fontWeight={400}
                  fontSize="3xl"
                  fontFamily="Satisfy"
                  pl={'120px'}
                >
                  Nya
                </Text>
              </Text>
            </Flex>
          </Flex>
          <Grid templateRows="70% 30%" gap="10px">
            <GridItem >
              <Flex justifyContent="center" alignItems="center">
                <Box width="300px" height="200px">
                  <Image
                    src={Cake}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                width="100%"
                justifyContent="center"
                alignItems="center"
                pr="30px"
                pb="20px"
                pt={'5px'}
                pl={'40px'}
              >
                <Button
                  variant="none"
                  p={0}
                  m={0}
                  onClick={() => navigate("/wishes")}
                  fontFamily="Cardo"
                  fontWeight={600}
                  color="#000"
                >
                  Click
                </Button>
                <MdKeyboardDoubleArrowRight
                  fontSize="20px"
                  fontFamily="Cardo"
                  color="#000"
                  style={{ marginLeft: 0 }}
                />
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>

      {/* CSS for bubble animations */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Banner;
