import styled from "styled-components";
import Dots from '../images/dots.jpg';
import HeartImage from '../images/heart.jpg';
import PingPongImage from '../images/ping-pong.jpg';

export const MainSection = styled.section`

  h1 {
    color: #1f224b;
    font-size: 100px;
  }

  button {
    border-radius: 25px;
    padding: 10px 30px;
    border: none;
    background: #f95e3f;
    color: white;
  }

  .minor-half {
    background: #1f224b;

    position: relative;

    .main-image {
      position: absolute;
      left: -50.3%;
      top: 20%;
    }
  }

  .major-half {
    padding: 100px;

    p {
      font-size: 20px;
      color: #1f224b;
    }

    .quote {
      color: #adacbd;
      max-width: 60%;
    };

    .quote:before  {
      border-top: 2px solid #adacbd;
      border-radius: 10px;
      display: block;
      position: relative;
      top: -15px;
      left: -45%;
      margin: 0 auto;
      width: 10%;
      content: "";
    }
  }

  @media (min-width: 1441px) {

    .minor-half {

      .main-image {
        position: absolute;
        left: -46%;
        top: 20%;
      }
    }

  }

  @media (min-width: 2000px) {

    .minor-half {

      .main-image {
        position: absolute;
        left: -34%;
        top: 20%;
      }
    }

  }

`;


export const HobbiesSection = styled.section`

  a {
    color: #1f224b;
    &:hover {
      color: #1f224b;
      text-decoration: none;
      cursor: pointer;
    }
  }

  color: #1f224b;

  button {
    border-radius: 25px;
    padding: 10px 30px;
    border: none;
    background: #f95e3f;
    color: white;
  }

`;

export const ChooseHobbySection = styled.section`

  color: #1f224b;

  h2:before  {
    display: block;
    position: relative;
    top: -15px;
    left: -45%;
    margin: 0 auto;
    width: 10%;
    content: url(${ Dots });
  }

  button {
    border-radius: 25px;
    padding: 10px 30px;
    border: none;
    background: #f95e3f;
    color: white;
  }

`;

export const TestimonialSection = styled.section`

  position: relative;
  background-color: #4a6bd9;

  h2 {
    color: #fff;
  }

  .rounded-div {
    border: 1px solid white;
    border-radius: 25px;

    .rounded-right {
      padding: 100px;
      color: white
    }

    .surfer-img {
      height: 100%;
      border-radius: 25px;
      margin-right: 30px;
    }
  }

  .quote-mark-img {
    width: 50px;
    height: 50px;
    left: 0;
    top: 35px;
  }

  .book-img {
    position: absolute;
    right: 0;
    top: 35px;
  }

`;

export const PopularHobbiesSection = styled.section`

  color: #1f224b;

  a {
    color: #1f224b;
    &:hover {
      color: #1f224b;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .popular-section {
    height: 150px;
    background-image: url(${ PingPongImage });
    background-repeat: no-repeat;
    background-position: top right;
  }

`;

export const SignInSection = styled.section`


  color: #1f224b;


  a {
    color: #1f224b;
    &:hover {
      color: #1f224b;
      text-decoration: none;
      cursor: pointer;
    }
  }

  button {
    border-radius: 25px;
    padding: 10px 30px;
    border: none;
    background: #f95e3f;
    color: white;
  }

  .list {
    list-style: none;
  }

`;

export const HoobyListSection = styled.section`
  color: #1f224b;
  background-image: url(${HeartImage});
  background-repeat: no-repeat;
  background-position: right;
  p {
    max-width: 70%;
  }
`;
