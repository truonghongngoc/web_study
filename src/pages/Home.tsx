import { Box} from "@chakra-ui/react";
import "../index.css";
import Header from "../component/Header";
import { Banner } from "../component/Banner";
import Layout1 from "../component/Layout1";
import Layout2 from "../component/Layout2";
import Layout3 from "../component/Layout3";
import Layout4 from "../component/Layout4";
import Layout5 from "../component/Layout5";
import Footer from "../component/Footer";
import Layout6 from "../component/Layout6";

export const Home = () => {
  return (
    <Box 
    bg={"#F5F7FA"}
    >
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
