import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import HomePage from "../Components/HomePage/HomePage";
import Testimonial from "../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function Home() {
  return (
    <>
      <DefaultSeo
        title="Home Page | Bridgekode Tech"
        description="Bridgekode is a software development services focuses on website design, students/kids coding, career path in IT, general IT training, turning ideas into creativities & provide digital solutions to businesses."
        content=""
        {...SEO}
      />
      <Topnav />
      <Header />
      <HomePage />
      <Testimonial />
      <Footer />
    </>
  );
}
