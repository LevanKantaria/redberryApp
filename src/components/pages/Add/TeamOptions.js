import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const TeamOptions = (props) => {
  const [teams, setTeams] = useState([]);
  let teamGetUrl = "https://pcfy.redberryinternship.ge/api/teams";
  let optionList = [];
  

  useEffect(() => {
    let responseTeams = [];
    axios.get(teamGetUrl).then((res) => {
      let dataRes = res.data.data;

      for (let key in dataRes) {
        responseTeams.push(dataRes[key]);
      }

      setTeams(responseTeams);
    });
  }, []);

  for (let i = 0; i < teams.length; i++) {
    
    optionList.push(
      <option key={Math.random()} id={teams[i].id} value={teams[i].id}>
        {teams[i].name}
      </option>
    );
  }

  return optionList;
};

export default TeamOptions;

