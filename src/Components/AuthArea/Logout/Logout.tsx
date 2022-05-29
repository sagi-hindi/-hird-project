import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate()

    useEffect(()=>{
    
            authService.logout();
            alert("Logout Successfully");      
            navigate("/home");
              

    }, []);

    return null;
}

export default Logout;
