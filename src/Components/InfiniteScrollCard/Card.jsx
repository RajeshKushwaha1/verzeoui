import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 1.2rem;
  width: 158px;
  height: auto;
  border-radius: 4px;
`;

const Cards = styled.div`
  width: 158px;
  height: 180px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000029;
  border-radius: 4px;
  opacity: 1;
`;

const Paragraf = styled.div`
  width: 158px;
  font-size: 14px;
  margin-top: 0.5rem;
  opacity: 1;
  font: normal normal medium 14px/21px Poppins;
  letter-spacing: 0px;
  font-weight: 600;
  color: #242d4c;
`;

const Card = (props) => {
  return (
    <>
      <Wrapper>
        <Cards>{props.el}</Cards>
        <Paragraf>
          <p>Untitled Form</p>
        </Paragraf>
      </Wrapper>
    </>
  );
};


export default Card;