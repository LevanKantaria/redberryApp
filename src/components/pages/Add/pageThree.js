import classes from "./PageThree.module.css";
import { useHistory } from "react-router";

const PageThree = () => {
  const history = useHistory();
  const seeListHandler = (e) => {
    e.preventDefault();
    history.push("/list");
  };

  const onBackHandler = (e) => {
    e.preventDefault();
    history.push("/welcome");
  };

  return (
    <div className={classes.background}>
      <div className={classes.mainDiv}>
        <div className={classes.image}>
          <img src="/Screenshot_18.jpg" alt="congratsImage"></img>
        </div>
        
          <p>ჩანაწერი დამატებულია!</p>
        

        <div>
          <button onClick={seeListHandler}>სიაში გადაყვანა</button>
          <button className={classes.backButton} onClick={onBackHandler}>
            მთავარი
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
