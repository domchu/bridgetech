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

const movie = () => {
  return (
    <>
      <DefaultSeo
        title="Movie Engine | Bridgekode Tech"
        description="These projects was carried out by bridgekode, completed and duly delivered to their respective clients."
        {...SEO}
      />
      <Topnav />
      <Header />
      <ProjectHeading
        title="Movies Engine"
        projectUrl="/projects/project-home"
      />

      {/* SINGLE PROJECT DETAILS FOR Movies Engine */}
      <SingleProject
        title="Movies Engine"
        content="the movies engine combines TypeScript/JavaScript, HTML, CSS, and API integration to create an interactive and personalized movie search and recommendation experience for users. It leverages user input, movie databases, recommendation algorithms, and user preferences to provide relevant movie suggestions, detailed movie information, and an enjoyable movie discovery process. A movies engine, also known as a movie recommendation or movie search engine, is a web application that allows users to search for movies, discover new movies, and get personalized movie recommendations based on their preferences."
        name="Movies Engine "
        date="January 07, 2022"
        category="Entertainment"
        address="N0.9 Kembiri Road, Okokomaiko-Ojo, Lagos State"
        summary="It's important to note that the specific workings of a movies engine can vary depending on the implementation, technology stack, and integration with movie databases. The overall process involves user interaction, integration with a movie database API, processing and displaying search results, providing personalized recommendations, fetching movie details, and incorporating user engagement features for an immersive movie discovery and exploration experience."
        number1="User Interaction:

        Users interact with the movies engine through the user interface, which allows them to search for movies, view movie details, and access other features."
        number2="Movie Database Integration:
        The movies engine connects to a movie database API, such as IMDb or TMDB, to fetch movie data.
        The API provides a vast collection of movie information, including titles, genres, actors, directors, release dates, ratings, and more."
        point1="Movie Recommendations:
        To provide personalized movie recommendations, the movies engine utilizes user preferences and data from the movie database API.
        User preferences can include favorite genres, actors, directors, or previously watched movies."
        point2="User Interaction and Features:
        The movies engine may offer additional features for user interaction and engagement.
        This can include options for users to rate movies, write reviews, create watchlists, save favorite movies, or share recommendations on social media."
        result=" We are Optitech provide the best quality It
        solution neque porro quisquam est qui dolorem ipsum quia
        golor sit amet, conse ctetur, adipisci velit, sed eligendi
        optio cumque nihil impedit quo minus id quod maxime placeat
        pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or
        pursues or desires to obtain pain of itself, because it is
        pain, but because occasionally circumstances occur in which
        toil and pain can procure him some great pleaser pleasure
        rationally encounter consequences that are extremely
        painful. Nor again is there anyone who loves or pursues or
        desires to obtain pain of itsel because it is pain, but
        because occasionally circumstances occur in which toil and
        pain can procure him some great pleaser"
        benefits="We are Optitech provide the best quality It
        solution neque porro quisquam est qui dolorem ipsum quia
        golor sit amet, conse ctetur, adipisci velit, sed eligendi
        optio cumque nihil impedit quo minus id quod maxime placeat
        pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or
        pursues or desires to obtain pain of itself, because it is
        pain, but because occasionally circumstances occur in which
        toil and pain can procure"
        problemsState=" In IT Consultancy Service we cover most of the IT problems
        that your company faces and we try to solve it."
        problemsSummary="We are Optitech provide the best quality
        It solution neque porro quisquam est qui dolorem ipsum
        quia golor sit amet, conse ctetur, adipisci velit, sed
        eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat"
        solution1=" IT Management provide the most service neque porro quisquam est qui dolorem ipsum quia golor sit amet, consectetur, adipisci velit"
        solution2=" IT Management provide the most service neque porroquisquam est qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci velit"
        solution3=" IT Management provide the most service neque porro
        quisquam est qui dolorem ipsum quia golor sit amet, conse
        ctetur, adipisci velit"
        image1="/images/movie-engine.png"
        image2="/images/service-benefit.jpg"
        projectLink="https://movies-engine.vercel.app/"
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default movie;
