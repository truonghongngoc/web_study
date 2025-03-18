import { Box,Text,Image } from "@chakra-ui/react";

export const Layout2=()=>{
    return(
<>

          <Box
        
            display={{ xl: "flex", base: "block" }}
            justifyContent={"space-around"}
            paddingTop={{ xl: "20px" }}
            marginTop={""}
          >
            <Box
              marginTop={{ xl: "20px", base: "30px" }}
              justifyItems={{ base: "center" }}
            >
              <Text
                fontWeight={"semibold"}
                color={"#4D4D4D"}
                textStyle={{ xl: "5xl", base: "2xl" }}
              >
                Helping a local
              </Text>
              <Text
                fontWeight={"semibold"}
                color={"#4CAF4F"}
                justifyContent={"center"}
                textStyle={{xl: "5xl", base: "2xl" }}
              >
                business reinvent it self
              </Text>
              <Text
                textAlign={{ base: "center" }}
                color={"#18191F"}
                marginTop={"10px"}
              >
                We reached here with our hard work and dedication
              </Text>
            </Box>

            <Box display={"flex"} justifyContent={{ base: "space-around" }}>
              <Box
                justifyItems={{ base: "center" }}
                padding={{ xl: "30px", base: "10px" }}
              >
                <Box display={"flex"}>
                  <Box>
                    <Image src="src/image/8.png"></Image>
                  </Box>
                  <Box>
                    <Text
                      marginLeft={"10px"}
                      textStyle={"xl"}
                      fontWeight={"semibold"}
                      color={"#4D4D4D"}
                    >
                      2,245,341
                    </Text>

                    <Text color={"#717171"} marginLeft={"10px"}>
                      Member
                    </Text>
                  </Box>
                </Box>

                <Box display={"flex"} marginTop={"30px"}>
                  <Box>
                    <Image src="src/image/10.png"></Image>
                  </Box>
                  <Box>
                    <Text
                      marginLeft={"10px"}
                      textStyle={"xl"}
                      fontWeight={"semibold"}
                      color={"#4D4D4D"}
                    >
                      828,867
                    </Text>
                    <Text marginLeft={"10px"} color={"#717171"}>
                      Event Bookings
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                justifyItems={{ base: "center" }}
                padding={{ xl: "30px", base: "10px" }}
              >
                <Box display={"flex"}>
                  <Box>
                    <Image src="src/image/hand.png"></Image>
                  </Box>
                  <Box>
                    <Text
                      marginLeft={"10px"}
                      textStyle={"xl"}
                      fontWeight={"semibold"}
                      color={"#4D4D4D"}
                    >
                      46,328
                    </Text>

                    <Text color={"#717171"} marginLeft={"10px"}>
                      Clubs
                    </Text>
                  </Box>
                </Box>

                <Box display={"flex"} marginTop={"30px"}>
                  <Box>
                    <Image src="src/image/pay.png"></Image>
                  </Box>
                  <Box>
                    <Text
                      marginLeft={"10px"}
                      textStyle={"xl"}
                      fontWeight={"semibold"}
                      color={"#4D4D4D"}
                    >
                      1,926,436
                    </Text>
                    <Text marginLeft={"10px"} color={"#717171"}>
                      Payments
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
     
</>

    )
}
export default Layout2;