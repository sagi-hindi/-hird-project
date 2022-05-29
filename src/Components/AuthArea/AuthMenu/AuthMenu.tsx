import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user,setUser] = useState<UserModel>(null);

    useEffect(()=>{
        setUser(store.getState().authState.user);
        console.log(user)

        let unsubscribe  = store.subscribe(()=>{
        setUser(store.getState().authState.user)
        });

        return () => unsubscribe();
        
    },[]);


    return (
        <div className="AuthMenu">
			{user === null ? 
            <> 
            <span>Hello Guest</span>
            <span> | </span>
            <NavLink to="/login">Login</NavLink>
            <span> | </span>
            <NavLink to="/register">Register</NavLink>
            </>
            :
            <>
            <span>Hello {user.firstName} {user.lastName}</span>
            <span> | </span>
            <NavLink to="/logout">Logout</NavLink>
            </>

            
        }
        </div>
    );
}

export default AuthMenu;
