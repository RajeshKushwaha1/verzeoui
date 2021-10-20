
import React, { useState, useEffect } from "react";

const renderData = (data) => {
  return (
    <>
      <div className="titlediv">
        <ul className="titleul">
          {data &&
            data.map((todo, index) => {
              return (
                <li key={index} className="title">
                  {todo.id} {"."} {todo.title}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

const PaginationCom = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const pages = [];

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const HandleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage; //30  3*10 = 30
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumber = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <>
          <li
            key={number}
            id={number}
            onClick={HandleClick}
            className={currentPage === number ? "active" : null}
          >
            {number}
          </li>
        </>
      );
    } else {
      return null;
    }
  });


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      // .then(json => console.log(json))
      .then((json) => setData(json));

  }, []);

  const HandleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const HandlePreBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={HandleNextBtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    //pages.length > maxPageNumberLimit
    pageDecrementBtn = <li onClick={HandlePreBtn}> &hellip; </li>;
  }

  const HandLoadMore = () => {
    setItemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      <div className="headingdiv">
        <h1 className="heading">Pagination</h1>
      </div>
      {/* {renderData(data)} */}
      {renderData(currentItems)}
      <ul className="pagenumber">
        <li>
          <button
            onClick={HandlePreBtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumber}
        {pageIncrementBtn}
        <li>
          <button
            onClick={HandleNextBtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>

      <button className="loasmore" onClick={HandLoadMore}>
        Load More
      </button>
    </>
  );
};

export default PaginationCom;
