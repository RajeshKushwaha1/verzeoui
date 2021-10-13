import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';
import Axios from "axios";

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const details = async () => {

      let response = await Axios.get(`https://demoadmin.verzeo.com/api/form/get-single-form/614717ca86fe1740f4d6450e`);
      setData(response.data.questions);
    }

    details();
  }, []);


  return (
    <>
      <UserDetails data={data}/>
    </>
  )
}

export default App;
