import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import HomePage from "../Components/HomePage/HomePage";
import Testimonial from "../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Slider from "../Components/Slider/Slider";
import Card from "../Components/Slider/Card";
import Image__slider6 from "../public/images/web.jpg";

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
      <Slider>
        <Card
          img={Image__slider6}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          renderButtons={() => (
            <>
              <button>clissdas</button>
              <button>clissdas</button>
            </>
          )}
        />
        <Card
          img={Image__slider6}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          renderButtons={() => (
            <>
              <button>clissdas</button>
              <button>clissdas</button>
            </>
          )}
        />
      </Slider>
      <HomePage />
      <Testimonial />
      <Footer />
    </>
  );
}
