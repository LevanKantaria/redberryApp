import classes from "./Add.module.css";
import TeamOptions from "./TeamOptions";
import PositionOptions from "./PositionOptions";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../store";
import { useSelector } from "react-redux";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const Add = () => {
 const formPage = useSelector(state => state.main.formPage)
  
  return (
    <div className={classes.background}>
      <div>
        
      </div>
      <div className={classes.top}>
        <h5>თანამშრომლების ინფო</h5>
        <h5>ლეპტოპის მახასიეთებლები</h5>
      </div>
      <div >
       {formPage==='1' && <PageOne />}
       {formPage==='2' && <PageTwo />}
      </div>
      <div className={classes.logo}> 
        <img src="./Screenshot_3.jpg"></img>
      </div>
    </div>
  );
};

export default Add;
