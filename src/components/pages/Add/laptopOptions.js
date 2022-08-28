import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const LaptopOptions = (props) => {
  const [laptops, setLaptops] = useState([]);
  let brandsGetUrl = "https://pcfy.redberryinternship.ge/api/brands";
  let optionList = [];

  useEffect(() => {
    let responseLaptops = [];
    axios.get(brandsGetUrl).then((res) => {
      let dataRes = res.data.data;

      for (let key in dataRes) {
        responseLaptops.push(dataRes[key]);
      }

      setLaptops(responseLaptops);
    });
  }, []);

  for (let i = 0; i < laptops.length; i++) {
    optionList.push(
      <option key={Math.random()} id={laptops[i].id} value={laptops[i].id}>
        {laptops[i].name}
      </option>
    );
  }

  return optionList;
};

export default LaptopOptions;
