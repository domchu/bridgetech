import React from "react";
import Link from "next/link";
import Header from "../Components/Header/Header";
import Topnav from "../Components/Topnav/Topnav";
import Footer from "../Components/Footer/Footer";
import HomePage from "../Components/HomePage/HomePage";
import Testimonial from "../Components/Testimonails/Testimonial";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Slider from "../Components/Slider/Slider";
import Card from "../Components/Slider/Card";

export default function Home() {
  return (
    <>
      <DefaultSeo
        title="Home Page | Bridgekode Crafting Websites to Perfection "
        description="BridgeKode is a leading software development company, specializing in crafting innovative websites for businesses worldwide. Our expert team delivers custom software, web development, web applications, students coding program, kids coding, custom website, mobile app, tracking website, ticketing website, business website, portfolio website, landing page, e-commerce website, e-learning app/website, school result portal & database, school website, general IT training, and cutting-edge technology to bridge the gap between ideas and reality. Explore our services and empower your digital journey with BridgeKode.
         frontend, front-end, software, website, react, nextjs, typescript, graphics,seo, javascript, html, css, wordpress, sass, bootstrap,tailwindcss, semantic-ui, chakra-ui, mantie, web development, wordpress, e-commerce website, coding, bridgekode, ICT, coding, blog, bridgekode, ochu, ochu dominic, computer, mathematics, teaching, tutor, training "
        {...SEO}
      />
      <Topnav />
      <Header />
      <Slider style={{ position: "relative" }}>
        <Card
          img="/images/web11.jpg"
          desc="We have all the web tools you need to get ahead of your competition."
          renderButtons={() => (
            <>
              <Link href="/subpage/aboutus" className="slider__btn">
                About Us
              </Link>
              <Link href="/subpage/team" className="slider__btn">
                Team
              </Link>
            </>
          )}
        />

        <Card
          img="/images/pen1.jpg"
          desc="A good programmer looks both ways before crossing a one-way street."
          renderButtons={() => (
            <>
              <Link
                href="https://www.facebook.com/bridgekode"
                target="_blank"
                className="slider__btn"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/bridgekode_tech/"
                target="_blank"
                className="slider__btn"
              >
                Instagram
              </Link>
            </>
          )}
        />
        <Card
          img="/images/coaching.jpg"
          desc="Don’t just have a website, have a better website."
          renderButtons={() => (
            <>
              <Link href="/contactus" className="slider__btn">
                Contact
              </Link>
              <Link
                href="https://www.blog.bridgekode.com"
                target="_blank"
                className="slider__btn"
              >
                Blog
              </Link>
            </>
          )}
        />
        <Card
          img="/images/graphic.jpg"
          desc="For every complex problem, we give you a simple solution."
          renderButtons={() => (
            <>
              <Link href="Tel:+234 07034278995" className="slider__btn">
                Make Call
              </Link>
              <Link
                href="https://wa.me/2347034278995"
                target="_blank"
                className="slider__btn"
              >
                WhatsApp
              </Link>
            </>
          )}
        />
        <Card
          img="/images/writer3.jpg"
          desc="Techs for the people to the people. Your IT career path start here & Now."
          renderButtons={() => (
            <>
              <Link href="/courses/course" className="slider__btn">
                Courses
              </Link>
              <Link href="/subpage/faq" className="slider__btn">
                FAQ
              </Link>
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
