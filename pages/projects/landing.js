import React from "react";
import Topnav from "../../Components/Topnav/Topnav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonails/Testimonial";
import SingleProject from "../../Components/Projects/SingleProject";
import ProjectHeading from "../../Components/ProjectHeading";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const landing = () => {
  return (
    <>
      <DefaultSeo
        title="Landing Page | Bridgekode Tech"
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients"
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="Hospital Landing Page."
        projectUrl="/projects/project-home"
      />
      {/* SINGLE PROJECT DETAILS FOR Hospital Landing Page. */}
      <SingleProject
        title="Hospital Landing Page."
        content="The hospital website, developed using technologies like HTML, CSS, and JavaScript, is a dynamic and interactive platform that provides information and services to patients, visitors, and healthcare professionals. The hospital website developed using HTML, CSS, JavaScript, and other relevant technologies provides a visually appealing, user-friendly, and interactive platform for users to access information, schedule appointments, and engage with the healthcare facility. The technologies used enable dynamic content, responsive design, interactive features, and seamless integration with external services, ultimately enhancing the overall user experience."
        name="Belenda Hospital"
        date="April 20, 2020"
        category="Health Care"
        address="25K Avenue, Liberty Estate, Ojo-Lagos"
        summary="A hospital website works by combining various components and functionalities to provide information, services, and engagement to users. Here is a general overview of how a hospital website works:"
        number1="Integration of External Systems: The website may integrate with other systems or services to enhance functionality. For example, it may integrate with billing systems for online bill payment or with third-party APIs for displaying real-time weather information or mapping services."
        number2="Appointment Booking: Many hospital websites offer online appointment booking functionality. This feature allows patients to select their desired date, time, and doctor for their medical consultation or procedure. The website may integrate with a scheduling system to manage appointments effectively."
        point1="Information Architecture: The website's information architecture is designed to categorize and structure content in a logical manner. It ensures that users can easily find the information they are looking for, such as services offered, departments, doctor profiles, and contact details."
        point2="The website is typically powered by a html, css, javascript and others web technologies like sass, fontawesome, etc. that allows administrators to manage and update the website's content. These provides an interface for adding, editing, and organizing text, images, videos, and other media elements."
        result=" Overall, a hospital website functions as a comprehensive platform that provides information, services, and engagement opportunities to patients, visitors, and healthcare professionals. It aims to deliver a user-friendly experience, facilitate access to healthcare resources, and promote effective communication between the hospital and its stakeholders."
        benefits="In summary, a hospital website provides valuable benefits such as easy access to information, online appointment booking, comprehensive health services information, doctor profiles, health education resources, emergency information, online bill payment, virtual tours, community engagement, and online support. These benefits improve patient experience, convenience, and access to healthcare services while promoting transparency and engagement between the hospital and its stakeholders."
        problemsState=" In health care service we cover most of the IT problems
        that your company faces and we try to solve it."
        problemsSummary="A hospital website offers numerous benefits to patients, visitors, and the healthcare facility itself. Here are some key benefits of having a hospital website:"
        solution1=" nformation Access: A hospital website provides easy access to crucial information about the healthcare facility, including its location, contact details, visiting hours, and services offered. Patients and visitors can quickly find the information they need without making phone calls or visiting in person."
        solution2=" Doctor Profiles and Online Booking: Hospital websites often include profiles of doctors, including their qualifications, specialties, and experience. Patients can learn about the expertise of healthcare professionals and make informed decisions when choosing a specific doctor for their care. Some websites also offer online booking options to schedule appointments directly with specific doctors."
        solution3=" Emergency Information: Hospital websites can provide critical emergency information, including contact numbers, directions to the emergency department, and instructions for handling emergencies. This ensures that individuals in need of urgent medical care can quickly locate the hospital and receive appropriate assistance."
        image1="/images/hospital.png"
        image2="/images/service-benefit.jpg"
        projectLink="https://mc-center-landing-page-plsl.vercel.app/"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default landing;
