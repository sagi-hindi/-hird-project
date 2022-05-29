import { NavLink } from "react-router-dom";
import "./Home.css";
import travel from "../../../Assets/images/Travel.png"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h1>Wellocme To Travel.com!</h1>
            <hr/>
            <div className="home-par">

            <h2>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.  </h2>
                
                <p>That's why we create travels.com! Our purpose is totally tied to our product (that's our trips). We're all about sustainable, 
                experience-rich travel. That means using our trips as a force for good, as well as good times. 
                We're genuinely connected to and invested in the places we go, 
                the people we meet along the way, and the communities at the heart of every Intrepid experience</p>
                </div>
                <div className="login-register">
                <p>
                To view vacations and make a reservation, Please <NavLink to={"/register"}>register</NavLink>. 
                Already a customer? <NavLink to={"/login"}>Sign In</NavLink> 
                </p>
                </div>
                <img src={travel}/>
        </div>
        
    );
}

export default Home;
