import React, { useState } from "react";
import styled from "styled-components";
import Cross from "./image/cross.svg";
import "./css/index.css";

const AddGateway = styled.button`
  margin-top: -70px;
  margin-right:   73px;
  border: 2px solid #1d56a2;
  border-radius: 8px;
  opacity: 1;
  width: 131px;
  height: 38px;
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #17498c;
  outline: none;
  border: none;
  float: right;
  ;
`;

const HeadingCross = styled.div`
  display: flex;
  height: 27px;
  margin-top: 20px;
`;
const Heading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0px;
  color: #0c2342;
  opacity: 1;
  margin-left: 16px;
`;

const Img = styled.img`
  width: 10px;
  height: 10px;
  margin-top: 10px;
  margin-left: 140px;
  margin-right: 10px;
`;

const Headingh6 = styled.h6`
  margin-left: 33px;
  margin-top: 35px;
`;

const Input = styled.input`
  width: 274px;
  height: 39px;
  margin-left: 33px;
  margin-top: 9px;
  border-radius: 4px;
  opacity: 1;
`;

const GatwayStatus = styled.h6`
  margin-top: 24px;
  margin-left: 33px;
  font-size: 13px;
  font: normal normal medium 13px/18px Roboto;
  letter-spacing: 0px;
  color: #1e1e1e;
  opacity: 1;
`;

const ActivateDeactivate = styled.div`
  display: flex;
  height: 39px;
`;

const Activate = styled.div`
  display: flex;
  width: 122px;
  height: 39px;
  border-radius: 4px;
  opacity: 1;
  margin-left: 33px;
  background-color: #fafafa;
`;

const InputActivateYes = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 11px;
  margin-left: 8px;
`;

const LabelActivateYes = styled.h6`
  width: 23px;
  height: 19px;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #17498c;
  opacity: 1;
  align-items: center;
  margin: 11px 11px 8px 18px;
`;

const Deactivate = styled.div`
  display: flex;
  width: 122px;
  height: 39px;
  margin-left: 30px;
  border-radius: 4px;
  opacity: 1;
  background-color: #fafafa;
`;

const InputDeactivateNo = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 11px;
  margin-left: 8px;
`;

const LabelDeactivateNo = styled.h6`
  width: 23px;
  height: 19px;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #17498c;
  opacity: 1;
  align-items: center;
  margin: 11px 11px 8px 10px;
`;
const GatwayCharges = styled.h6`
  margin-left: 33px;
  margin-top: 24px;
  font-size: 13px;
  font: normal normal medium 13px/18px Roboto;
  letter-spacing: 0px;
  color: #1e1e1e;
  opacity: 1;
`;

const YesNo = styled.div`
  display: flex;
  height: 39px;
  margin-top: 9px;
`;

const Yes = styled.div`
  display: flex;
  width: 74px;
  height: 39px;
  margin-left: 33px;
  border-radius: 4px;
  background-color: #fafafa;
`;

const InputYes = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 11px;
  margin-left: 8px;
`;

const LabelYes = styled.h6`
  width: 23px;
  height: 19px;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #17498c;
  opacity: 1;
  align-items: center;
  margin: 11px 11px 8px 10px;
`;

const No = styled.div`
  display: flex;
  width: 74px;
  height: 39px;
  margin-left: 20px;
  border-radius: 4px;
  background-color: #fafafa;
`;

const InputNo = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 11px;
  margin-left: 8px;
`;

const LabelNo = styled.h6`
  width: 23px;
  height: 19px;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #17498c;
  opacity: 1;
  align-items: center;
  align-items: center;
  margin: 11px 11px 10px 12px;
`;

const PrimaryGatway = styled.h6`
  font-size: 13px;
  margin-top: 23px;
  margin-left: 33px;
  font: normal normal medium 13px/18px Roboto;
  letter-spacing: 0px;
  color: #1e1e1e;
  opacity: 1;
