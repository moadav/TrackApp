import { NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <img className="movingTrain" src="train.png" alt="Moving-alien" />
    
      <div className="home">

        <h1>TrackApp</h1>
        <p>Welcome to TrackApp. </p>
        <p>Best app to view your reports</p>
        <NavLink to={"/tracks"}>Get Started</NavLink>
      </div>
    </>
  );
};

export default Home;
