import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import classes from "./Details.module.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Details = () => {
  const width = useSelector((state) => state.main.width);

  const [positions, setPositions] = useState([]);
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  let conditionOptions = { used: "მეორადი", new: "ახალი" };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [laptopName, setLaptopName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [cpu, setCpu] = useState("");
  const [hardDrive, setHardDrive] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [ram, setRam] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");
  let teamVar = [];
  let positionsVar = [];

  let posGetUrl = "https://pcfy.redberryinternship.ge/api/positions";
  let brandsGetUrl = "https://pcfy.redberryinternship.ge/api/brands";

  let optionList = [];
  let brandsVar = [];
  const params = useParams();
  const id = params.id;

  let laptopUrl =
    "https://pcfy.redberryinternship.ge/api/laptop/" +
    id +
    "?token=681341299087a8ba7c5e905386371a21";

  let teamGetUrl = "https://pcfy.redberryinternship.ge/api/teams";

  useEffect(() => {
    let responseBrands = [];
    axios.get(brandsGetUrl).then((res) => {
      let dataRes = res.data.data;

      for (let key in dataRes) {
        responseBrands.push(dataRes[key]);
      }

      brandsVar = responseBrands;
    });

    let responsePositions = [];
    axios.get(posGetUrl).then((resp) => {
      let dataRes = resp.data.data;

      for (let key in dataRes) {
        responsePositions.push(dataRes[key]);
      }

      setPositions(responsePositions);
      positionsVar = responsePositions;
    });
    let responseTeams = [];
    axios
      .get(teamGetUrl)
      .then((res) => {
        let dataRes = res.data.data;
        for (let key in dataRes) {
          responseTeams.push(dataRes[key]);
        }

        setTeams(responseTeams);
        teamVar = responseTeams;
      })

      .then(
        axios.get(laptopUrl).then((res) => {
          let data = res.data.data;
          console.log(data);
          setImage("https://pcfy.redberryinternship.ge" + data.laptop.image);
          setName(data.user.name + " " + data.user.surname);
          setLaptopName(data.laptop.name);
          setBrandId(brandsVar[+data.laptop.brand_id - 1].name);
          setCpu(data.laptop.cpu);
          setHardDrive(data.laptop.hard_drive_type);
          setPrice(data.laptop.price);
          setDate(data.laptop.purchase_date);
          setRam(data.laptop.ram);
          setState(data.laptop.state);
          setEmail(data.user.email);
          setNumber(data.user.phone_number);
          console.log(teamVar);
          setTeam(teamVar[+data.user.team_id - 1].name);
          setPosition(positionsVar[data.user.position_id].name);
          console.log(data.user.team_id);
          console.log(teamVar);
        })
      );
  }, []);

  const onBackHandler = (e) => {
    e.preventDefault();
    history.push("/list");
  };

  console.log(teams);
  return (
    <div>
      <div>
        {width > 1000 &&<button className={classes.back} onClick={onBackHandler}>
          <img src="/Screenshot_23.jpg"></img>
        </button>}
        {width < 1000 &&<button className={classes.back} onClick={onBackHandler}>
          <img src="/Screenshot_24.jpg"></img>
        </button>}
      </div>
      <h1> ლეპტოპის ინფო</h1>
      <div className={classes.topDiv}>
        <div>
          <img className={classes.image} src={image} alt="laptop image"></img>
        </div>
        <div className={classes.userInfo}>
          <div className={classes.weighted}>
            <section>სახელი: </section>
            <section>თიმი:</section>
            <section>პოზიცია:</section>
            <section>მეილი:</section>
            <section>ტელ. ნომერი:</section>
          </div>
          <div className={classes.greyText}>
            <section>{name}</section>
            <section>{team}</section>
            <section>{position}</section>
            <section>{email}</section>
            <section>{number}</section>
          </div>
        </div>
      </div>
      {width > 1000 && <hr style={{ width: "1178px", margin: "auto" }}></hr>}
      {width < 1000 && (
        <hr
          style={{
            width: "90%",
            margin: "auto",
            marginBottom: "200px",
            position: "relative",
            top: "100px",
          }}
        ></hr>
      )}

      {width > 1000 && (
        <div className={classes.topDiv}>
          <div className={classes.userInfo}>
            <div className={classes.weighted}>
              <section>ლეპტოპის სახელი: </section>
              <section>ლეპტოპის ბრენდი:</section>
              <section>RAM:</section>
              <section>მეხსიერების ტიპი:</section>
            </div>
            <div className={classes.greyText}>
              <section>{laptopName}</section>
              <section>{brandId}</section>
              <section>{ram}</section>
              <section>{hardDrive}</section>
            </div>
          </div>
          <div>
            <div className={classes.userInfo2}>
              <div className={classes.weighted}>
                <section>CPU: </section>
                <section>CPU-ს ბირთვი:</section>
                <section>CPU-ს ნაკადი:</section>
              </div>
              <div className={classes.greyText}>
                <section>{cpu.name}</section>
                <section>{cpu.cores}</section>
                <section>{cpu.threads}</section>
              </div>
            </div>
          </div>
        </div>
      )}
      {width < 1000 && (
        <div className={classes.topDiv}>
          <div className={classes.userInfo}>
            <div className={classes.weighted}>
              <section>ლეპტოპის სახელი: </section>
              <section>ლეპტოპის ბრენდი:</section>
              <section>RAM:</section>
              <section>მეხსიერების ტიპი:</section>
              <section>CPU: </section>
              <section>CPU-ს ბირთვი:</section>
              <section>CPU-ს ნაკადი:</section>
            </div>
            <div className={classes.greyText}>
              <section>{laptopName}</section>
              <section>{brandId}</section>
              <section>{ram}</section>
              <section>{hardDrive}</section>
              <section>{cpu.name}</section>
              <section>{cpu.cores}</section>
              <section>{cpu.threads}</section>
            </div>
          </div>
        </div>
      )}
      <div className={classes.divCorrection}>
        {width > 1000 && <hr style={{ width: "1178px", margin: "auto" }}></hr>}
        {width < 1000 && <hr style={{ width: "90%", margin: "auto" }}></hr>}
        {width > 1000 && (
          <div className={classes.topDiv}>
            <div className={classes.userInfo}>
              <div className={classes.weighted}>
                <section>ლეპტოპის მდგომარეობა: </section>
                <section>ლეპტოპის ფასი:</section>
              </div>
              <div className={classes.greyText}>
                <section>{conditionOptions[state]}</section>
                <section>{price}</section>
              </div>
            </div>
            <div>
              <div className={classes.userInfo2}>
                <div className={classes.weighted}>
                  <section>შეძენის რიცხვი: </section>
                </div>
                <div className={classes.greyText}>
                  <section>{date}</section>
                </div>
              </div>
            </div>
          </div>
        )}
        {width < 1000 && (
          <div className={classes.topDiv}>
            <div className={classes.userInfo}>
              <div className={classes.weighted}>
                <section>ლეპტოპის მდგომარეობა: </section>
                <section>ლეპტოპის ფასი:</section>
                <section>შეძენის რიცხვი: </section>
              </div>
              <div className={classes.greyText}>
                <section>{conditionOptions[state]}</section>
                <section>{price}</section>
                <section>{date}</section>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
