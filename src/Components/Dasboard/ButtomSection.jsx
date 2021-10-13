import React from 'react';
import TeamLists from './TeamList';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 41.41px;
  width: 14.8rem;
  height: 26.4rem;
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
    margin-top: .5rem;
    font-size: 14px;
    text-align: left;
    font-weight: bold;
    font-family:  Poppins;
    letter-spacing: 0px;
    color: #2F1D1D;
    text-transform: capitalize;
    opacity: 1;
    
`;

const TeamWrapper = styled.div`
    height: 22rem;
    margin-top: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
`;

const data2 = [
    {   id:1,
        dpname: "MV",
        name: "Mitchell Williamson",
        profession: "Assistance manager",
        Number: "36",
    },
    {   id:2,
        dpname: "SC",
        name: "Sam Conner",
        profession: "Deputy general manager",
        Number: "36",
    },

    {   id:3,
        dpname: "HC",
        name: "Christina Castro",
        profession: "Assistant general manager",
        Number: "36",
    },
    {   id:4,
        dpname: "CC",
        name: "Harriett Clark",
        profession: "AGM",
        Number: "36",
    },
    {   id:5,
        dpname: "MV",
        name: "Mitchell Williamson",
        profession: "Assistance manager",
        Number: "36",
    },
    {   id:6,
        dpname: "HC",
        name: "Christina Castro",
        profession: "Assistant general manager",
        Number: "36",
    },
    {   id:7,
        dpname: "CC",
        name: "Harriett Clark",
        profession: "AGM",
        Number: "36",
    },
    {   id:8,
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
            {data2.map((el , index) => {
                return (
                    <>
                        <div >
                            <TeamLists  key = {index} dpname={el.dpname} name={el.name} profession={el.profession} number={el.Number} />
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
