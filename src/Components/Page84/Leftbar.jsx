import React, { useState } from "react";
import styled from "styled-components";
import crossToast from "./image/crossToast.svg";
import circleSuccessfull from "./image/circleSuccessfull.svg";

const Leftbardiv = styled.div`
  margin-left: 31px;
  margin-top: 161px;
  width: 16.5rem;
  height: 15.87rem;
  border-radius: 4px;
  border: 1px solid white;
  box-shadow: 0px 3px 8px #00000029;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 17.5px;
  font-size: 30px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #17498c;
  opacity: 1;
`;

const Hrline = styled.hr`
  width: 90%;
  height: 0.3rem;
  margin-left: 1rem;
  margin-top: 15px;
  color: grey;
`;

const Activediv = styled.div`
  display: flex;
  margin-left: 11px;
  margin-top: 27.5px;
  width: 244px;
  height: 20px;
`;

const ActivedivHeading = styled.h3`
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #0ca107;
  opacity: 1;
  width: 100px;
  height: 20px;
`;

const Button1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 33px;
  border-radius: 4px 0px 0px 4px;
  opacity: 1;
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #bcbcbc;
  background-color: #ffffff;
  outline: none;
  border: none;
  margin-top: 26px;
  margin-left: 11px;
  position: absolute;
  box-shadow: inset 0px 0px 6px #00000029;
`;

const Button2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  width: 122px;
  height: 33px;
  margin-top: 26px;
  margin-left: 130px;
  border-radius: 4px 4px 4px 4px;
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #bcbcbc;
  outline: none;
  border: none;
  background-color: #ffffff;
  box-shadow: inset 0px 0px 6px #00000029;
 
`;


const NumUpdRef = styled.div`
  display: flex;
  width: 243px;
  height: 35px;
  margin-left: 11px;
  margin-top: 19.44px;
`;

const Numberdiv = styled.div`
  display: flex;
  width: 62px;
  height: 35px;
  border: 1px solid #6a97cb;
  border-radius: 4px;
  opacity: 1;
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #303030;
  background-color: #f3f8ff;
  justify-content: center;
  align-items: center;

`;

const Update = styled.button`
  width: 89px;
  height: 35px;
  border-radius: 4px;
  opacity: 1;
  background-color: #17498c;
  outline: none;
  border: none;
  margin-left: 47px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
`;

const Refres = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 4px;
  opacity: 1;
  background-color: #17498c;
  border: none;
  outline: none;
  color: #fff;
  margin-left: 10px;
`;

const Toast = styled.div`
  width: 300px;
  height: 54px;
  box-shadow: 0px 2px 10px #00000026;
  border-radius: 4px;
  opacity: 1;
  margin-left: 31px;
  margin-top: 15rem;
  align-items: center;
  background-color: #3fbf3a;
  color: #ffffff;
  display: flex;
`;

const CircleSuccessfull = styled.img`
  width: 24px;
  height: 23px;
  margin-left: 16.81px;
`;

const Paragraf = styled.p`
  width: 200px;
  height: 18px;
  font-size: 14px;
  margin-left: 16.56px;
  margin-top: 12px;
`;

const CrossToast = styled.img`
  margin-left: 17px;
`;

const Leftbar = () => {
  // const [left, setLeft] = useState("-120px");
  let left = "-120px";
  let [val, setVal] = useState(1000);
  const [refres, setRefres] = useState(true);
  const [activated, setActivated] = useState("Deactivated");
  const [clicked, setClicked] = useState(true);
  const [color, setColor] = useState("red");
  const [activeBtn, setActiveBtn] = useState("first_btn");
  const [refresh, setRefresh] = useState("fas fa-redo");
  const [toast, setToast] = useState(false);
  const [crossToasts, setCrossToasts] = useState(true);

  const HandleRefres = (e) => {
    setRefres(!refres);
    refres ? setVal(0) : setVal(1000);
    setTimeout(() => {
      setRefresh("fas fa-redo fa-spin");
    }, 100);
    setTimeout(() => {
      setRefresh("fas fa-redo");
    }, 1000);
  };

  const HandlePopUp = () => {
    setToast(!toast);
  };

  const handleActivated = (e) => {
    setClicked(!clicked);
    console.log("clicked: ", clicked);
    if (clicked) {
      setActivated("Activated");
      setColor("green");
    } else {
      setActivated("Deactivated");
      setColor("red");
    }
    // !(e.target.value)?setActivated('Activated'):setActivated('Deactivated');
  };

  const HandleButtonColor = (val) => {
    // const {val}=e.target;
    setActiveBtn(val);
    console.log(activeBtn);
  };

  const HandleToast = (e) => {
    setToast(!toast)
  }

  const HandleCrossToast = (e) =>{
    setCrossToasts(false)
  }
   
  return (
    <>
      <Leftbardiv>
        <Heading>Instamojo</Heading>
        <Hrline></Hrline>
        <Activediv>
          <ActivedivHeading style={{ color: color }}>
            {activated}
          </ActivedivHeading>
          <label className="switch">
            <input type="checkbox" onClick={handleActivated} />
            <span className="slider round"></span>
          </label>
        </Activediv>
        <Button1
          onClick={() => HandleButtonColor("first_btn")}
          style={{
            background: `${activeBtn === "first_btn" ? "#17498C" : ""}`,
            color: `${activeBtn === "first_btn" ? "white" : ""}`,
            transition: " .1s  all ease",
          }}
        >
          Primary
        </Button1>
        <Button2
          onClick={() => HandleButtonColor("second_btn")}
          style={{
            background: `${activeBtn === "second_btn" ? "#17498C" : ""}`,
            color: `${activeBtn === "first_btn" ? "" : "white"}`,
            transition: " .1s  all ease",
          }}
        >
          Secondary
        </Button2>
        <NumUpdRef>
          <Numberdiv className="number">{val}</Numberdiv>
          <Update onClick={HandlePopUp} style={{ right: left }}>
            Update
          </Update>
          <Refres onClick={HandleRefres}>
            <i className={refresh}></i>
          </Refres>
        </NumUpdRef>
      </Leftbardiv>
      {
        toast && <Toast onClick={HandleToast} className="toastdiv" >
        <CircleSuccessfull src={circleSuccessfull} alt="circleSuccessfull" />
        <Paragraf>Your payment Gateway updated</Paragraf>
        <CrossToast src={crossToast} alt="crossToast" onClick={HandleCrossToast}/>
      </Toast>
      }
      
    </>
  );
};

export default Leftbar;
