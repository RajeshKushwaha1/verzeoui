import React from 'react';
import TopsectionCard from './Topsection';
import ButtomSection from './ButtomSection';
import styled from 'styled-components';

const HeadingTop = styled.h1`
  margin-top: 3rem;
  margin-left: 11rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family:Poppins;
`;

const Wrapper = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-top: 1rem;
`;
const MainWrapper = styled.div`
    width: 100%;
    height: 35rem;
    margin-top: 1rem;
    background-color:#F9FBFC;
`;

const SalesHeading = styled.h2`
   position: absolute;
   margin-top: 1rem;
   margin-left: 11rem;
   font-size: 1.1rem;
   font-family: Poppins;
   font-weight: bold;
   letter-spacing: 0px;
   color: #000000;
   opacity: 1;
`;

const Data1 = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-space-evenly ;
`;

const Apps = () => {
    const data = ['Total lead generated', 'Total lead distributed', 'Remaining leads'];
    const data1 = [
        {
            id: 1,
            title: 'Team Tamator(765)',
            color: "#6CE1B0",

        },

        {
            id: 2,
            title: "Team Anda(9876)",
            color: "#719DFF",
        },

        {
            id: 3,
            title: "Team Aalo(765)",
            color: "#FFD952"
        },

    ];

    return (
        <>
            <HeadingTop>Lead live update</HeadingTop>
            <Wrapper>
                {data.map((el, index) => {
                    return (
                        <>
                            <div>
                                <TopsectionCard  key={index} data={el} />
                            </div>

                        </>
                    )
                })}
            </Wrapper>
            <MainWrapper>
                <SalesHeading>Sales team live update</SalesHeading>
                <Data1>
                    {data1.map((el, index) => {
                        return (
                            <>
                                <div>
                                    <ButtomSection key={index} data1={el.title} color={el.color} />

                                </div>
                            </>
                        )
                    })}

                </Data1>
            </MainWrapper>
        </>
    )
}

export default Apps;