import React, { useState} from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #242d4c;
  opacity: 1;
`;

const Paragraph = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #9d9daf;
  opacity: 1;
  border: none;
  outline: none;
`;

const QueAns = ({ Id, question, answer, HandleSubmit }) => {
  const [editedData, setEditedData] = useState("");
  

  const handleEdit = (e) => {
    console.log(e);
    console.log(e.currentTarget.textContent);
  };

  return (
    <div onSubmit={HandleSubmit}>
      <Heading>
        {Id}
        {"."} {question}
      </Heading>
      <Paragraph  contentEditable={true} onInput={handleEdit}>{answer}</Paragraph> 
    </div>
  );
};

export default QueAns;
