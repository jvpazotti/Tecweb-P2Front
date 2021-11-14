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
import Favorites from "./components/Favorites";





function App() {


  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
    </Router>



  );
}

export default App;

//https://dummiofront.herokuapp.com/ | https://git.heroku.com/dummiofront.git