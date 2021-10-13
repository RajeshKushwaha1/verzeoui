import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import styled from "styled-components";


const Wrapper = styled.div`
  padding: 3rem 0rem 0rem 1.8rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 86vh;
  background-color: rgb(234, 234, 234);
`;




const App = () => {
  const data = [0,1,2,3]
  return (
    <>
      <Navbar />
      <Wrapper>
        {data.map((i,id)=>{
          return(
            <div key={id}>
               <Card/> 
            </div>
          )
        })}
      </Wrapper>
    </>
  );
};

export default App;

