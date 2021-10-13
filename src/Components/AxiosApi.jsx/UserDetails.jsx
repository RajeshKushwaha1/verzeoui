import React from 'react';
import styled from 'styled-components';

const TableMain = styled.table`
  margin: 0px;
  padding:0px;
  width:100%;
  background-color: #00000029;
`;

const TableHeader = styled.thead`
  width: 100wh;
  
`;

const TableRow = styled.tr`
  width: 100wh;
  
`;

const TableHeading = styled.th`
   padding: 1rem;
`;

const Select = styled.select`
   border-radius: 4px;
   margin-left: 0.5rem;
   color: black;
   background-color: #00000029;
`;

const Option = styled.option`
  font-family: Poppins;
  font-weight: bold;
  border-radius: 4px;
`;

const UserDetails = ({ data }) => {
    console.log("data in child: ", data);
    return (
        <div>
            <TableMain>
                <TableHeader>
                    <TableRow>
                        {data.map((el) => (
                            <TableHeading key={el.srno} >{el.question} 
                              <Select>
                                 { el.options.map((option,index)=>(
                                    <Option value={option} key={index}>{option}</Option>
                                  ))}
                              </Select>
                            </TableHeading>
                        ))}
                    </TableRow>
                </TableHeader>
            </TableMain>
        </div>
    )
}

export default UserDetails
