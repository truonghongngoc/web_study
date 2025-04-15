import { Box } from "@chakra-ui/react";
import "../index.css";
import Header from "../components/elements/Header";
import { Banner } from "../components/elements/Banner";
import Layout1 from "../components/elements/Layout1";
import Layout2 from "../components/elements/Layout2";
import Layout3 from "../components/elements/Layout3";
import Layout4 from "../components/elements/Layout4";
import Layout5 from "../components/elements/Layout5";
import Footer from "../components/elements/Footer";
import Layout6 from "../components/elements/Layout6";

export const Home = () => {
  return (
    <Box bg={"#F5F7FA"}>
      <Header></Header>

      <Banner></Banner>

      <Layout1></Layout1>

      <Layout2></Layout2>

      <Layout3></Layout3>

      <Layout4></Layout4>

      <Layout5></Layout5>
      <Layout6></Layout6>

      <Footer></Footer>
    </Box>
  );
};
export default Home;
