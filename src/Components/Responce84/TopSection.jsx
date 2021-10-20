import React from "react";
import styled from "styled-components";

const TopSectionDiv = styled.div`
  margin: 0px;
  padding: 0px;
  width: auto;
  height: auto;
  margin-top: 26px;
  margin-left: 37px;
`;

const Heading1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #9d9daf;
  text-transform: capitalize;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #000000;
  text-transform: capitalize;
`;

const SpanAngle = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #000000;
`;

const Untitled = styled.h1`
  margin-top: 37.75px;
  font-size: 22px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #202124;
  opacity: 1;
`;

const Unknown1 = styled.h3`
  font-size: 15px;
  font-weight: 500;
  /* font-family: Poppins; */
  letter-spacing: 0px;
  color: #202124;
  opacity: 1;
  margin-top: 4;
  margin-bottom: 5px;

`;

const Unknown2 = styled.h1`
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #202124;
  opacity: 1;
`;

const SpanUnknow = styled.span`
  margin-left: 50px;
`;

const TopSection = () => {
  return (
    <>
      <TopSectionDiv>
        <Heading1>
          Responses<SpanAngle> {'>'} </SpanAngle> <Span> Untitled</Span>
        </Heading1>
        <Untitled>Untitled</Untitled>
        <Unknown1>Unknown</Unknown1>
        <Unknown2>Unknown <SpanUnknow>Unknown</SpanUnknow></Unknown2>
      </TopSectionDiv>
    </>
  );
};

export default TopSection;
