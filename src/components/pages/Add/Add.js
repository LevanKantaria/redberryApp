import classes from "./Add.module.css";
import { useSelector } from "react-redux";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

import { useDispatch } from "react-redux";
import axios from "axios";
import { filterActions } from "../../../store";
import { useHistory } from "react-router";

const Add = () => {
  const history = useHistory();
  const formPage = useSelector((state) => state.main.formPage);

  const dispatch = useDispatch();

  

  let doc1Style = { borderBottom: "solid 1px black" };
  let doc2Style = { borderBottom: "solid 1px black" };
  if (formPage === "1") {
    doc2Style = { borderBottom: "solid 0px black" };
  }
  if (formPage === "2") {
    doc1Style = { borderBottom: "solid 0px black" };
  }

 

  
  const submitHandler = () => {
    if(localStorage.getItem('image')){

      function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
        
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, { type: mime });
      }
      
      var file = dataURLtoFile(
        localStorage.getItem("image"),
        localStorage.getItem("image-name")
        );
      }
      let uploadData = {
        name: localStorage.getItem("name"),
        surname: localStorage.getItem("last-name"),
        team_id: localStorage.getItem("team"),
        position_id: localStorage.getItem("position"),
        phone_number: localStorage.getItem("number"),
        email: localStorage.getItem("email"),
        token: "2ccdb89896b3d3be7bfa370ee543db44",
        laptop_name: localStorage.getItem("laptop-name"),
        laptop_image: file,
        laptop_brand_id: localStorage.getItem("brand"),
        laptop_cpu: localStorage.getItem("cpu"),
        laptop_cpu_cores: localStorage.getItem("cpu-core"),
        laptop_cpu_threads: localStorage.getItem("cpu-flow"),
        laptop_ram: localStorage.getItem("ram"),
        laptop_hard_drive_type: localStorage.getItem("drive"),
        laptop_state: localStorage.getItem("condition"),
        laptop_purchase_date: localStorage.getItem("date"),
        laptop_price: localStorage.getItem("price"),
      };
    console.log(file)
    axios
      .post(
        "https://pcfy.redberryinternship.ge/api/laptop/create",
        uploadData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": `multipart/form-data`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          history.push("/success");
          localStorage.clear();

          return "success!";
        } else {
          return "errror!";
        }
      });
  };

  return (
    <div className={classes.background}>
      <div></div>
      <div className={classes.top}>
        <h5
          style={doc1Style}
          // onClick={doc1ClickHandler}
        >
          თანამშრომლების ინფო
        </h5>
        <h5
          style={doc2Style}
          // onClick={doc2ClickHandler}
        >
          ლეპტოპის მახასიეთებლები
        </h5>
      </div>
      <div>
        {formPage === "1" && <PageOne />}
        {formPage === "2" && <PageTwo onClick={submitHandler} />}
      </div>
      <div className={classes.logo}>
        <img src="./Screenshot_3.jpg"></img>
      </div>
    </div>
  );
};

export default Add;
