import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import BB from "../assets/images/ballons.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        // bgColor={"#E9967A"}
        justifyContent={"center"}
        pt={"20px"}
        position={"relative"}
        overflow={"hidden"}
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
            >
              <Text
                fontSize="3xl"
                fontWeight="bold"
                lineHeight={"30px"}
                textAlign="center"
              >
                Happy Birthday <br />
                <Text
                  position="absolute"
                  right="0"
                  fontWeight="bold"
                  fontSize="3xl"
                >
                  Nya
                </Text>
              </Text>
            </Flex>
          </Flex>
          <Flex
            width={"100%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            pr={"20px"}
          >
            <Button
              variant={"none"}
              p={0}
              m={0}
              onClick={() => navigate("/wishes")}
            >
              Click
            </Button>
            <MdKeyboardDoubleArrowRight
              fontSize={"20px"}
              style={{ marginLeft: 0 }}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Banner;
