import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
  width: 18rem;
  height: 4.5rem;
  box-shadow: 0px 1px 4px #15223214;
  border-radius: 6px;
  opacity: 1;
`;

const Heading = styled.h1`
  font-weight:bold;
  letter-spacing: 0.1px;
  color: #7E84A3;
  font: normal normal 600 16px/22px Open Sans;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:  4rem;
  height: 3rem;
  border-radius: 1.5rem;
  background: #EAF4FE 0% 0% no-repeat padding-box;
`;

const TopsectionCard = ({ data }) => {

  return (
    <>
      <Wrapper>
        <Heading>{data}</Heading>
        <Number>
          <h6>8765</h6>
        </Number>
      </Wrapper>


    </>
  )
}

export default TopsectionCard;
