import React, { useState } from "react";
import {
  Header,
  Nav,
  LinkWrapper,
  SvgBox,
  Content,
} from "../components/Styles.js";
import { Link } from "react-router-dom";
import "../assets/red-planet.jpg";
import "../App.css";
import "../styles/Navbar.css";

function Navbar(props) {
  const { isOpen, handleChange } = props;

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-80vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
  return (
    <div className="main">
      <Header>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          onClick={() => handleChange(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
        </SvgBox>
      </Header>

      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <LinkWrapper>
          <Link
            to="/menu"
            variants={linkVariants}
            onClick={() => handleChange(!isOpen)}
          >
            <div className="sign sign-green">
              <p>MENU</p>
              <br />
            </div>
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link
            to="/"
            variants={linkVariants}
            onClick={() => handleChange(!isOpen)}
          >
            <div className="sign">
              <p className="red-neon">Home</p>
            </div>
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link
            to="/restaurant"
            variants={linkVariants}
            onClick={() => handleChange(!isOpen)}
          >
            <div className="sign-yellow">
              <p>EAT TASTY MEALS AT</p>
              <br />
              <p>www.mars-around.com</p>
            </div>
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link
            to="/mars-game"
            variants={linkVariants}
            onClick={() => handleChange(!isOpen)}
          >
            <div className="sign-blue">
              <p>KILL EARTH GAME</p>
              <br />
              <p>www.mars-games.com</p>
            </div>
          </Link>
          </LinkWrapper>
          <LinkWrapper>
          <Link
            to="/GameClicker"
            variants={linkVariants}
            onClick={() => handleChange(!isOpen)}
          >
            <div className="sign-yellow">
              <p>EARN MONEY AT</p>
              <br/>
              <p>www.farmer.com</p>
            </div>
          </Link>
          </LinkWrapper>
        <LinkWrapper>
          <Link
            to="/calculator"
            variants={linkVariants}
            onClick={() => handleChange(!isOpen)}
          >
            <div className="sign-blue">
              <p>CALCULATOR</p>
              <br />
              <p></p>
            </div>
          </Link>
        </LinkWrapper>
      </Nav>
    </div>
  );
}

export default Navbar;
