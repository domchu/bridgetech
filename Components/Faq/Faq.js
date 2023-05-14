import React from 'react'
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <>
      {/* SUBHEADING OF THE FAQ PAGE */}
      <Box className="project-sub-container">
        <Box className="w-container">
          <Box className="project-block">
            <Box className="project-sub-content">
              <h1 className="project-title">
                Frequently{" "}
                <span className="sub_heading_span">Asked Questions</span>
              </h1>
              <p>
                Here is a list of the most common questions we are usually
                asked. If you haven't found the one you're interested in, just
                drop us a email/line!
              </p>
              <ul className="project-link">
                <li className="project-nav-items">
                  <Link href="/" className="project-nav-link">
                    Home
                  </Link>
                </li>
                <Box className="separator">/</Box>
                <li>
                  <Box className="project-link-text">FAQ</Box>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CHAKRA ACCORDION COMPONENT */}
      <Box className="faq-container">
        <Accordion
          defaultIndex={[0]}
          allowMultiple
          pt="100px"
          pb="100px"
          w="80%"
          alignItems="center"
          margin="auto"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  How big is your team?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              We have more than 10 specialists with diverse experience in
              different industries and products of various complexity. There are
              Software development department, Project management office,
              Quality assurance and Business analytics department, Recruitment &
              HR, and internal team offering account, Design and legal support.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  What are the perks of working with Bridgekode?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              What are the perks of working with Bridgekode?
              <li>
                <strong>Team</strong>
              </li>
              We focus on teamwork, because the key to our company's success is
              a synergy from every team member’s efforts!
              <li>
                <strong>Responsibility</strong>
              </li>
              We are responsible for every task. This approach allows us to
              eliminate chaos, makes our processes efficient and gives everyone
              a clear path to growth together with Bridgekode.
              <li>
                <strong>Result-driven</strong>
              </li>
              We are deeply engaged in what we do as we love to deliver results
              with fun and pleasure.
              <li>
                <strong>Development</strong>
              </li>
              We invest our time in self-education and training, and Bridgekode
              helps us to achieve synergies in our common development.
              <li>
                <strong>Professional second opinion</strong>
              </li>
              Audit your software to boost its performance and improve user
              experience.
              <li>
                <strong>Valuable market insights</strong>
              </li>
              Get the latest tech follow up, including market trends and users’
              needs.
              <li>
                <strong>On-time and -budget delivery</strong>
              </li>
              We guarantee a record 10% deviation in time and scope for project
              delivery.
              <li>
                <strong>Software support after the release</strong>
              </li>
              We provide ongoing maintenance and Quality Assurance for your
              software.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  What industries do you operate in?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              To provide the best services in the market we mainly focus our
              software development outsourcing services on product development
              for several primary industries:
              <li>E-commerce</li>
              <li>Healthcare</li>
              <li>Entertaiments</li>
              <li>Electronics</li>
              <li>Education</li>
              <li>Food & Science</li>
              <li>Real Estate</li>
              <li>Fintech</li>
              <li>Telecommunication</li>
              Besides, we have a lot of successful projects in other industries
              like entertainment, hospitality, media, education and other.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  What software development services do you provide?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              We offer the next set of software and design development services
              separately or within the full project development life cycle:
              <li>Web Development</li>
              <li>Web Development Training</li>
              <li>Branding</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>SEO</li>
              <li>Graphics Design</li>
              <li>QA Services</li>
              <li>Human Resources Services</li>
              <li>IT Setup & Management</li>
              <li>Consulting AR/VR </li>
              <li>Blockchain DevOps</li>
              <li>Project Management</li>
              <li>Hardware & Networking</li>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  What technologies do you use in software development?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              Our team includes only highly-professional specialists, that are
              experienced in the following technologies:
              <li>
                <strong>For web development:</strong>
              </li>
              <li>Ruby on Rails</li>
              <li>PHP</li>
              <li>Node.js</li>
              <li>C#</li>
              <li>Javascript</li>
              <li>Angular</li>
              <li>HTML 5</li>
              <li>React.js</li>
              <li>CSS 3</li>
              <li>Bootstrap</li>
              <li>Web API Services</li>
              <li>Typescript</li>
              <li>Database:MySql, Postgres, Moongoes</li>
              <strong>For mobile development:</strong>
              <li>Swift</li>
              <li>Kotlin</li>
              <li>Java</li>
              <li>React Native</li>
              Thus, if you’d like to implement some recent technologies into
              your project and make it look updated, outsourcing to our
              specialists experienced in that niche will be the best option.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  Do you provide outstaffing services?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              Bridgekode can provide a dedicated development team with extensive
              experience to fill any skill gaps that affect your development
              projects. We have such high-quality specialists as:
              <li>Full-Stack Engineers</li>
              <li>Mobile Engineers</li>
              <li>Front-end Engineers</li>
              <li>Back-end Engineers</li>
              <li>UI/UX Designers</li>
              <li>Project Managers</li>
              <li>Business Analysts</li>
              <li>Tester Engineers</li>
              <li>Contents writers</li>
              <li>QA Engineers</li>
              <li>Hardware/Network Engineers</li>
              <li>DevOps specialists</li> We make sure that our professionals
              use the latest technologies, are middle and senior professionals
              with minimum B2 level of English, and are fully dedicated to your
              project.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  How long does it take to start my product development?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              To start with, we review project requirements from the client, we
              get them analyzed and then inform you of the estimation results.
              Once you are fine with the cost and time, the next step would be
              to create a project report document and a proposal.
              <br />
              Our team prepares all the needed documentation with requirements
              and sends it for the client’s approval. Once everything has been
              finalized, we would then take the project to the next stage, which
              is the start of the development process.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  How do you guarantee product quality?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              We evaluate the result after every two weeks, we test our work (we
              conduct both development and acceptance tests), we present it to
              you, we ask for the client’s feedback so the clients know they get
              what they are paying for. Also, we have continuous communication
              with the client, so that there are no surprises and we move
              forward in the development only after the client’s approval.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  What computer program do people use to write code?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              In order to write code, you can start with something as simple as
              a text editor like Notepad—code simply looks like letters,
              numbers, and symbols. As your coding skills improve and your needs
              diversify, though, you’ll probably want to upgrade to a text
              editor with more functionality. Editors like Notepad++, Sublime
              text, Visual studio code(VS code) Atom, and Light Table are free,
              customizable, and designed with coding in mind. These programs
              offer features like autocomplete based on specific programming
              languages.
              <br />
              Once your code is written, you’ll use another program called a
              compiler to edit and format your code for a computer to read.
              Compilers are specific to the programming language you’re working
              with, and the finished product still isn’t the type of thing
              you’ll see when you open up your browser—it’s simply code in a
              more finished format.
              <br />
              Some coders like to use what’s called an Integrated Development
              Environment, or IDE. IDEs like NetBeans and Eclipse combine text
              editors with compilers as well as other tools for automating and
              debugging your code (locating and correcting errors), making them
              comprehensive suites for coding. With an IDE, you’ll also have a
              built-in preview so you can see what your code will look like once
              it’s compiled.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="faq-heading"
                >
                  What is Bridgekode?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              Bridgekode is a strategic technology partner for custom software
              development and staff augmentation. Founded in 2022, Bridgekode
              has extensive experience of building solutions for start-ups and
              SMEs all over the world. Our team has already implemented over 10
              software products of different complexity in the following niches:
              healthcare, e-commerce, fintech, real estate, education, &
              proptech. Our goal is to help businesses accelerate growth and
              innovation, transform operational efficiency, deliver new products
              to market, improve profitability and customer satisfaction.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default Faq
