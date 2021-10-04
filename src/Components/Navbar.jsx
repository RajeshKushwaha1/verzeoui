import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 14vh;
  background-color: rgb(126, 132, 163);
`;

const Heading = styled.h1`
  position: absolute;
  width: 6.8rem;
  height: 2rem;
  margin-left: 2rem;
  margin-top: 3rem;
  font-size: 23px;
  color: #ffffff;
`;

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Heading>My forms</Heading>
      </Wrapper>
    </>
  );
};

export default Navbar;

