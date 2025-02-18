import { PinInput } from "../components/ui/pin-input"
import { Box, Input, Text } from "@chakra-ui/react"


export const CodePage = () => {

    return (
        <div>
            <Box background={"blue"} width={"100wh"} height={"100vh"} display={"flex"}>
                <Box w="50%">
                </Box>    
                <Box w="50%" bg="white">
                    <Box>
                        <Text fontSize={"12px"}>
                            Code validation
                        </Text>
                        <Input></Input>
                        <PinInput/>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}