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


function App(props) {
  const [state, dispatch] = useReducer(appReducer, {
    person: []
  })

  let context = useContext(Context)

  useEffect(() => {
    axios.get(`https://birthday-b0c8d-default-rtdb.asia-southeast1.firebasedatabase.app/person.json`)
      .then(response => jasonHandle( response.data))
      .catch(err => console.log(err))
    
  }, [])



  let jasonHandle = (data) => {
    let person = Object.entries(data).map(([key, value]) => { return { ...value, key } })
     dispatch({type : 'into' , payload:{person}})
     
  }
 
  return (
    <Context.Provider value={
      {
        dispatch,
        person: state.person,
        state
        
      }
    }>

      <div className="App borderList mt-5">
        <FormAdd />
        <ListProfile />
   
      </div>
    </Context.Provider>
  );

}

export default App;
