import "./App.css";
import Landing from "./components/Landing/Landing";
import { Route, Link, Redirect } from "react-router-dom";
import Add from "./components/pages/Add/Add";

function App() {
  return (
    <div className="App">
      <Route path='/' exact>
        <Redirect to='/welcome'></Redirect>
      </Route>
      <Route path="/welcome">
        <Landing />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
    </div>
  );
}

export default App;
