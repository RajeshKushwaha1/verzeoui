import React from 'react';
import TopsectionCard from './Topsection';
import ButtomSection from './ButtomSection';
import styled from 'styled-components';
import "../Dasboard/css/index.css";

const MainTopDiv = styled.div`
 
`;


const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   row-gap: 1rem;
   margin-top: 15px;
`;


const HeadingTop = styled.h1`
  margin: 43px 0px 0px 43px;
  font-size: 25px;
  font-weight: bold;
  font: normal normal 600 25px/38px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const MainWrapper = styled.div`
    
    width: 100%;
    height: 34.7rem;
    margin-top: 20.85px;
    background-color:#F9FBFC;
    border: 1px solid #F9FBFC;
  
`;

const SalesHeading = styled.div`
   margin: 16px 0px 0px 32px;
   border: 1px solid #F9FBFC;
`;

const Headingh3 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    font-family:  Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
`;

const Data1 = styled.div`
     margin-top: 9.21px;
     margin-left: -9.41px;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     row-gap: 1rem;
`;

const Apps = () => {
    const data = [
        {   
            id: 1,
            title:"Total lead generated",
            Number:"8765",
        },
        {
            id:2,
            title:"Total lead distributed",
            Number:"8765",
        },
        {
            id:3,
            title:"Remaining leads",
            Number:"8765",
        }
    ];
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
            <MainTopDiv>
                <HeadingTop>Lead live update</HeadingTop>
                <Wrapper>
                    {data.map((el , index) => {
                        return (
                            <>
                                <div>
                                    <TopsectionCard key = {index} title={el.title} number={el.Number}/>
                                </div>

                            </>
                        )
                    })}
                </Wrapper>
            </MainTopDiv>

            <MainWrapper>
                <SalesHeading><Headingh3>Sales team live update</Headingh3></SalesHeading>
                <Data1>
                    {data1.map((el , index) => {
                        return (
                            <>
                                <div >
                                    <ButtomSection key = {index} data1={el.title} color={el.color} />
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