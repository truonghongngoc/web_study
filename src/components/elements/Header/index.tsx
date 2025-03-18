import {
  Box,
  Link,
  Image,
  Drawer,
  Button,
  Portal,
  CloseButton,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        paddingTop={"30px"}
        bg={"#F5F7FA"}
      >
        <Box
          marginTop={{ base: "10px" }}
          marginLeft={{ xl: "105px", base: "30px" }}
        >
          <Image
            width={{ xl: "200px", base: "150px" }}
            src="src/assets/lgo.png"
          ></Image>
        </Box>
        <Box
          display={{ xl: "flex", base: "none" }}
          flexDirection={{ xl: "row", base: "" }}
        >
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Home
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Service
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Feature
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Product
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Testimonial
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            FAQ
          </Link>
        </Box>
        {/* 

        <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button  border={"none"} display={{xl:"none"}}
    flexDirection={"column-reverse"}
        variant="outline" size="sm">
          ...
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
            <Box 

            display={{xl:"none",base:"flex"}}
            flexDirection={{xl:"none",base:"column-reverse"}}
            >
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Home
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Service
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Feature
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Product
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            Testimonial
          </Link>
          <Link color={"#18191F"} marginLeft={"50px"} href="/home">
            FAQ
          </Link>
        </Box>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root> */}

        <Box display={{ base: "flex" }}>
          <Box
            marginRight={{ xl: "20px", base: "10px" }}
            // justifyContent={{ base: "space-betwee" }}
            // marginLeft={{ xl: "180px", base: "120px" }}
          >
            <Link
              maxWidth={{ xl: "80px", base: "30px" }}
              height={{ xl: "40px", base: "30px" }}
              bg={"#F5F7FA"}
              borderRadius={"6px"}
              justifyContent={"center"}
              href="/sign-in"
              color={"#4CAF4F"}
            >
              Login
            </Link>
            <Link
              bg={"#4CAF4F"}
              maxWidth={{ xl: "180px", base: "80px" }}
              padding={"5px"}
              justifyContent={"center"}
              borderRadius={"6px"}
              marginLeft={{ base: "15px" }}
              href="/sign-up"
              color={"white"}
            >
              Sign up
            </Link>
          </Box>
          <Box>
            <Drawer.Root>
              <Drawer.Trigger asChild>
                <Button
                  border={"none"}
                  display={{ xl: "none" }}
                  variant="outline"
                  size="sm"
                >
                  ...
                </Button>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content>
                    <Drawer.Header>
                      <Drawer.Title>Drawer Title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                      <Box
                        display={{ xl: "none", base: "flex" }}
                        flexDirection={{ base: "column" }}
                        // flexDirection={{xl:"none",base:"column-reverse"}}
                      >
                        <Link
                          color={"#18191F"}
                          marginLeft={"50px"}
                          href="/home"
                        >
                          Home
                        </Link>
                        <Link
                          color={"#18191F"}
                          marginLeft={"50px"}
                          href="/home"
                        >
                          Service
                        </Link>
                        <Link
                          color={"#18191F"}
                          marginLeft={"50px"}
                          href="/home"
                        >
                          Feature
                        </Link>
                        <Link
                          color={"#18191F"}
                          marginLeft={"50px"}
                          href="/home"
                        >
                          Product
                        </Link>
                        <Link
                          color={"#18191F"}
                          marginLeft={"50px"}
                          href="/home"
                        >
                          Testimonial
                        </Link>
                        <Link
                          color={"#18191F"}
                          marginLeft={"50px"}
                          href="/home"
                        >
                          FAQ
                        </Link>
                      </Box>
                    </Drawer.Body>
                    <Drawer.Footer>
                      <Button variant="outline">Cancel</Button>
                      <Button>Save</Button>
                    </Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Header;
