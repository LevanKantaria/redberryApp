import classes from "./Add.module.css";
import { useSelector } from "react-redux";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import { useState, useLayoutEffect } from "react";

const Add = () => {
  const form_data = new FormData();

  const history = useHistory();
  const formPage = useSelector((state) => state.main.formPage);
  const width = useSelector((state) => state.main.width);

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
    console.log("Step after submit");
    if (localStorage.getItem("image")) {
      console.log("step 2: image in localStorage Exists");
      function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }

        console.log("Log from DataUrlToFile Function");
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
      token: "681341299087a8ba7c5e905386371a21",
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
    console.log(file + "this is Image");

    for ( var key in uploadData ) {
      form_data.append(key, uploadData[key])
    }
    

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
        console.log('Log after receiving response')
        console.log(res);
        if (res.statusText === "OK") {
          history.push("/success");
          // localStorage.clear();

          return "success!";
        } else {
          console.log(' Error Log after receiving response')

          return "errror!";
        }
      });

    
  };

  return (
    <div className={classes.background}>
      {width > 1000 && (
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
      )}
      {width < 1000 && formPage === "1" && (
        <div className={classes.top}>
          <h5> თანამშრომლების ინფო </h5>
          <section>1/2</section>
        </div>
      )}
      {width < 1000 && formPage === "2" && (
        <div className={classes.top}>
          <h5> ლეპტოპის მახასიეთებლები </h5>
          <section>2/2</section>
        </div>
      )}
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
