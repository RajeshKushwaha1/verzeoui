import React from "react";
import Leftbar from "./Leftbar";
import Sidebar from "./Rightbar";
import styled from "styled-components";

const MainContainer = styled.div`
   width: 100%;
   height: 100%;
   
`;

const App = () => {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <Leftbar />
      </MainContainer>
    </>
  );
};

export default App;
