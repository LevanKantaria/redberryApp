import { useDispatch } from "react-redux";
import { filterActions } from "../../../store";
import classes from "./PageTwo.module.css";
import BasicDragAndDrop from "./DragAndDrop2";
import LaptopOptions from "./laptopOptions";
import { useState, useEffect } from "react";
import CpuOptions from "./CpuOptions";
import { useSelector } from "react-redux";

const PageTwo = (props) => {
  const validUpload = useSelector((state) => state.main.dragState);
  const width = useSelector((state) => state.main.width);
  const [uploadIsValid, setUploadIsValid] = useState(validUpload);

  const dispatch = useDispatch();

  if (!localStorage.getItem("name")) {
    dispatch(filterActions.PageSelect("1"));
  }
  const onBackHandler = () => {
    dispatch(filterActions.PageSelect("1"));
  };

  useEffect(() => {
    if (localStorage.getItem("image")) {
      setUploadIsValid(true);
      setBrandIsTouched(true);
    }
    if (localStorage.getItem("laptop-name")) {
      let value = localStorage.getItem("laptop-name");
      setTimeout(() => {
        setLaptopName(value + " ");
      }, 10);
      setTimeout(() => {
        setLaptopName(value);
      }, 300);
      setLaptopName(value);
      setLaptopNameIsValid(!/[.,<>?ა-ჰ]/.test(value));
    }

    if (localStorage.getItem("brand")) {
      let value = localStorage.getItem("brand");
      setBrand(value);
      setBrandIsValid(value !== "");
    }

    if (localStorage.getItem("cpu")) {
      let value = localStorage.getItem("cpu");
      setCpu(value);
      setCpuIsValid(value !== "" || value!=='');
    }

    if (localStorage.getItem("cpu-core")) {
      let value = localStorage.getItem("cpu-core");
      setCpuCore(value);
      setCpuCoreIsValid(/^\d{1,3}$/.test(value));
    }

    if (localStorage.getItem("cpu-flow")) {
      let value = localStorage.getItem("cpu-flow");
      setCpuFlow(value);
      setCpuFlowIsValid(/^\d{1,5}$/.test(value));
    }

    if (localStorage.getItem("ram")) {
      let value = localStorage.getItem("ram");
      setRam(value);
      setRamIsValid(/^\d{1,3}$/.test(value));
    }

    if (localStorage.getItem("drive")) {
      let value = localStorage.getItem("drive");
      setDrive(value);
      setDriveIsValid(true);
      let radiobtn = document.getElementById(value);
      radiobtn.checked = true;
    }
    if (localStorage.getItem("date")) {
      let value = localStorage.getItem("date");
      setDate(value);
    }

    if (localStorage.getItem("price")) {
      let value = localStorage.getItem("price");
      setPriceIsValid(/^\d{1,4}$/.test(value));
      setPrice(value);
    }
    if (localStorage.getItem("condition")) {
      let value = localStorage.getItem("condition");
      setCondition(value);
      let radiobtnn = document.getElementById(value);
      radiobtnn.checked = true;

      setConditionIsValid(true);
    }
  }, []);

  const [uploadIsTouched, setUploadIsTouched] = useState(false);

  const [laptopName, setLaptopName] = useState("");
  const [laptopNameIsValid, setLaptopNameIsValid] = useState(false);
  const [laptopNameIsTouched, setLaptopNameIsTouched] = useState(false);

  const laptopNameChangeHandler = (event) => {
    let value = event.target.value;
    setLaptopNameIsTouched(true);
    setLaptopName(value);

    setLaptopNameIsValid(/^[\w!@#$%^&*()_+=+\s]+$/.test(value));
    localStorage.setItem("laptop-name", value);
  };

  const [brand, setBrand] = useState("");
  const [brandIsValid, setBrandIsValid] = useState(false);
  const [brandIsTouched, setBrandIsTouched] = useState(false);

  const brandChangeHandler = (event) => {
    let value = event.target.value;
    setBrandIsTouched(true);
    setBrandIsValid(value !== "");
    setBrand(value);
    localStorage.setItem("brand", value);
  };

  const [cpu, setCpu] = useState("");
  const [cpuIsValid, setCpuIsValid] = useState(false);
  const [cpuIsTouched, setCpuIsTouched] = useState(false);
  const cpuChangeHandler = (event) => {
    let value = event.target.value;
    setCpuIsTouched(true);
    setCpuIsValid(value !== 'CPU');
    setCpu(value);
    localStorage.setItem("cpu", value);
  };

  const [cpuCore, setCpuCore] = useState("");
  const [cpuCoreIsValid, setCpuCoreIsValid] = useState(false);
  const [cpuCoreIsTouched, setCpuCoreIsTouched] = useState(false);

  const cpuCoreChangeHandler = (event) => {
    let value = event.target.value;
    setCpuCoreIsTouched(true);
    setCpuCore(value);
    setCpuCoreIsValid(/^\d{1,3}$/.test(value));
    localStorage.setItem("cpu-core", value);
  };

  const [cpuFlow, setCpuFlow] = useState("");
  const [cpuFlowIsValid, setCpuFlowIsValid] = useState(false);
  const [cpuFlowIsTouched, setCpuFlowIsTouched] = useState(false);

  const cpuFlowChangeHandler = (event) => {
    let value = event.target.value;
    setCpuFlowIsTouched(true);
    setCpuFlow(value);
    setCpuFlowIsValid(/^\d{1,5}$/.test(value));
    localStorage.setItem("cpu-flow", value);
  };

  const [ram, setRam] = useState("");
  const [ramIsValid, setRamIsValid] = useState(false);
  const [ramIsTouched, setRamIsTouched] = useState(false);

  const ramChangeHandler = (event) => {
    let value = event.target.value;
    setRamIsTouched(true);
    setRam(value);
    setRamIsValid(/^\d{1,3}$/.test(value));
    localStorage.setItem("ram", value);
  };

  const [drive, setDrive] = useState("");
  const [driveIsValid, setDriveIsValid] = useState(false);
  const [driveIsTouched, setDriveIsTouched] = useState(false);

  const driveChangeHandler = (event) => {
    setDrive(event.target.value);
    setDriveIsTouched(true);
    setDriveIsValid(true);
    localStorage.setItem("drive", event.target.value);
  };

  const [date, setDate] = useState("");
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    localStorage.setItem("date", event.target.value);
  };

  const [price, setPrice] = useState("");
  const [priceIsValid, setPriceIsValid] = useState(false);
  const [priceIsTouched, setPriceIsTouched] = useState(false);
  const priceChangeHandler = (event) => {
    let value = event.target.value;
    setPriceIsTouched(true);
    setPriceIsValid(/^\d{1,4}$/.test(value));
    setPrice(value);
    localStorage.setItem("price", value);
  };

  const [condition, setCondition] = useState("");
  const [conditionIsTouched, setConditionIsTouched] = useState(false);
  const [conditionIsValid, setConditionIsValid] = useState(false);
  const conditionChangeHandler = (event) => {
    setCondition(event.target.value);
    setConditionIsTouched(true);
    setConditionIsValid(true);
    localStorage.setItem("condition", event.target.value);
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
    conditionClassDrive = classes.radioButtonsDivInvalid;
  }

  let brandClass = classes.nameInput;
  if (brandIsTouched && !brandIsValid) {
    brandClass = classes.nameInputInvalid;
  }
  let cpuClass = classes.selectDivNarrow;
  if (cpuIsTouched && !cpuIsValid) {
    cpuClass = classes.selectDivNarrowInvalid;
  }

  let upload = classes.dragDrop;
  if (uploadIsTouched && !uploadIsValid) {
    upload = classes.dragDropInvalid;
  }

  const uploadChangeHandler = () => {
    console.log("adfasdfasd");
    setUploadIsValid(true);
    upload = classes.dragDrop;
  };

  let dynamicName = classes.name_last_name;
  if (width < 1004) {
    dynamicName = classes.name_last_name;
  } else {
    dynamicName = classes.name_last_name;
  }
  console.log(dynamicName);
  console.log(width);

  const form2IsValid =
    uploadIsValid &&
    laptopNameIsValid &&
    brandIsValid &&
    cpuIsValid &&
    cpuCoreIsValid &&
    cpuFlowIsValid &&
    ramIsValid &&
    driveIsValid &&
    priceIsValid &&
    conditionIsValid;

  const saveHandler = (e) => {
    e.preventDefault();
    setLaptopNameIsTouched(true);
    setCpuCoreIsTouched(true);
    setCpuFlowIsTouched(true);
    setRamIsTouched(true);
    setDriveIsTouched(true);
    setPriceIsTouched(true);
    setConditionIsTouched(true);
    setBrandIsTouched(true);
    setCpuIsTouched(true);
    setUploadIsTouched(true);

    if (!date) {
      localStorage.setItem("date", "");
    }

    if (form2IsValid) {
      props.onClick();
    }
  };
  return (
    <div>
      <button className={classes.back} onClick={onBackHandler}>
        <img src="/Screenshot_27.jpg"></img>
      </button>
      <form className={classes.form}>
        <BasicDragAndDrop className={upload} onChange={uploadChangeHandler} />
        {/* Laptop Selectors */}
        <div className={dynamicName}>
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
              className={brandClass}
              id="brand"
              placeholder="ბრენდი"
              onChange={brandChangeHandler}
              value={brand}
            >
              <option value="">ლეპტოპის ბრენდი</option>
              <LaptopOptions />
            </select>
          </div>
        </div>
        <div className={classes.hr}>
          <hr></hr>
        </div>
        {/* CPU Selectors */}
        <div className={dynamicName}>
          <div>
            <select
              className={cpuClass}
              id="cpu"
              placeholder="cpu"
              onChange={cpuChangeHandler}
              value={cpu}
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
              value={cpuCore}
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
              value={cpuFlow}
            />
            <h6> მხოლოდ ციფრები</h6>
          </div>
        </div>
        {/* RAM  and SSD / HDD SELECTORS */}
        <div className={dynamicName}>
          <div className={classes.name}>
            <h5>ლეპტოპის RAM (GB)</h5>
            <input
              className={ramClass}
              id="laptop"
              placeholder="GB"
              onChange={ramChangeHandler}
              value={ram}
            />
            <h6> მხოლოდ ციფრები </h6>
          </div>
          {/* SSD */}
          <div className={classes.radioWrap}>
            <h5 >მეხსიერების ტიპი</h5>
            <div className={conditionClassDrive}>
              <div className={classes.radioSelect}>
                <input
                  type="radio"
                  id="SSD"
                  value="SSD"
                  name="drive"
                  onChange={driveChangeHandler}
                />
                <label htmlFor="drive1">SSD</label>
              </div>
              <div className={classes.radioSelect}>
                <input
                  type="radio"
                  id="HDD"
                  value="HDD"
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
        </div>
        {/* Buy Date and Price  */}
        <div className={dynamicName}>
          <div className={classes.name}>
            <div className={classes.dateCorrection}>
              <h5>შეძენის რიცხვი(არჩევითი)</h5>
              <input
                type="date"
                className={classes.nameInput}
                id="date"
                onChange={dateChangeHandler}
                value={date}
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
                value={price}
              />
              <h6> მხოლოდ ციფრები</h6>
            </div>
          </div>
        </div>
        <div className={classes.hr}></div>
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
                  id="used"
                  value="used"
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
            <button className={classes.backButton} onClick={onBackHandler}>
              უკან
            </button>
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
