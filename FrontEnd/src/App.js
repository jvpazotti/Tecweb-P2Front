import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from "axios";
import Note from "./components/Note";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import "./App.css";
import Home from "./components/Home";
import Button from "./components/Button";





function App() {


  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>



  );
}

export default App;