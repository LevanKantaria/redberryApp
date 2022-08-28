import { useDispatch } from "react-redux";
import { filterActions } from "../../../store";
import classes from "./PageTwo.module.css";
import BasicDragAndDrop from "./DragAndDrop2";
import LaptopOptions from "./laptopOptions";
import { useState } from "react";
import CpuOptions from "./CpuOptions";

const PageTwo = () => {
  const dispatch = useDispatch();
  const onBackHandler = () => {
    dispatch(filterActions.PageSelect("1"));
  };

  const [laptopName, setLaptopName] = useState("");
  const [laptopNameIsValid, setLaptopNameIsValid] = useState(false);
  const [laptopNameIsTouched, setLaptopNameIsTouched] = useState(false);

  const laptopNameChangeHandler = (event) => {
    let value = event.target.value;
    setLaptopNameIsTouched(true);
    setLaptopName(value);
    setLaptopNameIsValid(!/[.,<>?ა-ჰ]/.test(value));
  };

  const [cpuCore, setCpuCore] = useState("");
  const [cpuCoreIsValid, setCpuCoreIsValid] = useState(false);
  const [cpuCoreIsTouched, setCpuCoreIsTouched] = useState(false);

  const cpuCoreChangeHandler = (event) => {
    let value = event.target.value;
    setCpuCoreIsTouched(true);
    setCpuCore(value);
    setCpuCoreIsValid(/^\d{1,3}$/.test(value));
  };

  const [cpuFlow, setCpuFlow] = useState("");
  const [cpuFlowIsValid, setCpuFlowIsValid] = useState(false);
  const [cpuFlowIsTouched, setCpuFlowIsTouched] = useState(false);

  const cpuFlowChangeHandler = (event) => {
    let value = event.target.value;
    setCpuFlowIsTouched(true);
    setCpuFlow(value);
    setCpuFlowIsValid(/^\d{1,5}$/.test(value));
  };

  const [ram, setRam] = useState("");
  const [ramIsValid, setRamIsValid] = useState(false);
  const [ramIsTouched, setRamIsTouched] = useState(false);

  const ramChangeHandler = (event) => {
    let value = event.target.value;
    setRamIsTouched(true);
    setRam(value);
    setRamIsValid(/^\d{1,3}$/.test(value));
  };

  const [drive, setDrive] = useState("");
  const [driveIsValid, setDriveIsValid] = useState(false);
  const [driveIsTouched, setDriveIsTouched] = useState(false);

  const driveChangeHandler = (event) => {
    setDrive(event.target.value);
    setDriveIsTouched(true);
    setDriveIsValid(true);
  };

  const [date, setDate] = useState("");
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const [price, setPrice] = useState("");
  const [priceIsValid, setPriceIsValid] = useState(false);
  const [priceIsTouched, setPriceIsTouched] = useState(false);
  const priceChangeHandler = (event) => {
    let value = event.target.value;
    setPriceIsTouched(true);
    setPriceIsValid(/^\d{1,4}$/.test(value));
    setPrice(value);
  };

  const [condition, setCondition] = useState("");
  const [conditionIsTouched, setConditionIsTouched] = useState(false);
  const [conditionIsValid, setConditionIsValid] = useState(false);
  const conditionChangeHandler = (event) => {
    setCondition(event.target.value);
    setConditionIsTouched(true);
    setConditionIsValid(true);
  };

  let laptopNameInputClass = classes.nameInput;
  if (!laptopNameIsValid && laptopNameIsTouched) {
    laptopNameInputClass = classes.nameInputInvalid;
  }

  let cpuCoreClass = classes.nameInputNarrow;
  if (!cpuCoreIsValid && cpuCoreIsTouched) {
    cpuCoreClass = classes.nameInputNarrowInvalid;
  }

  let cpuFlowClass = classes.nameInputNarrow;
  if (!cpuFlowIsValid && cpuFlowIsTouched) {
    cpuFlowClass = classes.nameInputNarrowInvalid;
  }

  let ramClass = classes.nameInput;
  if (!ramIsValid && ramIsTouched) {
    ramClass = classes.nameInputInvalid;
  }

  let priceClass = classes.nameInput;
  if (!priceIsValid && priceIsTouched) {
    priceClass = classes.nameInputInvalid;
  }

  let conditionClass = classes.radioButtonsDiv;
  if (!conditionIsValid && conditionIsTouched) {
    conditionClass = classes.radioButtonsDivInvalid;
  }

  let conditionClassDrive = classes.radioButtonsDiv;
  if (!driveIsValid && driveIsTouched) {
    conditionClassDrive  = classes.radioButtonsDivInvalid;
  }

  

  const saveHandler = (e) => {
    e.preventDefault();
    setLaptopNameIsTouched(true);
    setCpuCoreIsTouched(true);
    setCpuFlowIsTouched(true);
    setRamIsTouched(true);
    setDriveIsTouched(true)
    setPriceIsTouched(true);
    setConditionIsTouched(true);

  };
  return (
    <div>
      <button className={classes.back} onClick={onBackHandler}>
        <img src="./Screenshot_4.jpg"></img>
      </button>
      <form className={classes.form}>
        <BasicDragAndDrop />
        {/* Laptop Selectors */}
        <div className={classes.name_last_name}>
          <div className={classes.name}>
            <h5>ლეპტოპის სახელი</h5>
            <input
              className={laptopNameInputClass}
              id="laptop"
              placeholder="HP"
              onChange={laptopNameChangeHandler}
              value={laptopName}
            />
            <h6> ლათინური ასოები, ციფრები, !@#$%^&*()_+= </h6>
          </div>
          <div className={classes.selectDiv}>
            <select
              className={classes.nameInput}
              id="bramd"
              placeholder="ბრენდი"
            >
              <option>ლეპტოპის ბრენდი</option>
              <LaptopOptions />
            </select>
          </div>
        </div>
        <div className={classes.hr}>
          <hr></hr>
        </div>
        {/* CPU Selectors */}
        <div className={classes.name_last_name}>
          <div>
            <select
              className={classes.selectDivNarrow}
              id="cpu"
              placeholder="cpu"
            >
              <option>CPU</option>
              <CpuOptions />
            </select>
          </div>
          <div className={classes.nameNarrow}>
            <h5>CPU-ს ბირთვი</h5>
            <input
              className={cpuCoreClass}
              id="core"
              placeholder="14"
              onChange={cpuCoreChangeHandler}
            />
            <h6> მხოლოდ ციფრები </h6>
          </div>
          <div className={classes.name}>
            <h5>CPU-ს ნაკადი</h5>
            <input
              className={cpuFlowClass}
              id="hz"
              placeholder="365"
              onChange={cpuFlowChangeHandler}
            />
            <h6> მხოლოდ ციფრები</h6>
          </div>
        </div>
        {/* RAM  and SSD / HDD SELECTORS */}
        <div className={classes.name_last_name}>
          <div className={classes.name}>
            <h5>ლეპტოპის RAM (GB)</h5>
            <input
              className={ramClass}
              id="laptop"
              placeholder="GB"
              onChange={ramChangeHandler}
            />
            <h6> მხოლოდ ციფრები </h6>
          </div>
          {/* SSD */}
          <div className={classes.radioWrap}>
            <h5>მეხსიერების ტიპი</h5>
            <div className={conditionClassDrive}>
              <div className={classes.radioSelect}>
                <input
                  type="radio"
                  id="drive1"
                  value="ssd"
                  name="drive"
                  onChange={driveChangeHandler}
                />
                <label htmlFor="drive1">SSD</label>
              </div>
              <div className={classes.radioSelect}>
                <input
                  type="radio"
                  id="drive2"
                  value="hdd"
                  name="drive"
                  onChange={driveChangeHandler}
                />
                <label htmlFor="drive2">HDD</label>
              </div>
            </div>
          </div>
        </div>
        {/*  Second Horizontal Line */}
        <div className={classes.hr}>
          <hr></hr>
          {/* Buy Date and Price  */}
          <div className={classes.name_last_name}>
            <div className={classes.name}>
              <div className={classes.dateCorrection}>
                <h5>შეძენის რიცხვი(არჩევითი)</h5>
                <input
                  type="date"
                  className={classes.nameInput}
                  id="date"
                  onChange={dateChangeHandler}
                />
              </div>
            </div>
            <div className={classes.selectDiv}>
              <div className={classes.name}>
                <h5>ლეპტოპის ფასი</h5>
                <input
                  className={priceClass}
                  id="price"
                  placeholder="0000"
                  onChange={priceChangeHandler}
                />
                <h6> მხოლოდ ციფრები</h6>
              </div>
            </div>
          </div>
          <div className={classes.hr}></div>
        </div>
        {/* Laptop Condition  */}
        <div className={classes.radioWrap}>
          <div className={classes.condition}>
            <h5>ლეპტოპის მდომარეობა</h5>
            <div className={conditionClass}>
              <div className={classes.radioSelect}>
                <input
                  type="radio"
                  id="new"
                  value="new"
                  name="condition"
                  onChange={conditionChangeHandler}
                />
                <label htmlFor="new">ახალი</label>
              </div>
              <div className={classes.radioSelect}>
                <input
                  type="radio"
                  id="old"
                  value="old"
                  name="condition"
                  onChange={conditionChangeHandler}
                />
                <label htmlFor="old">მეორადი</label>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.formEndButtons}>
          <div>
            <button className={classes.backButton} onClick={onBackHandler} >უკან</button>
          </div>
          <div>
            <button className={classes.saveButton} onClick={saveHandler}>
              დამახსოვრება
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageTwo;
