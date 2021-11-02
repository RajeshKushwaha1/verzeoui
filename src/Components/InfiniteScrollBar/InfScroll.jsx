import React, { useState, useEffect } from "react";

export default function Test() {

  // TODO Get data from API's
  const [listItems, setListItems] = useState(
    Array.from(Array(100).keys(), (n) => n + 1)
  );
  const [isFetching, setIsFetching] = useState(true);


  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Get data from api call
  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(20).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 1000);
  }


  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }




  return (
    <>
    {isFetching && "Fetching more list items..."}
      <ul className="list">
        
        {listItems.map((listItem) => (
          <li className="listitem"> List Item {listItem} </li>
        ))}
      </ul>
    </>
  );
}

