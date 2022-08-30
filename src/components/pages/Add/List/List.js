import "./List.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const List = () => {

    const [laptops, setLaptops] = useState([]);
    let laptopApi = 'https://pcfy.redberryinternship.ge/api/laptops?token=681341299087a8ba7c5e905386371a21'

 axios.get(laptopApi).then(res=> console.log(res.data.data))


  let listItems =[];

  return (
    <div>
      <h3> ჩანაწერების სია</h3>

      <div className="laptops">
        <div className="laptop">
          <img
            className="laptop__artwork"
            src="https://source.unsplash.com/random/312x312?v=1"
          />
          <div className="laptop__details">
            <h2>სახელი გვარი</h2>

            <p className="laptop__artist">Pentium lll</p>

           <Link style={{fontSize:'18px' , color:'#4386A9'}} to='/welcome' > მეტის ნახვა</Link>
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
            <p className="laptop__desc">short.</p>
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
            <p className="laptop__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
              sint doloremque repellat, iste debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
