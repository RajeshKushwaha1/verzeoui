import React from "react";
import styled from "styled-components";

const Wrapper = styled.div;

const Cards = styled.div`
  margin-left: 3rem;
  margin-top: 3rem;
  width: 158px;
  height: 180px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
`;

const Paragraf = styled.div`
  width: 158px;
  color: #242d4c;
  margin-top: 0.5rem;
  margin-left: 3rem;
  opacity: 1;
  font-family: normal normal medium 14px/21px Poppins;
`;

const Card = () => {
  return (
    <>
     <wrapper>
        <Cards></Cards>
        <Paragraf>
           <p>Untitled Form</p>
        </Paragraf>
     </wrapper>
    </>
  );
};

export default Card;

