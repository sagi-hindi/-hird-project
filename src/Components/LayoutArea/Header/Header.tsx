import "./Header.css";
import AppBar from "@mui/material/AppBar"
import ToolBar from "@mui/material/Toolbar"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
// import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import store from "../../../Redux/Store";
import { useEffect, useState } from "react";
import UserModel from "../../../Models/UserModel";



function Header(): JSX.Element {

    const [user,setUser] = useState<UserModel>(null);

    useEffect(()=>{
        setUser(store.getState().authState.user);

        let unsubscribe  = store.subscribe(()=>{
        setUser(store.getState().authState.user)
        });

        return () => unsubscribe();
        
    },[]);


 
   



    return (
        <div className="Header">
            <AppBar>
                <ToolBar>
                {/* <FlightTakeoffIcon/> */}
                    <Typography>
                        
              <Button className="menu" color="secondary"  variant="text" size="large" key={"Home"}>
              <NavLink  to={"/home"}>Home</NavLink>
              </Button>
              {user === null ?
              <>
              </>
                : 
                <>
              <Button className="menu" color="secondary"  variant="text" size="large" key={"Vacations"}>
              <NavLink  to={"/vacations"}>Vacations</NavLink>
              </Button>
              {store.getState().authState?.user?.role === "Admin" ?
                <>
              <Button className="menu" color="inherit"  variant="text" size="large" key={"Reports"}>
              <NavLink  to={"/reports"}>Reports</NavLink>
              </Button>
              </>
              :
              <></>
            }
              <Button className="menu" color="inherit"  variant="text" size="large" key={"About"}>
              <NavLink  to={"/about"}>About</NavLink>
              </Button>
              </>
              }
              {store.getState().authState?.user?.role === "Admin" ?
              <>
                <Button className="menu" color="inherit"  variant="text" size="large" key={"Add-Vacation"}>
                <NavLink  to={"/add-vacation"}>Add Vacation ➕</NavLink>
                </Button>
              </>
                :
                <>
                </> 
            }
                    </Typography>
                <div className="login"> 
                    <AuthMenu/>
                    </div>      
                    </ToolBar>
                    </AppBar>
			
        </div>
    );
}

export default Header;