`;

const PrimaryYesNo = styled.div`
  display: flex;
  height: 39px;
  margin-top: 9px;
`;

const PrimaryYes = styled.div`
  display: flex;
  width: 74px;
  height: 39px;
  margin-left: 33px;
  border-radius: 4px;
  background-color: #fafafa;
`;

const PrimaryInputRadioYes = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 11px;
  margin-left: 5px;
`;

const PrimaryLabelYes = styled.h6`
  width: 23px;
  height: 19px;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #17498c;
  opacity: 1;
  margin: 11px 11px 10px 10px;
`;

const PrimaryNo = styled.div`
  display: flex;
  width: 74px;
  height: 39px;
  margin-left: 20px;
  border-radius: 4px;
  background-color: #fafafa;
`;

const PrimaryInputRadioNO = styled.input`
  width: 17px;
  height: 17px;
  margin-top: 11px;
  margin-left: 7px;
`;

const PrimaryLabelNO = styled.h6`
  width: 23px;
  height: 19px;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #17498c;
  opacity: 1;
  text-align: center;
  margin: 11px 11px 10px 10px;
`;

const AddGatewayButton = styled.button`
  width: 274px;
  height: 35px;
  margin-top: 24px;
  margin-left: 33px;
  border-radius: 4px;
  font-size: 18px;
  font: normal normal normal 18px/24px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  outline: none;
  border: none;
  background-color: #0c2342;
`;

const Sidebar = () => {

  const [left, setLeft] = useState("-21rem");

  const HandleCross = () => {
    setLeft("-21rem");
  };
  
  const handleOpen = (e) => {
    e.preventDefault();
    setLeft("0rem");
  };

  const SubmmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
       
        <div className="MainDiv" style={{ right: left }}>
          <form onSubmit={SubmmitForm}>
            <HeadingCross>
              <Heading>Add Gateway</Heading>
              <Img src={Cross} alt="cross" onClick={HandleCross} />
            </HeadingCross>
            <Headingh6>Enter Gateway Name</Headingh6>
            <Input
              type="text"
              placeholder="Name"
              className="inputs"
              required
            />
            <GatwayStatus>Gateway Status</GatwayStatus>
            <ActivateDeactivate>
              <Activate>
                <InputActivateYes
                  type="radio"
                  name="fav_language"
  
                />
                  <LabelActivateYes>Activated</LabelActivateYes>
              </Activate>
              <Deactivate>
                <InputDeactivateNo
                  type="radio"
                  name="fav_language"
  
                />
                  <LabelDeactivateNo>Deactivated</LabelDeactivateNo>
              </Deactivate>
            </ActivateDeactivate>
            <GatwayCharges>Gateway Charges Applicable</GatwayCharges>
            <YesNo>
              <Yes>
                <InputYes 
                type="radio" 
                name="Charges" 
 
                /> {" "}
                <LabelYes>Yes</LabelYes>
              </Yes>
              <No>
                <InputNo 
                type="radio" 
                name="Charges" 
                value="HTML" 
                /> {" "}
                <LabelNo             
                >
                  No
                </LabelNo>
              </No>
            </YesNo>
            <PrimaryGatway>Primary Gateway</PrimaryGatway>
            <PrimaryYesNo>
              <PrimaryYes>
                 {" "}
                <PrimaryInputRadioYes
                  type="radio"
                  name="Primary_gateway"
                
                />
                  <PrimaryLabelYes>Yes</PrimaryLabelYes>
              </PrimaryYes>
              <PrimaryNo>
                <PrimaryInputRadioNO
                  type="radio"
                  name="Primary_gateway"
                  
                />
                  <PrimaryLabelNO>No </PrimaryLabelNO>
              </PrimaryNo>
            </PrimaryYesNo>
            <AddGatewayButton>Add Gateway</AddGatewayButton>
          </form>
        </div>
      

      <AddGateway onClick={handleOpen}>Add Gateway</AddGateway>
    </>
  );
};

export default Sidebar;
