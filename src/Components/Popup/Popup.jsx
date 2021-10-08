import React from 'react';
import QuesAns from './QuesAns';
import styled from 'styled-components';

const Popupbox = styled.div`
   padding: 1rem;
   width: 23.8rem;
   height: 16.2rem;
   margin-top: 12rem;
   margin-left: 35rem;
   box-shadow: 0px 1px 4px #00000029;
   border-radius: 4px;
   overflow-y: scroll;
`;


const Popup = () => {

    const data = [
        {
            question: "Full name*",
            answer: "Short answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            question: "Full name*",
            answer: "Short answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            question: "Full name*",
            answer: "Short answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            question: "Full name*",
            answer: "Short answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            question: "Full name*",
            answer: "Short answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
        {
            question: "Full name*",
            answer: "Short answer Short answer Short answer Short answer Short answer Short answer Short answer",
        },
    ]

    return (
        <>
            <Popupbox>
                {data.map((el, index) => {
                    return (
                        <>
                            <div key={index}>
                                <QuesAns question={el.question} answer={el.answer} />
                            </div>
                        </>
                    )
                })}
            </Popupbox>
        </>
    )
}

export default Popup;
