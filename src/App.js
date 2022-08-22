import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useReducer, useEffect, useContext } from 'react';

// import Commponent
import Profile from './Commponents/Profile';
import FormAdd from './Commponents/FormAdd';
// 
import { Routes, Route } from "react-router-dom";

import Context from './Context/Context';
import appReducer from './appReduser/appReduser'
import axios from 'axios';
import ListProfile from './Commponents/ListProfile';
import Header from './Commponents/Header';
import Navbar from './Commponents/Navbar';
import Content from './Commponents/Content';


function App(props) {
  const [state, dispatch] = useReducer(appReducer, {
    person: []
  })

  let context = useContext(Context)


  useEffect(() => {
    axios.get(`https://birthday-b0c8d-default-rtdb.asia-southeast1.firebasedatabase.app/person.json`)
      .then(response => jasonHandle(response.data))
      .catch(err => console.log(err))

  }, []);


  let jasonHandle = (data) => {
    let person = Object.entries(data).map(([key, value]) => { return { ...value, key } })
    dispatch({ type: 'into', payload: { person } })

  }

  return (
    <Context.Provider value={
      {
        dispatch,
        person: state.person,
        state

      }
    }>
      <Navbar />
      <Header />
      
        <Content />
      
      
      
    </Context.Provider>

  );

}

export default App;
