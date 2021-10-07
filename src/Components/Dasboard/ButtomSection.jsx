import React from 'react';
import TeamLists from './TeamList';
import styled from 'styled-components';
import  '.././../index.css';


const Wrapper = styled.div`
  margin-top: 4rem;
  margin-left: 11rem;
  width: 14.8rem;
  height: 26rem;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #15223215;
  opacity: 1;
`;

const Teamheading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.8rem;
    height: 3rem;
`;

const Heading = styled.h2`
    font-size: 0.8rem;
`;

const TeamWrapper = styled.div`
    height: 22rem;
    margin-top: 1rem;
    overflow-y: scroll;
    box-sizing: border-box;
`;

const data2 = [
    {
        dpname: "MV",
        name: "Mitchell Williamson",
        profession: "Assistance manager",
        Number: "36",
    },
    {
        dpname: "SC",
        name: "Sam Conner",
        profession: "Deputy general manager",
        Number: "36",
    },

    {
        dpname: "HC",
        name: "Christina Castro",
        profession: "Assistant general manager",
        Number: "36",
    },
    {
        dpname: "CC",
        name: "Harriett Clark",
        profession: "AGM",
        Number: "36",
    },
    {
        dpname: "MV",
        name: "Mitchell Williamson",
        profession: "Assistance manager",
        Number: "36",
    },
    {
        dpname: "HC",
        name: "Christina Castro",
        profession: "Assistant general manager",
        Number: "36",
    },
    {
        dpname: "CC",
        name: "Harriett Clark",
        profession: "AGM",
        Number: "36",
    },
    {
        dpname: "MV",
        name: "Mitchell Williamson",
        profession: "Assistance manager",
        Number: "36",
    }
];

const ButtomSection = ({ data1, color }) => {
  
    return (
    <>
       <Wrapper>
            <Teamheading style={{ background: color }}>
                <Heading>{data1}</Heading>
            </Teamheading>
            <TeamWrapper className="scroll">
            {data2.map((el, index) => {
                return (
                    <>
                        <div>
                            <TeamLists key={index} dpname={el.dpname} name={el.name} profession={el.profession} number={el.Number} />
                        </div>
                    </>
                )
            })}
            </TeamWrapper>
        </Wrapper>  
     </>   
    )
}


export default ButtomSection;
