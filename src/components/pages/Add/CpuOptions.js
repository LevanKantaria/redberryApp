import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CpuOptions = (props) => {
  const [laptops, setLaptops] = useState([]);
  let cpusGetUrl = "https://pcfy.redberryinternship.ge/api/cpus";
  let optionList = [];

  useEffect(() => {
    let responseLaptops = [];
    axios.get(cpusGetUrl).then((res) => {
      let dataRes = res.data.data;

      for (let key in dataRes) {
        responseLaptops.push(dataRes[key]);
      }

      setLaptops(responseLaptops);
    });
  }, []);

  for (let i = 0; i < laptops.length; i++) {
    optionList.push(
      <option key={Math.random()} id={laptops[i].id} value={laptops[i].name}>
        {laptops[i].name}
      </option>
    );
  }

  return optionList;
};

export default CpuOptions;
