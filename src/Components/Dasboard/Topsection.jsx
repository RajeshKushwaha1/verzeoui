import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 18rem;
  height: 4.5rem;
  box-shadow: 0px 1px 4px #15223214;
  border-radius: 6px;
  opacity: 1;
  margin-left: 32.3px;
  
`;

const Heading = styled.h6`
 margin: 26px 25.15px 111.34px 14.23px;
 width: 160px;
 font-size: 16px;
 font-weight: 600;
 letter-spacing: 0.1px;
 color: #7E84A3;

`;

const Number = styled.div`
  width:  4rem;
  height: 3rem;
  margin: 11px 14.15px 20.88px 0px;
  border-radius: 24px;
  font-weight: bold;
  background: #EAF4FE 0% 0% no-repeat padding-box;
`;

const Count = styled.p`
   margin: 12.91px 14.09px 17.47px 13.53px;
`;
const TopsectionCard = ({title,number}) => {

  return (
    <>
      <Wrapper>
        <Heading>{title}</Heading>
        <Number>
          <Count>{number}</Count>
        </Number>
      </Wrapper>


    </>
  )
}

export default TopsectionCard;
