import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const PositionOptions = (props) => {
  let id = useSelector((state) => state.main.id);

  const [positions, setPositions] = useState([]);
  let posGetUrl = "https://pcfy.redberryinternship.ge/api/positions";
  let optionList = [];

  useEffect(() => {
    let responsePositions = [];
    axios.get(posGetUrl).then((res) => {
      let dataRes = res.data.data;

      for (let key in dataRes) {
        responsePositions.push(dataRes[key]);
      }

      setPositions(responsePositions);
    });
  }, []);

  let filteredPositions= (positions.filter((item) => item.team_id == id));


  for (let i = 0; i < filteredPositions.length; i++) {
    optionList.push(
      <option
        key={Math.random()}
        id={filteredPositions[i].team_id}
        value={filteredPositions[i].id}
      >
        {filteredPositions[i].name}
      </option>
    );
  }
  return optionList
};

export default PositionOptions;
