import { motion } from "framer-motion";
import styled from "styled-components";
import "../assets/red-planet.jpg"


export const Header = styled.header`
  background: black;
  position: absolute;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
      position: absolute;
    top: 0;
    right: 0;
`;



export const Nav = styled(motion.nav)`
  background-color: #000;
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-bottom: 30px;
`;



export const LinkWrapper = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)`

`;
