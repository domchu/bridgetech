import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import ProjectHeading from "../../Components/ProjectHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const training = () => {
  return (
    <>
      <DefaultSeo
        title="Portfolio Website | Crafting Websites to Perfection "
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients."
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="Portfolio Website"
        projectUrl="/projects/project-home"
      />

      {/* SINGLE PROJECT DETAILS FOR SOFTWARE DEVELOPMENT */}
      <SingleProject
        title="Portfolio Website"
        content="These website was developed by bridgekode. The portfolio website is a web application that showcases  skills, projects, and accomplishments. It has been developed using TypeScript, React, and Styled Components, along with other libraries that you have its compatibilities to use. Overall, The portfolio website serves as a showcase of skills and a representation of your personality as a product designer(Ux'Ui). It demonstrates the ability to build modern, interactive, and aesthetically pleasing web applications using the technologies and libraries. This online portfolio is a powerful tool to impress potential clients, employers, or collaborators and showcase your capabilities as a front-end developer. its includes home/introduction section, projects showcase, accessibility and performance, deployment etc"
        name="Portfolio Website"
        date="August 5, 2023"
        category="Product Design"
        address="N0 9 Kembiri Road, Okokomaiko-Ojo, Lagos State"
        summary="Remember that the specific implementation details and functionalities of your portfolio website may vary based on your design choices, the technologies used, and the goals you have set for the website. Regularly testing your website, seeking feedback, and making improvements will help ensure that your portfolio is a strong representation of your skills and achievements as a developer."
        number1="Users can interact with the website through various events, such as clicking buttons, submitting forms, or navigating to different sections. Event handlers in React respond to these interactions and trigger appropriate actions."
        number2="Information about your projects and works, such as project names, descriptions, images, and links, may be stored in an array or retrieved from a server or database."
        point1="If you have a contact form, user inputs are captured by the form components, and you may use client-side validation to ensure the data is properly entered."
        point2="As your portfolio evolves, you may need to update project data, add new projects, or make improvements to the UI and functionality. Ongoing maintenance ensures your portfolio remains up-to-date and reflects your latest accomplishments."
        result=" The result of your portfolio website project is a fully functional and visually appealing web application that effectively showcases your skills, projects, and accomplishments as a developer. The website serves as a centralized platform where potential clients, employers, collaborators, or anyone interested in your work can learn more about you and your abilities."
        benefits="These portfolio website is a powerful asset that boosts your professional presence, demonstrates your skills, and opens up various opportunities in the tech industry. It not only serves as a showcase of your past work but also acts as an ongoing platform for personal and professional growth."
        problemsState=" In portfolio website service we cover most of the IT problems
      that your company faces and we try to solve it."
        problemsSummary="These portfolio website acts as a live demonstration of your coding abilities, design skills, and knowledge of modern web development technologies. It provides a tangible representation of your expertise, giving visitors a clear understanding of what you can accomplish."
        solution1="The portfolio website is a powerful asset that boosts your professional presence, demonstrates your skills, and opens up various opportunities in the tech industry. It not only serves as a showcase of your past work but also acts as an ongoing platform for personal and professional growth."
        solution2=" The process of building your portfolio website also helps you grow as a developer. It provides a practical learning experience in real-world web development, from design to implementation and deployment."
        solution3=" During job interviews or client meetings, your portfolio becomes a valuable resource for discussing and showcasing your past work. It allows you to speak confidently about your projects and the technologies used."
        image1="/images/portfolio.jpeg"
        image2="/images/nkiru.jpg"
        projectLink="https://sammy-portfolio-ymei65rx8-creatorxperience.vercel.app/"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default training;
