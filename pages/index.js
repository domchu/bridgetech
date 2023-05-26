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
        title="Home | Bridgekode"
        description="Coding websites for businesses & career path to finacial stability via IT skills."
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
