import { Box ,Text,Button} from "@chakra-ui/react";

export const Layout6=()=>{
    return(
        <>
           <Box justifyContent={"space-between"} >
            <Box>
                    <Text
                      textAlign={"center"}
                      paddingTop={"20px"}
                      textStyle={{ xl: "4xl", base: "2xl" }}
                      fontWeight={"semibold"}
                    >
                      Pellentesque suscipit <br></br> fringilla libero eu.
                    </Text>
                    </Box>
                    <Box>
                    <Button
                      margin={{ base: "20px" }}
                      bg={"#4CAF4F"}
                      marginTop={"20px"}
                      display={"flex"}
                      justifyItems={"center"}
        
                      // marginLeft={{ xl: "670px", base: "130px" }}
                    >
                      Get a demo
                    </Button>
                    </Box>
                  </Box>
        </>
    )
}
export default Layout6;