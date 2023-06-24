import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import HomePage from "../Components/HomePage/HomePage";
import Testimonial from "../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
// import Slider from "../Components/Slider/Slider";

export default function Home() {
  return (
    <>
      <DefaultSeo
        title="Home Page | Bridgekode Tech"
        description="Bridgekode is a software development service focuses on website design, students/kids coding, customize software, career path in IT, general IT training, turning ideas into creativities & provide digital solutions to businesses across globe."
        keywords="software, website, web design, kids coding, school coding program, general IT training, react, nextjs, typescript, graphics,seo, javascript, html, css, wordpress,sass, bootstrap,tailwind,semantic-ui,chakra-ui,mantie, web development."
        {...SEO}
      />
      <Topnav />
      <Header />
      {/* <Slider /> */}
      <HomePage />
      <Testimonial />
      <Footer />
    </>
  );
}
