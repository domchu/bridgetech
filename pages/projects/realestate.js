import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import ProjectHeading from "../../Components/ProjectHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const realestate = () => {
  return (
    <>
      <DefaultSeo
        title="Real Estate | Bridgekode Tech"
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients."
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="Real Estate website"
        projectUrl="/projects/project-home"
      />

      {/* SINGLE PROJECT DETAILS FOR Mobile Development */}
      <SingleProject
        title="Real Estate website"
        content="Website Name: Cribstack

        Purpose: Cribstack is a user-friendly online platform designed to help individuals find and rent houses, apartments, condos, and other residential properties. It aims to simplify the house-hunting process by providing a comprehensive and intuitive interface for property seekers and owners/managers.  TypeScript and React are popular technologies for building modern web applications, including housing rental websites like Cribstack. TypeScript adds static typing to JavaScript, which can help catch type-related errors during development and improve code maintainability. React, on the other hand, is a widely-used JavaScript library for building user interfaces, making it easy to create interactive and dynamic UI components."
        name="Cribstack Leasing"
        date="March. 25, 2022"
        category="Housing & Properties Leasing"
        address="Ikeja, Lagos State, Nigeria"
        summary="The Cribstack project works as an online platform that connects property owners/managers with potential renters. By offering a user-friendly interface, comprehensive property listings, a secure payment system, and helpful features like reviews and ratings, Cribstack aims to streamline the process of finding and renting residential properties, making it a convenient and efficient platform for both property seekers and owners/managers."
        number1="They provide detailed information about each property, including location, type (apartment, house, condo, etc.), price, number of bedrooms/bathrooms, and amenities."
        number2="The property page displays comprehensive information about the selected property, such as its features, location on the map, and images."
        point1="Cribstack offers user account management features, allowing users to edit their preferences, update contact information, and track their communications with property owners/managers."
        point2="The front-end of the Cribstack website is built using React with TypeScript for enhanced type safety and a clean codebase."
        result=" he successful implementation of the Cribstack project can lead to several positive results and benefits for various stakeholders involved. Here are some of the key outcomes:  Cribstack's user-friendly interface and intuitive design contribute to an improved user experience for both property seekers and owners/managers. Users can easily search for properties, view detailed information, and communicate with property owners, making the entire rental process more convenient and efficient, Increased Property Visibility, Trust and Transparency, Secure Rental Transactions, Time and Cost Savings, Legal Compliance, Real Estate Market Insights, Positive Impact on Real Estate Industry"
        benefits="Cribstack offers numerous benefits to its users and the real estate community. Here are some key benefits of using Cribstack:

        1. Comprehensive Property Listings: Cribstack provides a wide range of property listings, giving users access to an extensive selection of rental options. This diverse pool of properties ensures that users can find accommodations that suit their specific needs and preferences.
        
        2. User-Friendly Interface: The platform's intuitive and easy-to-navigate interface enhances the user experience, making it effortless for users to search, explore, and interact with property listings."
        problemsState=" In IT real estate service we cover most of the IT problems
        that your company faces and we try to solve it."
        problemsSummary="Cribstack offers numerous benefits to its users and the real estate community. Here are some key benefits of using Cribstack:"
        solution1=" Cribstack's review and rating system provides users with valuable insights from previous tenants' experiences. This transparency fosters trust and confidence in the rental properties and property owners/managers."
        solution2=" Cribstack offers advanced search filters that allow users to refine their search based on specific criteria, such as location, property type, price range, and amenities. This streamlines the search process, saving users time and effort."
        solution3=" The platform's intuitive and easy-to-navigate interface enhances the user experience, making it effortless for users to search, explore, and interact with property listings."
        image1="/images/cribstack.png"
        image2="/images/nkiru.jpg"
        projectLink="https://www.cribstack.com"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default realestate;
