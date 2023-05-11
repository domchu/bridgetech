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
              HR, and internal team offering account and legal support.
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
                  What are the perks of working with Bridgetech?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              What are the perks of working with Softermii? Team We focus on
              teamwork, because the key to our company's success is a synergy
              from every team member’s efforts! Responsibility We are
              responsible for every task. This approach allows us to eliminate
              chaos, makes our processes efficient and gives everyone a clear
              path to growth together with Softermii. Result-driven We are
              deeply engaged in what we do as we love to deliver results with
              fun and pleasure. Development We invest our time in self-education
              and training, and Softermii helps us to achieve synergies in our
              common development. Professional second opinion Audit your
              software to boost its performance and improve user experience.
              Valuable market insights Get the latest tech follow up, including
              market trends and users’ needs. On-time and -budget delivery We
              guarantee a record 10% deviation in time and scope for project
              delivery. Software support after the release We provide ongoing
              maintenance and Quality Assurance for your software.
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
              Branding and UI/UX Design Web Development Mobile App Development
              QA Services MVP Strategy Consulting AR/VR Blockchain DevOps
              Project Management Product Management
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
              experienced in the following technologies: For web development:
              Ruby on Rails PHP Node.js C# Javascript Angular React.js Bootstrap
              HTML 5, CSS 3 Web API Services For mobile development: Swift
              Kotlin Java React Native Thus, if you’d like to implement some
              recent technologies into your project and make it look updated,
              outsourcing to our specialists experienced in that niche will be
              the best option.
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
              Softermii can provide a dedicated development team with extensive
              experience to fill any skill gaps that affect your development
              projects. We have such high-quality specialists as Full-Stack
              Engineers, Front-end, Backend and Mobile developers, UI/UX
              Designers, Project Managers, Business Analysts, QA Engineers, and
              DevOps specialists. We make sure that our professionals use the
              latest technologies, are middle and senior professionals with
              minimum B2 level of English, and are fully dedicated to your
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
              to create a project report document and a proposal. Our team
              prepares all the needed documentation with requirements and sends
              it for the client’s approval. Once everything has been finalized,
              we would then take the project to the next stage, which is the
              start of the development process.
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
                  Section 9 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                  Section 10 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="faq-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default Faq
