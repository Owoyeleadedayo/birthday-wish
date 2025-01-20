import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import BB from "../assets/images/balloons.png"
import Cake from "../assets/images/cake.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        pt={"10px"}
        position={"relative"}
        overflow={"hidden"}
        bgColor={"#E1EBEE"}
      >
        <Flex
          direction={"column"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Flex direction="column" alignItems="center">
            <Box width={"100%"} height={"200px"}>
              <Image
                src={BB}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              position="relative"
              direction="column"
              mt={"10px"}
              bgColor={"#E2725B"}
              width={"100%"}
              height={"100px"}
              pb={"20px"}
            >
              <Text
                fontSize="3xl"
                fontWeight={400}
                lineHeight={"30px"}
                textAlign="center"
                fontFamily={"Satisfy"}
                width={"100%"}
              >
                Happy Birthday <br />
                <Text
                  position="absolute"
                  right="0"
                  fontWeight={400}
                  fontSize="3xl"
                  fontFamily={"Satisfy"}
                  width={"100%"}
                  pl={"150px"}
                >
                  Nya
                </Text>
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Box width={"100%"} height={"150px"}>
              <Image
                src={Cake}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box>
          </Flex>
          <Flex
            width={"100%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            pr={"30px"}
            pb={"10px"}
          >
            <Button
              variant={"none"}
              p={0}
              m={0}
              onClick={() => navigate("/wishes")}
              fontFamily={"Cardo"}
              fontWeight={600}
            >
              Click
            </Button>
            <MdKeyboardDoubleArrowRight
              fontSize={"20px"}
              fontFamily={"Cardo"}
              style={{ marginLeft: 0 }}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Banner;
