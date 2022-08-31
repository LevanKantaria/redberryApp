import "./App.css";
import Landing from "./components/Landing/Landing";
import { Route, Link, Redirect } from "react-router-dom";
import Add from "./components/pages/Add/Add";
import PageThree from "./components/pages/Add/pageThree";
import List from "./components/pages/Add/List/List";
import { useState, useLayoutEffect, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "./store";
import Details from "./components/pages/Details/Details";

function App() {

  const dispatch = useDispatch();
  const [size, setSize] = useState([0, 0]);
  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
  }
  useWindowSize();
  useEffect(()=>{
    dispatch(filterActions.windowWidth(size[0]));
   

  },[size])


  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route>
      <Route path="/welcome">
        <Landing />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
      <Route path="/success">
        <PageThree />
      </Route>
      <Route path="/list">
        <List />
      </Route>
      <Route  path='/laptop/:id'>
        <Details />
      </Route>
    </div>
  );
}

export default App;
