import { useDispatch } from "react-redux";
import { filterActions } from "../../../store";
import classes from "./PageTwo.module.css";
import BasicDragAndDrop from "./DragAndDrop2";
import LaptopOptions from "./laptopOptions";

const PageTwo = () => {
  const dispatch = useDispatch();
  const onBackHandler = () => {
    dispatch(filterActions.PageSelect("1"));
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
            <input className={classes.nameInput} id="laptop" placeholder="HP" />
            <h6> ლათინური ასოები, ციფრები, !@#$%^&*()_+= </h6>
          </div>
          <div className={classes.selectDiv}>
            <select
              className={classes.nameInput}
              id="bramd"
              placeholder="ბრენდი"
            >
              <option>ლეპტოპის ბრენდი</option>
              <LaptopOptions/>
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
              <option>sdfa</option>
            </select>
          </div>
          <div className={classes.nameNarrow}>
            <h5>CPU-ს ბირთვი</h5>
            <input
              className={classes.nameInputNarrow}
              id="core"
              placeholder="14"
            />
            <h6> მხოლოდ ციფრები </h6>
          </div>
          <div className={classes.name}>
            <h5>CPU-ს ნაკადი</h5>
            <input
              className={classes.nameInputNarrow}
              id="hz"
              placeholder="365"
            />
            <h6> მხოლოდ ციფრები</h6>
          </div>
        </div>
        {/* RAM  and SSD / HDD SELECTORS */}
        <div className={classes.name_last_name}>
          <div className={classes.name}>
            <h5>ლეპტოპის RAM (GB)</h5>
            <input className={classes.nameInput} id="laptop" placeholder="HP" />
            <h6> მხოლოდ ციფრები </h6>
          </div>
          {/* SSD */}
          <div className={classes.radioWrap}>
            <h5>მეხსიერების ტიპი</h5>
            <div className={classes.radioButtonsDiv}>
              <div className={classes.radioSelect}>
                <input type="radio" id="drive1" value="ssd" name="drive" />
                <label htmlFor="drive1">SSD</label>
              </div>
              <div className={classes.radioSelect}>
                <input type="radio" id="drive2" value="hdd" name="drive" />
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
                <input type="date" className={classes.nameInput} id="date" />
              </div>
            </div>
            <div className={classes.selectDiv}>
              <div className={classes.name}>
                <h5>ლეპტოპის ფასი</h5>
                <input
                  className={classes.nameInput}
                  id="price"
                  placeholder="0000"
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
            <div className={classes.radioButtonsDiv}>
              <div className={classes.radioSelect}>
                <input type="radio" id="new" value="new" name="condition" />
                <label htmlFor="new">ახალი</label>
              </div>
              <div className={classes.radioSelect}>
                <input type="radio" id="old" value="old" name="condition" />
                <label htmlFor="old">მეორადი</label>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.formEndButtons}>
          <div>
            <button className={classes.backButton}>უკან</button>
          </div>
          <div>
            <button className={classes.saveButton}>დამახსოვრება</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageTwo;
