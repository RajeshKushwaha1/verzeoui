import React from 'react';
import styled from 'styled-components';

const Popupdiv = styled.div`
   /* border: 1px solid red; */
`;

const Heading = styled.h1`
   font-size: 0.8rem;
   font-family: normal normal medium 14px/20px Poppins; ;
   font-weight: bold;
   color: #242D4C;
`;

const Paragraph = styled.p`
  font-size: 0.75rem;
  color: #9D9DAF;
  letter-spacing: 0px;
  font: normal normal medium 12px/15px Poppins;
`;


const QuesAns = ({ question, answer}) => {
    return (
        <>
             <Popupdiv>
                    <Heading>{question}</Heading>
                    <Paragraph>{answer}</Paragraph>
             </Popupdiv>
        </>
    )
}

export default QuesAns;
