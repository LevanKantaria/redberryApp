import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const LaptopOptions = (props) => {
  const [brands, setBrands] = useState([]);
  let brandsGetUrl = "https://pcfy.redberryinternship.ge/api/brands";
  let optionList = [];

  useEffect(() => {
    let responseLaptops = [];
    axios.get(brandsGetUrl).then((res) => {
      let dataRes = res.data.data;

      for (let key in dataRes) {
        responseLaptops.push(dataRes[key]);
      }

      setBrands(responseLaptops);
    });
  }, []);

  for (let i = 0; i < brands.length; i++) {
    optionList.push(
      <option key={Math.random()} id={brands[i].id} value={brands[i].id}>
        {brands[i].name}
      </option>
    );
  }

  return optionList;
};

export default LaptopOptions;
