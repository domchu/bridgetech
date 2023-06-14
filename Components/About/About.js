import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import TeamCard from "./../Team/TeamCard";
import WhyBridgetech from "../WhyBridgetech";
import Reveal from "../../Components/Reveal";

const About = () => {
  return (
    <>
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                About <span className="sub_heading_span">Us</span>
              </h1>
              <p>
                Bridgekode is a software development services that is based on
                coding software & general IT solutions to businesses across
                globe.
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">About</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* HI THERE */}
      <Box className="about-section wf-section contet">
        <Box className="section-gap-top-130">
          <Box className="container w-container">
            <Box className="bout-block">
              <Box className="about-content">
                <Reveal>
                  <h2 className="section-title">
                    Hi <span className="section-title-inner-style">there!</span>
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="about-subtitle paragraph-medium">
                    Over 3 years working in IT services developing software
                    applications, kids coding training for students, secondary
                    school leavers, youths, individuals, design website, school
                    database/portal, desktop apps and mobile apps for clients
                    all over the world using all the necessary tools and latest
                    technologies.
                  </p>
                </Reveal>
                <Box>
                  <Reveal>
                    <li>
                      We are <strong>Bridgekode</strong> provide the best
                      quality
                      <Link href="https://www.example.com"> IT solution. </Link>
                      Bridgekode is an innovative software development services
                      company dedicated to providing innovative and tailored
                      solutions to businesses of all sizes. With a strong focus
                      on technology and a team of highly skilled professionals,
                      Bridgekode is committed to delivering high-quality
                      software products and services that drive business growth
                      and efficiency thereby increases income to oganisation.
                    </li>
                  </Reveal>
                  <br />
                  <li>
                    <strong>Our Services:</strong>
                  </li>
                  <Reveal>
                    <li>
                      <b>Custom Software Development:</b> Bridgekode specializes
                      in building custom software solutions that are precisely
                      tailored to meet your unique business requirements.
                      Whether you need a web application, mobile app, school
                      kids coding program or enterprise software, our team can
                      create scalable, secure, and user-friendly solutions.
                    </li>
                  </Reveal>
                  <br />
                  <Reveal>
                    <li>
                      <b>Web Development:</b> We offer comprehensive web
                      development services, including front-end and back-end
                      development, CMS (Content Management System)
                      customization, e-commerce platforms, and web portal
                      development. Our experienced developers ensure your
                      website is visually appealing, responsive, and optimized
                      for performance.
                    </li>
                  </Reveal>
                  <br />
                  <Reveal>
                    <li>
                      <b>Mobile App Development:</b> Bridgekode develops desktop
                      apps & mobile applications for iOS and Android platforms
                      that provide seamless user experiences. We leverage the
                      latest technologies, such as native development,
                      cross-platform frameworks, and cloud integration, to
                      deliver feature-rich and intuitive mobile apps.
                    </li>
                  </Reveal>
                  <br />
                  <Reveal>
                    <li>
                      <b>Web Development Training:</b> Bridgekode's web
                      development training program is exceptional. The
                      instructors are highly knowledgeable and experienced in
                      the field, providing thorough explanations and practical
                      examples.The curriculum is comprehensive, covering all
                      essential aspects of web development, including HTML, CSS,
                      JavaScript, Typescript, Bootstrap, Git/Github, WordPress
                      and frameworks like React, Next, Angular, Vue and back-end
                      services like Node/Express.js, PHP/laravel, ruby on rail,
                      Python, MySQL, MongooseDB, Postgres, Oracle etc .
                      <br />
                      Overall, Bridgekode's web development training program not
                      only equipped you with the necessary skills but also
                      boosted you confidence in pursuing a career in web
                      development. We highly recommend their training program to
                      anyone especially kids, students, secondary school leavres
                      looking to gain expertise skill in IT field.
                    </li>
                  </Reveal>
                </Box>

                <Reveal>
                  <Box className="about-small-title">
                    <span className="text-span-title">Mission</span>
                  </Box>
                  <p>
                    At <strong>Bridgekode</strong>, our  
                     <strong>Mission </strong>
                    is to empower businesses with innovative and tailored
                    software solutions that drive growth, efficiency, and
                    digital transformation & train school students/kids in
                    coding websites with the basics tools. We are committed to
                    delivering high-quality products and services that exceed
                    client expectations, leverage cutting-edge technologies, and
                    create sustainable value for our partners.
                  </p>
                </Reveal>
                <Reveal>
                  <Box className="about-small-title">
                    <span className="text-span-title">Vision </span>
                  </Box>
                  <p>
                    Our <strong>Vision</strong> is to be a trusted and renowned
                    global leader in software development services, known for
                    our technical excellence, customer-centric approach, and
                    ability to deliver transformative solutions. We aspire to be
                    at the forefront of technological advancements, driving
                    positive change through innovation, and making a meaningful
                    impact in the industries we serve. We envision long-term
                    partnerships built on trust, collaboration, and shared
                    success.
                  </p>
                </Reveal>
                <Link
                  href="/contactus"
                  className="primary-button margin-top-40"
                >
                  Let's Talk
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* WHY BRIDGEKODE  */}
      <WhyBridgetech />

      {/* BRIDGEKODE TEAM */}
      <Box className="team-section wf-section">
        <Box className="section-gap-130">
          <Box className="container w-container">
            <Box className="team-list-wrapper w-dyn-list">
              <Box className="team-list w-dyn-items" role="list">
                <TeamCard />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About
