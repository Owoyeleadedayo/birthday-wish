import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import BBI from "../assets/images/birthdaywallpaper.jpeg";
import Cake from "../assets/images/bdb.jpeg";
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
        bgImage={BBI}
        bgPos={"center"}
        bgSize="contain"
        backgroundBlendMode={"soft-light"}
        bgColor={"rgba(0, 0, 0, 0.2)"}
      >
        <Flex
          direction={"column"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Flex direction="column" alignItems="center">
            {/* <Box width={"100%"} height={"200px"}>
              <Image
                src={BB}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
              />
            </Box> */}
            <Flex
              justifyContent="center"
              alignItems="center"
              position="relative"
              direction="column"
              mt={"10px"}
              bgColor={"#3f89f4"}
              width={"100%"}
              height={"100px"}
              pb={"20px"}
            >
              <Text
                fontSize="3xl"
                fontWeight={400}
                color={"#FFFFFF"}
                lineHeight={"30px"}
                textAlign="center"
                fontFamily={"Satisfy"}
                width={"100%"}
              >
                Happy Birthday <br />
                <Text
                  position="absolute"
                  right="0"
                  color={"#FFFFFF"}
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
          <Grid templateRows="70% 30%)" gap={"1px"}>
            <GridItem>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Box width={"400px"} height={"300px"}>
                  <Image
                    src={Cake}
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                width={"100%"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                pr={"30px"}
                pb={"20px"}
              >
                <Button
                  variant={"none"}
                  p={0}
                  m={0}
                  onClick={() => navigate("/wishes")}
                  fontFamily={"Cardo"}
                  fontWeight={600}
                  color={"#FFF"}
                >
                  Click
                </Button>
                <MdKeyboardDoubleArrowRight
                  fontSize={"20px"}
                  fontFamily={"Cardo"}
                  color={"#FFF"}
                  style={{ marginLeft: 0 }}
                />
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default Banner;
