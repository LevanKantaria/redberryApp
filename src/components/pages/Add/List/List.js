import "./List.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const List = () => {
  const width = useSelector((state) => state.main.width);

  const history = useHistory();
  const [laptops, setLaptops] = useState([]);
  let linkToDetails = '';

  const onBackHandler = ()=> {
    history.push('/welcome')
  };
  
  let laptopApi =
    "https://pcfy.redberryinternship.ge/api/laptops?token=681341299087a8ba7c5e905386371a21";

  useEffect(() => {
    axios.get(laptopApi).then((res) =>{setLaptops(res.data.data)
    
    });
    
  }, []);

console.log(laptops)
  let listItems = [];
  listItems = laptops.map((item) => {
    return(
      <div className="laptop" key={Math.random()}>
          <img
            className="laptop__artwork"
            src={'https://pcfy.redberryinternship.ge/' + item.laptop.image }
          />
          <div className="laptop__details">
            <h2>{item.user.name} {item.user.surname}</h2>

            <p className="laptop__artist">{item.laptop.name}</p>

            <Link style={{ fontSize: "18px", color: "#4386A9" }} to={'/laptop/'+ item.laptop.id} >
              {" "}
              მეტის ნახვა
            </Link>
          </div>
        </div>
    )
  })


  return (
    <div>
      <div className="backDiv">
      {width > 1000 &&<button className='back' onClick={onBackHandler}>
          <img src="/Screenshot_23.jpg"></img>
        </button>}
        {width < 1000 &&<button className='back' onClick={onBackHandler}>
          <img src="/Screenshot_24.jpg"></img>
        </button>}
      </div>
      <h3> ჩანაწერების სია</h3>

      <div className="laptops">
        {listItems }
       
      </div>
    </div>
  );
};

export default List;
