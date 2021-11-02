import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
`;

const CardDiv = styled.div`
  padding: 3rem 0rem 0rem 1.8rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: auto;
  background-color: rgb(234, 234, 234);
`;

const Fetching = styled.div`
display: flex;
color: white;
border: 1px solid burlywood;
background-color: rgb(0, 26, 255);
justify-content: center;
}
`;

const App = () => {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
    81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
  ]);

  const [renderArr, setRenderArr] = useState([]); 
  const [isFetching, setIsFetching] = useState(false);

  let initialDataSize = 19;

  useEffect(() => {
    setRenderArr(data.splice(0, initialDataSize));
  }, [data, initialDataSize]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll); //for mobile
    window.addEventListener("scroll", handleScroll); //for desktop
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  function fetchMoreListItems() {
    setTimeout(() => {
      if (data && data.length >= 0) {
        if (data.length > initialDataSize) {
          setRenderArr([...renderArr, ...data.splice(0, initialDataSize)]);
          setIsFetching(false);
        } else {
          setRenderArr([...renderArr, ...data.splice(0, data.length)]);
          window.removeEventListener("scroll", handleScroll);
          setIsFetching(false);
        }
      }
    }, 1000);
  }

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      if (data && data.length > 0) {
        setIsFetching(true);
      } else {
        setIsFetching(false);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  }

  return (
    <>
      <MainContainer>
        <Navbar />
        <CardDiv>
          {renderArr.length > 0 &&
            renderArr.map((el, index) => {
              return (
                <>
                  <Card id={index} el={el}/>
                </>
              );
            })}
        </CardDiv>
        <Fetching>
           {isFetching && <i className="fa fa-spinner fa-spin  fa-2x"></i> }
        </Fetching>
      </MainContainer>
    </>
  );
};

export default App;
