import classes from "./Add.module.css";
import TeamOptions from "./TeamOptions";
import PositionOptions from "./PositionOptions";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../store";
import { useSelector } from "react-redux";

const PageOne = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const ids = useSelector((state) => state.main.id);

  //   Check if Data is in LocalStorage, If data exists, fill the form

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setTimeout(() => {
        setName(localName + " ");
      }, 1);
      setTimeout(() => {
        setName(localName);
      }, 300);
      let localName = localStorage.getItem("name");
      setName(localName);
      setNameIsValid(localName.length > 1 && /^[ა-ჰ]+$/.test(localName));
    }

    if (localStorage.getItem("last-name")) {
      let localLastName = localStorage.getItem("last-name");
      setLastName(localLastName);
      setLastNameIsValid(
        localLastName.length > 1 && /^[ა-ჰ]+$/.test(localLastName)
      );
    }
    if (localStorage.getItem("team")) {
      let localTeam = localStorage.getItem("team");
      setTeam(localTeam);
      setTeamIsValid(localTeam !== "");
      dispatch(filterActions.idSelect(localTeam));
    }
    if (localStorage.getItem("position")) {
      let localPosition = localStorage.getItem("position");
      setPosition(localPosition);
      setPositionIsValid(localPosition !== "");
    }
    if (localStorage.getItem("email")) {
      let localEmail = localStorage.getItem("email");
      setEmail(localEmail);
      setEmailIsValid(/^\w+([\.-]?\w+)*@redberry.ge$/.test(localEmail));
    }
    if (localStorage.getItem("number")) {
      let localNumnber = localStorage.getItem("number");
      setNumber(localNumnber);
      let trimmedValue = localNumnber.replace(/\s/g, "");
      let startsWithPlus = /^[+]\d{12}$/.test(trimmedValue);
      setNumberIsValid(
        startsWithPlus &&
          /^[+]995/.test(trimmedValue) &&
          trimmedValue.length === 13
      );
    }
  }, [ids]);

  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const [teamIsTouched, setTeamIsTouched] = useState(false);
  const [positionIsTouched, setPositionIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [numberIsTouched, setNumberIsTouched] = useState(false);

  const [nameIsValid, setNameIsValid] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [teamIsValid, setTeamIsValid] = useState(false);
  const [positionIsValid, setPositionIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);

  const onBackHandler = (event) => {
    event.preventDefault();
    history.push("/welcome");
  };

  const nameChangeHandler = (event) => {
    let value = event.target.value;
    setName(event.target.value);
    setNameIsTouched(true);
    setNameIsValid(value.length > 1 && /^[ა-ჰ]+$/.test(value));
    localStorage.setItem("name", value);
  };

  const lastNameChangeHandler = (event) => {
    let value = event.target.value;
    setLastName(event.target.value);
    setLastNameIsTouched(true);
    setLastNameIsValid(value.length > 1 && /^[ა-ჰ]+$/.test(value));
    localStorage.setItem("last-name", value);
  };

  const teamChangeHanlder = (event) => {
    let value = event.target.value;
    setTeam(value);
    setTeamIsTouched(true);
    setTeamIsValid(event.target.value !== "");
    localStorage.setItem("team", value);
    dispatch(filterActions.idSelect(value));
  };

  const positionChangeHandler = (event) => {
    let value = event.target.value;
    setPosition(value);

    setPositionIsTouched(true);
    setPositionIsValid(event.target.value !== "");
    localStorage.setItem("position", value);
  };

  const emailChangeHandler = (event) => {
    let value = event.target.value;
    setEmail(event.target.value);
    setEmailIsTouched(true);
    setEmailIsValid(/^\w+([\.-]?\w+)*@redberry.ge$/.test(value));
    localStorage.setItem("email", value);
  };

  const numberChangeHandler = (event) => {
    let value = event.target.value;
    let trimmedValue = value.replace(/\s/g, "");
    setNumber(trimmedValue);
    setNumberIsTouched(true);
    let startsWithPlus = /^[+]\d{12}$/.test(trimmedValue);

    setNumberIsValid(
      startsWithPlus &&
        /^[+]995/.test(trimmedValue) &&
        trimmedValue.length === 13
    );

    localStorage.setItem("number", value);
  };

  const formIsValid =
    nameIsValid &&
    lastNameIsValid &&
    teamIsValid &&
    positionIsValid &&
    emailIsValid &&
    numberIsValid;
  const onClickHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log("form is valid");
      dispatch(filterActions.PageSelect("2"));
    } else {
      setNameIsTouched(true);
      setLastNameIsTouched(true);
      setTeamIsTouched(true);
      setPositionIsTouched(true);
      setEmailIsTouched(true);
      setNumberIsTouched(true);
    }
  };

  let nameClass = classes.nameInput;
  if (!nameIsValid && nameIsTouched) {
    nameClass = classes.nameInputInvalid;
  }
  let lastNameClass = classes.nameInput;
  if (!lastNameIsValid && lastNameIsTouched) {
    lastNameClass = classes.nameInputInvalid;
  }

  let teamClass = "";
  if (!teamIsValid && teamIsTouched) {
    teamClass = classes.selectInvalid;
  }

  let positionClass = "";
  if (!positionIsValid && positionIsTouched) {
    positionClass = classes.selectInvalid;
  }

  let emailClass = "";
  if (!emailIsValid && emailIsTouched) {
    emailClass = classes.nameWideInvalid;
  }

  let numberClass = "";
  if (!numberIsValid && numberIsTouched) {
    numberClass = classes.nameWideInvalid;
  }

  return (
    <div>
      <div>
        <button className={classes.back} onClick={onBackHandler}>
          <img src="./Screenshot_4.jpg"></img>
        </button>
      </div>

      <form className={classes.form}>
        {/* saxeli gvari */}
        <div className={classes.name_last_name}>
          <div className={classes.name}>
            <h5>სახელი</h5>
            <input
              className={nameClass}
              id="name"
              placeholder="ლევანი"
              onChange={nameChangeHandler}
              value={name}
            />
            <h6> მინიმუმ 2 სიმბოლო, ქართული ასოები</h6>
          </div>
          <div className={classes.name}>
            <h5>გვარი</h5>
            <input
              className={lastNameClass}
              id="lastName"
              placeholder="ქანთარია"
              onChange={lastNameChangeHandler}
              value={lastName}
            />
            <h6> მინიმუმ 2 სიმბოლო, ქართული ასოები</h6>
          </div>
        </div>
        {/* Team */}
        <div className={classes.select}>
          <select
            onChange={teamChangeHanlder}
            className={teamClass}
            value={team}
          >
            <option value="">თიმი</option>
            {/* <option value='hr' >hr</option>
            <option value='dev' >dev</option>
            <option value='mac' >mac</option> */}
            <TeamOptions />
          </select>
        </div>
        <div className={classes.select}>
          <select
            id="position-select"
            onChange={positionChangeHandler}
            className={positionClass}
            value={position}
          >
            <option value="">პოზიცია</option>
            <PositionOptions />
          </select>
        </div>
        <div className={classes.nameWide}>
          <h5>მეილი</h5>
          <input
            className={emailClass}
            type="email"
            id="lastName"
            placeholder="levani@redberry.ge"
            onChange={emailChangeHandler}
            value={email}
          />
          <h6> უნდა მთავრდებოდეს @redberry.ge-ით</h6>
        </div>
        <div className={classes.nameWide}>
          <h5>ტელეფონის ნომერი</h5>
          <input
            className={numberClass}
            id="lastName"
            placeholder="+995 598 00 07 01"
            onChange={numberChangeHandler}
            value={number}
          />
          <h6> უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</h6>
        </div>
        <div className={classes.buttonDiv}>
          <div>
            <button onClick={onClickHandler}>შემდეგი</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageOne;
