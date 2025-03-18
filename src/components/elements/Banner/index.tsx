import { Box, Button, Text, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Banner = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
      <Box
        px={{ base: "50px" }}
        pb={{ xl: "40px" }}
        display="flex"
        justifyContent={{ xl: "space-between", base: "flex-end" }}
        flexDirection={{ xl: "row", base: "column-reverse" }}
        alignItems="center"
        mt={{ xl: "30px", base: "20px" }}
        overflow="hidden"
      >
        <Box>
          <Text
            fontSize={{ xl: "6xl", base: "3xl" }}
            fontWeight="bold"
            pt={{ xl: "100px", base: "50px" }}
          >
            Lessons and insights
          </Text>
          <Text
            fontSize={{ xl: "6xl", base: "3xl" }}
            fontWeight="bold"
            color="#4CAF4F"
            mt="10px"
          >
            from 8 years
          </Text>
          <Text mt="10px">
            Where to grow your business as a photographer: site or social media?
          </Text>
          <Button
            mt="20px"
            width="120px"
            bg="#4CAF4F"
            mb="10px"
            color="white"
            _hover={{ bg: "#388E3C" }}
          >
            Register
          </Button>
        </Box>

        {/* Image Section */}
        <Box
          justifyContent={"flex-end"}
          flexDirection={"column"}
          display={"flex"}
        >
          <Image
            height={{ xl: "350px", base: "250px" }}
            pt="40px"
            src="src/assets/banner.png"
            alt="Illustration"
          />
        </Box>
      </Box>
      <Box
        px={{ base: "50px" }}
        pb={{ xl: "40px" }}
        display="flex"
        justifyContent={{ xl: "space-between", base: "flex-end" }}
        flexDirection={{ xl: "row", base: "column-reverse" }}
        alignItems="center"
        mt={{ xl: "30px", base: "20px" }}
        overflow="hidden"
      >
        <Box>
          <Text
            fontSize={{ xl: "6xl", base: "3xl" }}
            fontWeight="bold"
            pt={{ xl: "100px", base: "50px" }}
          >
            Lessons and insights
          </Text>
          <Text
            fontSize={{ xl: "6xl", base: "3xl" }}
            fontWeight="bold"
            color="#4CAF4F"
            mt="10px"
          >
            from 8 years
          </Text>
          <Text mt="10px">
            Where to grow your business as a photographer: site or social media?
          </Text>
          <Button
            mt="20px"
            width="120px"
            bg="#4CAF4F"
            mb="10px"
            color="white"
            _hover={{ bg: "#388E3C" }}
          >
            Register
          </Button>
        </Box>

        {/* Image Section */}
        <Box
          justifyContent={"flex-end"}
          flexDirection={"column"}
          display={"flex"}
        >
          <Image
            height={{ xl: "350px", base: "250px" }}
            pt="40px"
            src="src/assets/banner.png"
            alt="Illustration"
          />
        </Box>
      </Box>
    </Carousel>
  );
};
