import React, { useState } from 'react';
import TopSection from './TopSection';
import QueAns from './QueAns';
import styled from 'styled-components';



const MainDiv = styled.div`
margin: 0px;
padding: 0px;
width: 100% ;
height: 100%;
`; 

const QueAnsDiv = styled.div`
  width: auto;
  margin: 38px  0px  0px 39.5px;
`;

const Update = styled.button`
   width: 89px;
   height: 35px;
   border-radius: 4px;
   border: none;
   outline: none;
   font-size: 14px;
   font-weight: bold;
   font-family: Poppins;
   color: white;
   margin-left: 18rem;
   background-color: blue;
`;

const App = () => {

    const [data, setData] = useState( [
        {
            id:1,
            question: "First name*",
            answer: "Short answer Short answer Short answer Short answerShort answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            id:2,
            question: "First name*",
            answer: "Short answer Short answer Short answer Short answerShort answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            id:3,
            question: "First name*",
            answer: "Short answer Short answer Short answer Short answerShort answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            id:4,
            question: "First name*",
            answer: "Short answer Short answer Short answer Short answerShort answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            id:5,
            question: "First name*",
            answer: "Short answer Short answer Short answer Short answerShort answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            id:6,
            question: "First name*",
            answer: "Short answer Short answer Short answer Short answerShort answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
    ])

    const HandleSubmit = (e) => {
    //    console.log("updated:", e.currentTarget.textContent);
       console.log(data);
    }


    return (
        <>
            <MainDiv>
                <TopSection/>
            <QueAnsDiv >
            {data.map((el,index) => {
                    return (
                        <>
                           <QueAns key = {index} Id={el.id} question={el.question} answer={el.answer} HandleSubmit={HandleSubmit} />
                        </>
                    )
                })}
                </QueAnsDiv>
                <Update onClick={HandleSubmit}>Update</Update>
            </MainDiv>
        </>
    )
}

export default App;
