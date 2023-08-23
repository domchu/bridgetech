import React from "react";

import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import ProjectHeading from "../../Components/ProjectHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const GithubProfile = () => {
  return (
    <>
      <DefaultSeo
        title="Github Profile | Crafting Websites to Perfection "
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients"
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="Fetch Github Profile"
        projectUrl="/projects"
      />

      {/* SINGLE PROJECT DETAILS FOR Fetch Github Profile */}
      <SingleProject
        title="Fetch Github Profile"
        content="The GitHub Profile Generator is a web application developed using a combination of API, JavaScript, CSS, and HTML. The primary objective of this project is to provide users with a convenient tool to generate visually appealing and informative profiles for their GitHub accounts. Overall, the GitHub Profile Generator is a valuable tool for developers who want to showcase their skills and contributions on GitHub in an attractive and professional manner. Its user-friendly interface, customization options, and real-time data integration from the GitHub API make it an essential asset for any developer looking to create a compelling online presence. Overall, the GitHub Profile Generator is a valuable tool for developers who want to showcase their skills and contributions on GitHub in an attractive and professional manner. Its user-friendly interface, customization options, and real-time data integration from the GitHub API make it an essential asset for any developer looking to create a compelling online presence."
        name="Fetch Github Profile"
        date="March 25, 2022"
        category="API Project"
        address="ojo, Okokomaiko, Lagos Nigeria"
        summary="The project utilizes the GitHub API to fetch relevant user data, including profile information, repositories, and contribution statistics. This ensures that the generated profiles are always up-to-date and accurately reflect the user's GitHub activity."
        number1="When a user visits the web application, they are presented with a user-friendly interface that prompts them to input their GitHub username or the username of the GitHub user they want to generate a profile for"
        number2="IT Consultancy provide the most service neque porro
        quisquam est qui dolorem ipsum quia golor sit amet,
        conse ctetur, adipisci velitThe GitHub API responds to the request by providing the necessary data associated with the provided GitHub username. This data includes the user's profile information (e.g., name, bio, avatar), a list of their public repositories, contribution statistics, and other relevant details."
        point1="The GitHub API responds to the request by providing the necessary data associated with the provided GitHub username. This data includes the user's profile information (e.g., name, bio, avatar), a list of their public repositories, contribution statistics, and other relevant details."
        point2=" Depending on the project's design and user interface, the user may be given the option to customize certain aspects of their profile. For example, they might be able to choose a color scheme, select specific repositories to showcase, or add a personal bio or tagline."
        result="The GitHub Profile Generator project achieves its primary goal of providing users with a visually appealing and informative profile for their GitHub accounts. By integrating with the GitHub API and leveraging client-side technologies, the project successfully fetches real-time data from GitHub and dynamically renders it in a user-friendly interface. The result is a personalized GitHub profile that showcases the user's profile information, repositories, contribution statistics, and other relevant details. In summary, the GitHub Profile Generator project fetches user data from the GitHub API, processes and renders it dynamically on the client-side, and allows users to customize and display their GitHub profiles in an attractive and personalized way. The project's success lies in its integration with the GitHub API, its intuitive user interface, and its ability to create visually appealing profiles with real-time data."
        benefits="Overall, the GitHub Profile Generator offers a valuable service to developers by simplifying the process of creating an impressive and up-to-date GitHub profile. It empowers users to showcase their work, engage with the developer community, and open doors to new opportunities within the tech industry."
        problemsState=" In API Service we cover most of the IT problems
        that your company faces and we try to solve it."
        problemsSummary="Open Source Contribution: If the GitHub Profile Generator project is made open source, it can benefit the developer community by allowing others to contribute, suggest improvements, and use the code as a foundation for building similar tools."
        solution1=" IT Management provide the most service neque porro quisquam est qui dolorem ipsum quia golor sit amet, consectetur, adipisci velitThe project fetches data directly from the GitHub API, ensuring that the generated profiles are always up-to-date. This real-time data integration guarantees that the profiles accurately reflect the user's latest GitHub activities and contributions."
        solution2="With the GitHub Profile Generator, users can create a professional and polished online presence that highlights their GitHub activity and contributions. This can be especially beneficial for developers seeking job opportunities, collaborations, or networking within the tech community."
        solution3=" The generated profiles act as a showcase for the user's coding skills, projects, and contributions. It helps potential employers and collaborators get a quick overview of the user's capabilities and areas of expertise."
        image1="/images/github.png"
        image2="/images/student.jpg"
        projectLink="https://git-hub-profile-f756.vercel.app/"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default GithubProfile;
