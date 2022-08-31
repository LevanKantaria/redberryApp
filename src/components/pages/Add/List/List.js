import "./List.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const List = () => {
  const history = useHistory();
  const [laptops, setLaptops] = useState([]);

  const onBackHandler = ()=> {
    history.push('/welcome')
  };
  
  let laptopApi =
    "https://pcfy.redberryinternship.ge/api/laptops?token=681341299087a8ba7c5e905386371a21";

  useEffect(() => {
    axios.get(laptopApi).then((res) =>setLaptops(res.data.data));
    
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

            <Link style={{ fontSize: "18px", color: "#4386A9" }} to="/welcome">
              {" "}
              მეტის ნახვა
            </Link>
          </div>
        </div>
    )
  })
// console.log(laptops.length)
  // for(let key in laptops){


  //   return(
  //     <div className="laptop">
  //         <img
  //           className="laptop__artwork"
  //           src="https://source.unsplash.com/random/312x312?v=1"
  //         />
  //         <div className="laptop__details">
  //           <h2>{laptops[key]}</h2>

  //           <p className="laptop__artist">Pentium lll</p>

  //           <Link style={{ fontSize: "18px", color: "#4386A9" }} to="/welcome">
  //             {" "}
  //             მეტის ნახვა
  //           </Link>
  //         </div>
  //       </div>
  //   )
  // }

  return (
    <div>
      <div>
        <button className="back" onClick={onBackHandler}>
          <img src="./Screenshot_4.jpg"></img>
        </button>
      </div>
      <h3> ჩანაწერების სია</h3>

      <div className="laptops">
        {listItems }
        {/* <div className="laptop">
          <img
            className="laptop__artwork"
            src="https://source.unsplash.com/random/312x312?v=1"
          />
          <div className="laptop__details">
            <h2>სახელი გვარი</h2>

            <p className="laptop__artist">Pentium lll</p>

            <Link style={{ fontSize: "18px", color: "#4386A9" }} to="/welcome">
              {" "}
              მეტის ნახვა
            </Link>
          </div>
        </div>
        <div className="laptop">
          <img
            className="laptop__artwork"
            src="https://source.unsplash.com/random/311x311?v=2"
          />
          <div className="laptop__details">
            <h2>laptop Title</h2>
            <p className="laptop__artist">Artist Name</p>
            <Link style={{ fontSize: "18px", color: "#4386A9" }} to="/welcome">
              {" "}
              მეტის ნახვა
            </Link>
          </div>
        </div>

        <div className="laptop">
          <img
            className="laptop__artwork"
            src="https://source.unsplash.com/random/301x301?v=10"
          />
          <div className="laptop__details">
            <h2>laptop Title</h2>
            <p className="laptop__artist">Artist Name</p>
            <Link style={{ fontSize: "18px", color: "#4386A9" }} to="/welcome">
              {" "}
              მეტის ნახვა
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default List;
