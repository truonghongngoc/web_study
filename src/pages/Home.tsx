import { Box, Button, Image, Input, Link, Text } from "@chakra-ui/react";
import "../index.css";
export const Home = () => {
  return (
    <Box bg={"#F5F7FA"}>
      <Box display={"space-between"} paddingTop={"30px"} bg={"#F5F7FA"}>
        <Box
          marginTop={{ base: "10px" }}
          marginLeft={{ xl: "105px", base: "30px" }}
        >
          <Image
            width={{ xl: "200px", base: "100px" }}
            src="src/image/lgo.png"
          ></Image>
        </Box>
        <Box display={{ xl: "flex", base: "none" }} marginLeft={"166px"}>
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
        <Box
          justifyContent={{ base: "space-between" }}
          marginLeft={{ xl: "180px", base: "120px" }}
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
      </Box>
      <Box
        marginTop={"auto"}
        marginRight={"auto"}
        justifyContent={"space-around"}
      >
        <Box
          paddingLeft={{ base: "50px" }}
          paddingRight={{ base: "50px" }}
          paddingBottom={{ xl: "40px" }}
          justifyContent={"space-around"}
          display={"flex"}
          marginTop={{ xl: "30px", base: "none" }}
        >
          <Box>
            <Text
              textStyle={{ xl: "6xl", base: "3xl" }}
              fontWeight={"bold"}
              paddingTop={{ xl: "100px", base: "50px" }}
            >
              Lessons and insights{" "}
            </Text>
            <Text
              marginTop={"10px"}
              textStyle={{ xl: "6xl", base: "3xl" }}
              fontWeight={"bold"}
              color={"#4CAF4F"}
            >
              from 8 years
            </Text>
            <Text marginTop={"10px"}>
              Where to grow your business as a photographer: site or social
              media?
            </Text>
            <Button marginBottom={"10px"} marginTop={"20px"} width={"100px"} bg={"#4CAF4F"}>
              Register
            </Button>
          </Box>
          <Box display={{ xl: "flex", base: "none" }}>
            <Image paddingTop={"40px"} src="src/image/Illustration.png"></Image>
          </Box>
        </Box>
        <Box>
          <Box bg={"white"}>
            <Text
              textAlign={"center"}
              textStyle={{ xl: "5xl", base: "2xl" }}
              color={"#4D4D4D"}
              fontWeight={"semibold"}
              paddingTop={"40px"}
            >
              Our Clients
            </Text>

            <Text marginTop={"10px"} textAlign={"center"} color={"#717171"}>
              We have been working with some Fortune 500+ clients
            </Text>
          </Box>
          <Box
            display={"flex"}
            paddingTop={{ xl: "55px", base: "30px" }}
            justifyContent={"space-evenly"}
            bg={"white"}
          >
            <Image src="src/image/1.png"></Image>
            <Image src="src/image/2.png"></Image>
            <Image src="src/image/3.png"></Image>
            <Image src="src/image/4.png"></Image>
            <Image src="src/image/5.png"></Image>
            <Image src="src/image/6.png"></Image>
            <Image src="src/image/7.png"></Image>
          </Box>
        </Box>
        <Box display={{ xl: "block", base: "none" }}>
          <Box
            paddingTop={{ xl: "55px", base: "20px" }}
            textAlign={"center"}
            bg={"white"}
          >
            <Text
              textAlign={"center"}
              textStyle={{ xl: "5xl", base: "2xl" }}
              color={"#4D4D4D"}
              fontWeight={"semibold"}
              paddingTop={{ xl: "55px", base: "20px" }}
            >
              Manage your entire community <br></br>in a single system
            </Text>
            <Text marginTop={"20px"} color={"#717171"}>
              Who is Nextcent suitable for?
            </Text>
          </Box>
          <Box
            display={{ xl: "flex", base: "none" }}
            justifyContent={{ xl: "space-around", base: "space-between" }}
            bg={"white"}
            paddingTop={"16px"}
          >
            <Box
              marginLeft={{ base: "20px" }}
              width={{ xl: "300px" }}
              height={{ base: "200px" }}
            >
              <Box justifyItems={{ xl: "center" }}>
                <Image src="src/image/ii.png"></Image>
              </Box>
              <Box>
                <Text
                  textAlign={{ xl: "center" }}
                  textStyle={{ xl: "4xl", base: "xl" }}
                  color={"#4D4D4D"}
                  fontWeight={"semibold"}
                  paddingTop={"16px"}
                >
                  Membership Organisations
                </Text>
                <Text
                  textAlign={{ xl: "center" }}
                  paddingTop={"16px"}
                  color={"#717171"}
                >
                  Our membership management software provides full automation of
                  membership renewals and payments
                </Text>
              </Box>
            </Box>
            <Box
              marginLeft={{ base: "20px" }}
              width={{ xl: "300px" }}
              height={{ base: "200px" }}
            >
              <Box justifyItems={{ xl: "center" }}>
                <Image src="src/image/home.png"></Image>
              </Box>
              <Text
                textAlign={{ xl: "center" }}
                textStyle={{ xl: "4xl", base: "xl" }}
                color={"#4D4D4D"}
                fontWeight={"semibold"}
                paddingTop={"16px"}
              >
                National Associations
              </Text>
              <Text
                textAlign={{ xl: "center" }}
                paddingTop={"16px"}
                color={"#717171"}
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </Box>
            <Box
              marginLeft={{ base: "20px" }}
              width={{ xl: "300px" }}
              height={{ base: "200px" }}
            >
              <Box justifyItems={{ xl: "center" }}>
                <Image src="src/image/hand.png"></Image>
              </Box>
              <Text
                textAlign={{ xl: "center" }}
                textStyle={{ xl: "4xl", base: "xl" }}
                color={"#4D4D4D"}
                fontWeight={"semibold"}
                paddingTop={"16px"}
              >
                Clubs And
                <br></br>Groups
              </Text>
              <Text
                textAlign={{ xl: "center" }}
                paddingTop={"16px"}
                color={"#717171"}
              >
                Our membership management software provides full automation of
                membership renewals and payments
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            paddingTop={{ xl: "100px", base: "20px" }}
            display={{ xl: "flex", base: "none" }}
            bg={"white"}
            height={"433px"}
          >
            <Box>
              <Image
                // display={{base:"none"}}
                display={{ xl: "flex", base: "none" }}
                marginLeft={"150px"}
                width={"442px"}
                padding={"20px"}
                height={"329px"}
                src="src/image/pp/mobile-login/rafiki.png"
              ></Image>
            </Box>
            <Box
              display={{ xl: "block", base: "none" }}
              width={{ xl: "661px", base: "500px" }}
              height={{ xl: "358px", base: "auto" }}
              marginLeft={"149px"}
              paddingTop={{ xl: "20px" }}
            >
              <Text
                textStyle={{ xl: "4xl", base: "2xl" }}
                fontWeight={"semibold"}
                color={"#4D4D4D"}
              >
                The unseen of spending three <br></br>years at Pixelgrade
              </Text>
              <Text color={"#4D4D4D"} fontSize={"14px"} marginTop={"16px"}>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </Text>
              <Button marginTop={{ xl: "26px", base: "10px" }} bg={"#4CAF4F"}>
                Learn more
              </Button>
            </Box>
          </Box>
          <Box
            display={{ xl: "flex", base: "block" }}
            justifyContent={"space-around"}
            paddingTop={{ xl: "20px" }}
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
                textStyle={{ xl: "5xl", base: "2xl" }}
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

            <Box display={"flex"} justifyContent={{ base: "center" }}>
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
        </Box>

        <Box>
          <Box
            paddingTop={{ xl: "52px", base: "30px" }}
            display={{ xl: "flex", base: "none" }}
            bg={"white"}

            // height={"333px"}
            paddingLeft={"100px"}
          >
            <Box justifyItems={"center"}>
              <Image
                // width={"400px"}
                marginLeft={{ xl: "170px" }}
                height={{ xl: "300px", base: "200px" }}
                src="src/image/lock/mobile-login/pana.png"
              ></Image>
            </Box>
            <Box
              justifyContent={"center"}
              width={"661px"}
              height={"268px"}
              marginLeft={{ xl: "160px", base: "20px" }}
              paddingTop={{ xl: "10px", base: "30px" }}
            >
              <Text
                textAlign={{ base: "center" }}
                textStyle={{ xl: "4xl", base: "xl" }}
                fontWeight={"semibold"}
                color={"#4D4D4D"}
              >
                How to design your site footer like we did
              </Text>
              <Text color={"#4D4D4D"} fontSize={"14px"} marginTop={"26px"}>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </Text>
              <Button marginTop={"26px"} bg={"#4CAF4F"}>
                Learn more
              </Button>
            </Box>
          </Box>
          <Box
            display={{ xl: "flex", base: "none" }}
            justifyContent={"space-around"}
            marginTop={"50px"}
          >
            <Box>
              <Image
                width={"336px"}
                marginLeft={"100px"}
                height={"326px"}
                justifyContent={"src/image/lock/mobile-login/pana.png"}
                src="src/image/image 9.png"
              ></Image>
            </Box>
            <Box width={"700px"} marginLeft={"100px"}>
              <Text color={"#717171"} fontSize={"16px"}>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </Text>
              <Text
                marginTop={"15px"}
                color={"#4CAF4F"}
                fontWeight={"semibold"}
              >
                Tim Smith
              </Text>
              <Text color={"#717171"} marginTop={"10px"}>
                British Dragon Boat Racing Association
              </Text>

              <Box
                display={"flex"}
                marginTop={"15px"}
                justifyContent={"space-between"}
              >
                <Image src="src/image/a1.png"></Image>
                <Image src="src/image/a2.png"></Image>
                <Image src="src/image/a3.png"></Image>
                <Image src="src/image/a4.png"></Image>
                <Image src="src/image/a5.png"></Image>
                <Image src="src/image/a6.png"></Image>
                <Box display={"flex"} justifyContent={"center"}>
                  <Text
                    paddingTop={"10px"}
                    color={"#4CAF4F"}
                    fontWeight={"semibold"}
                  >
                    Meet all customers
                  </Text>
                  <Image
                    marginTop={"20px"}
                    marginLeft={"10px"}
                    width={"14px"}
                    height={"8px"}
                    src="src/image/vector/24/Arrows & Directions/Vector.png"
                  ></Image>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box bg={"white"}>
          <Box textAlign={"center"} justifyContent={"space-between"}>
            <Text
              textStyle={{ xl: "5xl", base: "2xl" }}
              fontWeight={"semibold"}
              paddingTop={{ xl: "40px", base: "20px" }}
            >
              Caring is the new marketing
            </Text>
            <Text
              width={"628px"}
              //  alignItems={"center"}
              marginTop={"20px"}
              marginLeft={"420px"}
              color={"#717171"}
              justifyContent={{ xl: "center", base: "none" }}
            >
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </Text>
          </Box>
          <Box
            display={"flex"}
            padding={{ xl: "40px", base: "10px" }}
            justifyContent={"space-around"}
          >
            <Box
            
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box marginLeft={{xl:"25px",base:""}} zIndex={5} width={{ xl: "400px", base: "250px" }}>
                <Image src="src/image/image 18.png"></Image>
              </Box>
              <Box
          
                zIndex={10}
                boxShadow={"md"}
                marginTop={"-96px"}
                borderRadius={"10px"}
                bg={"#F5F7FA"}
                width={{ xl: "317px", base: "200px" }}
                height={{ xl: "176px", base: "150px" }}
              >
                <Text
                  color={"#717171"}
                  textAlign={"center"}
                  paddingTop={"16px"}
                  fontSize={{ xl: "20px", base: "16px" }}
                  fontWeight={"600"}
                >
                  Creating Streamlined Safeguarding Processes with OneRen
                </Text>
                <Box
                  padding={"15px"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <Text
                    fontSize={{ xl: "20px", base: "16px" }}
                    fontWeight={"600"}
                    color={"#4CAF4F"}
                  >
                    Read more
                  </Text>
                  <Image
                    marginTop={"10px"}
                    marginLeft={"10px"}
                    width={"22px"}
                    height={"15px"}
                    src={"src/image/vector/24/Arrows & Directions/Vector.png"}
                  ></Image>
                </Box>
              </Box>
            </Box>
            <Box
              display={{ xl: "flex", base: "none" }}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box zIndex={5}>
                <Image src="src/image/image 19.png"></Image>
              </Box>
              <Box
                zIndex={10}
                boxShadow={"md"}
                marginTop={"-96px"}
                borderRadius={"10px"}
                bg={"#F5F7FA"}
                width={"317px"}
                height={"176px"}
              >
                <Text
                  color={"#717171"}
                  textAlign={"center"}
                  paddingTop={"16px"}
                  fontSize={"20px"}
                  fontWeight={"600"}
                >
                  Creating Streamlined Safeguarding Processes with OneRen
                </Text>
                <Box
                  padding={"15px"}
                  justifyContent={"center"}
                  display={{ xl: "flex", base: "none" }}
                >
                  <Text fontSize={"20px"} fontWeight={"600"} color={"#4CAF4F"}>
                    Read more
                  </Text>
                  <Image
                    marginTop={"10px"}
                    marginLeft={"10px"}
                    width={"22px"}
                    height={"15px"}
                    src={"src/image/vector/24/Arrows & Directions/Vector.png"}
                  ></Image>
                </Box>
              </Box>
            </Box>
            <Box
              display={{ xl: "flex", base: "none" }}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box         marginLeft={{base:"25px"}} zIndex={5} width={{ xl: "400px", base: "250px" }}>
                <Image src="src/image/image 20.png"></Image>
              </Box>
              <Box
                zIndex={10}
                boxShadow={"md"}
                marginTop={"-96px"}
                borderRadius={"10px"}
                bg={"#F5F7FA"}
                width={"317px"}
                height={"176px"}
        
            
              >
                <Text
                  color={"#717171"}
                  textAlign={"center"}
                  paddingTop={"16px"}
                  fontSize={"20px"}
                  fontWeight={"600"}
                >
                  Creating Streamlined Safeguarding Processes with OneRen
                </Text>
                <Box
                  padding={"15px"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <Text fontSize={"20px"} fontWeight={"600"} color={"#4CAF4F"}>
                    Read more
                  </Text>
                  <Image
                    marginTop={"10px"}
                    marginLeft={"10px"}
                    width={"22px"}
                    height={"15px"}
                    src={"src/image/vector/24/Arrows & Directions/Vector.png"}
                  ></Image>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box justifyContent={"center"}>
          <Text
            textAlign={"center"}
            paddingTop={"20px"}
            textStyle={{ xl: "4xl", base: "2xl" }}
            fontWeight={"semibold"}
          >
            Pellentesque suscipit <br></br> fringilla libero eu.
          </Text>

          <Button
            margin={{ base: "20px" }}
            bg={"#4CAF4F"}
            marginTop={"20px"}
            marginLeft={{ xl: "670px", base: "130px" }}
          >
            Get a demo
          </Button>
        </Box>
        <Box
          justifyContent={"flex-start"}
          display={{ xl: "flex", base: "block" }}
          bg={"#263238"}
          marginTop={{ xl: "20px" }}
        >
          <Box padding={{ xl: "70px", base: "30px" }}>
            <Box color={" white"}>
              <Image
                width={{ xl: "200px", base: "100px" }}
                src="src/image/logo fter/Footer/Big/Logo.png"
              ></Image>
              <Text color={"#F5F7FA"} marginTop={"40px"}>
                Copyright © 2020 Nexcent ltd.
              </Text>
              <Text marginTop={"10px"}>All rights reserved</Text>
            </Box>
            <Box
              marginTop={"30px"}
              justifyContent={"space-between"}
              width={"200px"}
              display={"flex"}
            >
              <Image src="src/image/ins/Footer/Big/Social Icons.png"></Image>
              <Image src="src/image/w/Footer/Big/Social Icons.png"></Image>
              <Image src="src/image/bird/Footer/Big/Social Icons.png"></Image>
              <Image src="src/image/ytb/Social Icons.png"></Image>
            </Box>
          </Box>
          <Box
            marginLeft={{ xl: "200px", base: "10px" }}
            padding={{ xl: "60px", base: "20px" }}
            display={"flex"}
          >
            <Box display={"block"}>
              <Text
                color={"white"}
                fontWeight={"semibold"}
                textStyle={{ xl: "xl", base: "md" }}
              >
                Company
              </Text>
              <Link
                justifyContent={"center"}
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                About us
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Blog
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Contact us
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Pricing
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Testimonials
              </Link>
              <br></br>
            </Box>
            <Box
              color={"white"}
              justifyContent={"center"}
              marginLeft={{ xl: "100px", base: "50px" }}
            >
              <Text
                color={"white"}
                fontWeight={"semibold"}
                width={{ base: "200px" }}
                textStyle={{ xl: "xl", base: "md" }}
              >
                Support
              </Text>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Help center
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Terms of service
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Legal
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Privacy policy
              </Link>
              <br></br>
              <Link
                marginTop={"15px"}
                color={"#F5F7FA"}
                fontSize={"14px"}
                href="#"
              >
                Status
              </Link>
              <br></br>
            </Box>
            <Box marginLeft={"100px"}>
              <Text color={"white"} fontWeight={"semibold"} textStyle={"xl"}>
                Stay up to date
              </Text>
              <Input
                marginTop={"20px"}
                border={"none"}
                bg={"#D9DBE1"}
                color={"white"}
                placeholder="your email dress"
              ></Input>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
