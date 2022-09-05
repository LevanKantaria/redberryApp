import classes from "./Landing.module.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const history = useHistory();

  const width = useSelector((state) => state.main.width)
  const onAddHandler = () => {
    history.push("/add");
  };
  const onListHandler = () => {
    history.push("/list");
  };

  

  return (
    <div className={classes.main}>
      <section className={classes.logo}>
        <img src="/Screenshot_2.jpg" alt="Redberry"></img>
      </section>
      <section>
        {width > 868 && (
          <img src="/Screenshot_1.jpg" alt="Decorative Image"></img>
        )}
        {width < 868 && (
          <img src="/Screenshot_21.jpg" alt="Decorative Image"></img>
        )}
      </section>
      <div className={classes.buttons}>
        <Button
          size="lg"
          className={classes.button}
          variant="primary"
          onClick={onAddHandler}
        >
          ჩანაწერის დამატება
        </Button>

        <Button
          size="lg"
          variant="primary"
          className={classes.button}
          onClick={onListHandler}
        >
          ჩანაწერების სია
        </Button>
      </div>
    </div>
  );
};

export default Landing;
