import React, { useRef , useState} from 'react';
import styled from 'styled-components';
// import  '.././../index.css'


const TeamList = styled.div`
  display:flex;
`;

const Mv = styled.div`
    margin: 13px 10px 18px 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.7rem;
    font-size: 10px;
    border-radius: 50%;
    color: white;
    background-color:  #57B8FF;
    
`;

const HeadingPara = styled.div`
     width: 135px;
     margin: 13px 10px 10px 0px;
     height: 1.8rem;
     display: flex;
     flex-direction: column;
     align-items: flex-start;   
`;

const Headingh3 = styled.h3`
width: auto;
  font-size: 11px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0.08px;
  color: #131523;
  opacity: 1;
  
`;

const Paragraph = styled.p`
width: auto;
  margin-top: -10px;
  font-size: 9px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #7E84A3;
  opacity: 1;
  
`;

const Number = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 10px;
  border-radius: 4px;
  background-color: #E9E9EF;
  font-weight: bold;
  font-family:Poppins;
  letter-spacing: 0px;
  color: #7E84A3;
  opacity: 1;
  
`;


const TeamLists = ({ dpname, name, profession, number }) => {
  
  const bgRef = useRef(null);

  const [color , setColor] = useState("");
  const [fontcolor, setFontcolor] = useState("");

  const HandleClick = (e) => {

    setColor("#FFFFFF")
    setFontcolor("#57B8FF")
    bgRef.current.classList.add('teambg')

    setTimeout(() => {

      bgRef.current.classList.remove('teambg')
      setColor("");
      setFontcolor("")

    }, 300);
  }

  return (
    <>
      <TeamList onClick={HandleClick} ref={bgRef} >
        <Mv>{dpname}</Mv>
        <HeadingPara>
          <Headingh3>{name}</Headingh3>
          <Paragraph>{profession}</Paragraph>
        </HeadingPara>
        <Number  style = {{backgroundColor : color , color : fontcolor}}>{number}</Number>
      </TeamList>
    </>
  )
}

export default TeamLists;
