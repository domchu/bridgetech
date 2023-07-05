import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "./../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import ProjectHeading from "../../Components/ProjectHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const website = () => {
  return (
    <>
      <DefaultSeo
        title="Website Design | Bridgekode Tech"
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients."
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="Web Development"
        projectUrl="/projects/project-home"
      />

      {/* SINGLE PROJECT DETAILS AND ITEMS AS PROPS*/}
      <SingleProject
        title="Web Development"
        content="An overview of the web development technologies used in designing these keyonaville school are JavaScript, Next.js, React, HTML, CSS, Chakra UI, and other React libraries.In web development, these technologies work together to create dynamic and interactive websites. JavaScript powers the behavior and interactivity, React provides a structured approach to building UI components, Next.js enables server-side rendering and routing, HTML defines the website's structure, CSS handles its visual styling, and Chakra UI (along with other React libraries) enhances the development process by providing pre-built and customizable UI components. By leveraging these technologies, you can create a robust, responsive, and visually appealing website like the Keyonaville School website  developed by Bridgekode Software Development Service."
        name="Keyonaville Schools"
        date="March 25, 2023"
        category="Education"
        address="N0.8-10 Odinaka Str, Afromedia-Ojo, Lagos State"
        summary="The functioning of the Keyonaville School website focus on some features. However, These are the general overview of how keyonaville school website works. Here are some common features and functionalities you might find:"
        number1="Homepage: The homepage serves as the main entry point to the website and provides an overview of the school. It often includes a welcome message, why keyonaville, core values and links to important sections."
        number2="About Us: This section provides detailed information about Keyonaville School, such as its history, mission, vision, and core values. It may also highlight the school's achievements, facilities, and faculty."
        point1="Contact Information: Visitors can find contact details for the school, including the address, phone number, email address, and possibly a contact form for inquiries or feedback."
        point2="FAQ Page: The FAQ (Frequently Asked Questions) page is designed to provide answers to common queries that visitors may have. It serves as a resource to address various topics and can include information related to admissions, academics, extracurricular activities, policies, transportation, or any other relevant areas. "
        result=" Overall, the Keyonaville School website project has successfully achieved its objectives, well-designed and functional website that effectively serves the school and its stakeholders, resulting in an informative, visually appealing, and user-friendly website. It effectively serves as a platform for communication, information dissemination, and community engagement, enhancing the school's reputation and supporting its mission to provide quality education to its students. "
        benefits="Keyonaville school serves as an essential tool for communication, information dissemination, and community engagement, benefiting the school and its stakeholders in numerous ways.The Keyonaville School website  brings numerous benefits to the school, its students, parents, and the community. Here are some advantages of having a school website:"
        problemsState=" In Bridgekode Software Development Service we cover most of the IT problems
        that your company faces and we try to solve it."
        problemsSummary="It allows easy access to important details such as school policies, academic programs, extracurricular activities, contact information, and upcoming events. Students, parents, and the community can readily find the information they need, enhancing communication and engagement."
        solution1=" The website  serve as a valuable resource for parents, offering access to important resources such as school calendars, parent portals, grade updates, and communication channels."
        solution2=" It can also serve as a platform to showcase collaborations with local organizations or community outreach programs, strengthening ties between the school and the broader community."
        solution3=" 24/7 Availability: Unlike traditional communication methods, a school website is accessible 24/7. Visitors can access information at their convenience, regardless of time zones or scheduling conflicts."
        image1="/images/sch-site.png"
        image2="/images/service-benefit.jpg"
        projectLink="https://www.keyonavilleschools.com.ng"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default website;
