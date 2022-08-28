import classes from "./Landing.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Landing = () => {
    const history = useHistory();
    const onAddHandler = () =>{
        history.push('/add')
    }
    const onListHandler = () =>{
        history.push('/list')
    }
  return (
    <div className={classes.main}>
      <section className={classes.logo}>
        <img src="/Screenshot_2.jpg" alt="Redberry"></img>
      </section>
      <section>
        <img src="/Screenshot_1.jpg" alt="Decorative Image"></img>
      </section>
      <div className={classes.buttons}>
        
          <Button size="lg" className={classes.button} variant="primary" onClick={onAddHandler} >ჩანაწერის დამატება</Button>
       
      
          <Button size="lg" variant="primary" className={classes.button} onClick={onListHandler}>ჩანაწერების სია</Button>
        
      </div>
    </div>
  );
};

export default Landing;
