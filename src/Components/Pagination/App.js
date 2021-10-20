import React from "react";
import "../Pagination/index.css";
import PaginationCom from "./PaginationCom";
import styled from "styled-components";

const MainContainer = styled.div`
   padding: 1rem;
   margin: 0px;
   padding: 0px;
   width: 100%;
   height: 100%;
   text-align: center;
`;

const App = () => {

    return (
        <>
            <MainContainer>
                <PaginationCom />
            </MainContainer>
        </>
    );
};

export default App;
