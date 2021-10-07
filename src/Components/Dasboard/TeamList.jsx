import React,{useRef} from 'react';
import styled from 'styled-components';
import  '.././../index.css'


const TeamList = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Mv = styled.div`
    margin-left: 1rem;
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.7rem;
    font-size: 0.6rem;
    border-radius: 50%;
    color: white;
    background-color:  #57B8FF;
`;

const HeadingPara = styled.div`
     margin-left: 1rem;
     margin-top: 0.5rem;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
`;

const Headingh3 = styled.h3`
   font-size: 11px;
   font:  Poppins;
`;

const Paragraph = styled.p`
  font-size: 9px;
  color: #7E84A3;
  font: normal normal normal  Poppins;
`;

const Number = styled.div`
  /* position: relative;
  margin-left: 12rem;
  margin-top: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 10px;
  color: #7E84A3;
  border-radius: 4px;
  background-color: #E9E9EF;
`;


const TeamLists = ({ dpname, name, profession, number}) => {
   const bgRef = useRef(null);
   const  HandleClick = (e) => {
   bgRef.current.classList.add('teambg')
    setTimeout(() => {
      bgRef.current.classList.remove('teambg')
    }, 300);
    
   
  }
  
  return (
    <> 
    <TeamList onClick={HandleClick}  ref={bgRef} > 
        <Mv>{dpname}</Mv>
        <HeadingPara>
          <Headingh3>{name}</Headingh3>
          <Paragraph>{profession}</Paragraph>
        </HeadingPara>
        <Number>{number}</Number>
    </TeamList>
    </>
  )
}

export default TeamLists;
