import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Create from "./screens/Create";
import Home from "./screens/Home";
import Notes from "./screens/Notes";

function App() {
  const [notes, setNotes] = useState([])
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/notes'>
        <Notes setNotes={setNotes} notes={notes}/>
        </Route>
        <Route path='/create'>
        <Create setNotes={setNotes}/>
        </Route>
      </Switch>
      
     
      
    </div>
  );
}

export default App;
