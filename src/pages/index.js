// PAGE [ HOME ] ###############################################################

// EXTERNAL DEPENDENCIES #######################################################

import React from "react";
import { Link } from "gatsby";

// END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// INTERNAL DEPENDENCIES #######################################################

import SEO from "../components/seo";
import Card from "../components/card";
import Layout from "../components/layout";
import {
  MainSection, HobbiesSection, ChooseHobbySection,
  TestimonialSection, PopularHobbiesSection, SignInSection, HoobyListSection
} from "../stylesheets/index.styles";

// END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// IMAGES ######################################################################

import Art from "../images/art.jpg";
import Main from "../images/main.png";
import Book from "../images/book.png";
import Food from "../images/food.jpg";
import Icon1 from "../images/icon-1.jpg";
import Icon2 from "../images/icon-2.jpg";
import Icon3 from "../images/icon-3.jpg";
import Surfer from "../images/surfer.jpg";
import NewHobby from "../images/new-hobby.jpg";
import QuoteMark from "../images/quote-mark.png";
import TennisRacket from "../images/tennis-racket.jpg";
import CameraLens from "../images/camera-lens.jpg";

// END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. COMPONENT ################################################################

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection className="">

      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 vh-100 major-half">
          <h1>Discover your hooby</h1>
            <p className="my-3">Search our online directory of activities to do in your free time.</p>
            <button className="my-3">Find your hoobie</button>
            <p className="mt-5 quote">Exploring a hobby can have an impact on your mental and physical well-being and can impact your overall life satisfaction</p>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 minor-half vh-100">
          <img src={ Main } alt="" className="main-image"/>
        </div>

      </div>
    </MainSection>

    <HoobyListSection className="row d-block my-5 py-5 container mx-auto">
      <h2 className="text-center">The Ultimate List of Hobbies</h2>
      <p className="text-center mx-auto">From woodwork to caligraphy, building scale minitures or collection coins, action figures or antiques - Hobbis are as unique as the people who pursue them.</p>
    </HoobyListSection>

    <HobbiesSection>

      <div className="row mx-2 justify-content-center">

        <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 mx-2 shadow border-0 p-5">
          <div className="d-flex align-items-center">
            <img src={ Icon1 } alt="" />
            <h4>Broaden Horizon</h4>
          </div>
          <p>Search our online directory of activities to do in your free time.</p>
        </div>

        <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 mx-2 shadow border-0 p-5">
          <div className="d-flex align-items-center">
            <img src={ Icon2 } alt="" />
            <h4>Train you brain</h4>
          </div>
          <p>Search our online directory of activities to do in your free time.</p>
        </div>

        <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 mx-2 shadow border-0 p-5">
          <div className="d-flex align-items-center">
            <img src={ Icon3 } alt="" />
            <h4>Get rid of stress</h4>
          </div>
          <p>Search our online directory of activities to do in your free time.</p>
        </div>

      </div>

      <div className="d-flex justify-content-center align-items-center m-5">
        <Link to="/" className="text-center font-weight-bold">Explore now <span className="mt-5"> > </span></Link>
      </div>

    </HobbiesSection>

    <ChooseHobbySection className="container">
      <div className="row mx-2 my-5 justify-content-center">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 border-0 p-5">
          <h2 className="text-left">Choose the right hobby for you</h2>
          <p className="text-left">From woodwork to caligraphy, building scale minitures or collection coins, action figures or antiques - Hobbis are as unique as the people who pursue them.</p>
          <button className="">Find your hoobie</button>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 border-0 p-5">
            <img src={ NewHobby } alt="" />
        </div>
      </div>

    </ChooseHobbySection>

    <TestimonialSection className="row my-5 p-5 justify-conten-center">
      <h2>Our users about us</h2>
      <div className="d-flex rounded-div">
        <img src={ Surfer } alt="" className="surfer-img"/>
        <div className="rounded-right">
          <img src={ QuoteMark } alt="quote mark" className="quote-mark-img" />
          <p className="text-center">From woodwork to caligraphy, building scale minitures or collection coins, action figures or antiques - Hobbis are as unique as the people who pursue them.</p>
          <p>-Miguel Collins</p>
        </div>
      </div>
      <img src={ Book } alt="book" className="book-img" />
    </TestimonialSection>

    <PopularHobbiesSection>
      <div className="mx-auto popular-section">
        <h2 className="text-center">Most Popular Hobbies</h2>
        <p className="text-center">From woodwork to caligraphy, building scale minitures or collection coins, action figures or antiques</p>
      </div>

      <div className="row my-5 p-5 justify-content-center bg-white">
        <Card
          image={ TennisRacket }
          title="Badminton"
          subtitle="sport"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          className="col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 mx-3"
        />

        <Card
          image={ CameraLens }
          title="Photography"
          subtitle="art & craft"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          className="col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 mx-3"
        />

        <Card
          image={ Food }
          title="Cooling"
          subtitle="home"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          className="col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 mx-3"
        />

        <Card
          image={ Art }
          title="Architecture"
          subtitle="art & craft"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          className="col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 mx-3"
        />
      </div>

      <div className="d-flex justify-content-center">
        <Link to="/"><span className="font-weight-bold">See All Hobbies  > </span></Link>
      </div>

    </PopularHobbiesSection>

    <SignInSection className="bg-light">

      <div className="row mt-5 p-5 d-flex justify-content-center ">

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 border-0 p-5">
          <h2 className="text-center">Choose the right hooby for you</h2>
          <p className="text-center">Search our online directory of activities to do in your free time</p>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 border-0 p-5 d-flex">
          <ul className="list mx-auto">
            <li>
              <Link to="/"><button>Find your hobbie</button></Link>
            </li>
            <li>
              <Link to="/" className="ml-3 p-5">Sign In</Link>
            </li>
          </ul>

        </div>

      </div>

      <div className="d-flex justify-content-center pb-5">
        <Link to="/"><span className="font-weight-bold">See All Hobbies  > </span></Link>
      </div>
    </SignInSection>

  </Layout>
);

export default IndexPage
// END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
