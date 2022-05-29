import { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import Home from "../../HomeArea/Home/Home";
import AddVacation from "../../VacationsArea/AddVacation/AddVacation";
import Reports from "../../VacationsArea/Reports/Reports";
import UpdateVacation from "../../VacationsArea/UpdateVacation/UpdateVacation";
import Vacations from "../../VacationsArea/Vacations/Vacations";
import "./Routing.css";
import socketIOClient from "socket.io-client";
import {addVacationAction, deleteVacationAction, updateVacationAction} from '../../../Redux/VacationsState'


function Routing(): JSX.Element {
 // dispatch hook react-redux 
    const dispatch = useDispatch()

    useEffect(() => {
        const socket = socketIOClient("http://localhost:3001");
        socket.on("vacation_deleted", id => {
            console.log('vacation_deleted EVENT',id)
            dispatch(deleteVacationAction(id))
            alert("Vacation is deleted!")
        });
        socket.on("vacation_created", vacations => {
            console.log('vacation_created EVENT',vacations)
            dispatch(addVacationAction(vacations))
        });
        socket.on("vacation_updated", vacation => {
            console.log('vacation_updated EVENT',vacation)
            dispatch(updateVacationAction(vacation))
        });
      }, []);

    return (
        <div className="Routing">
            <Routes>
            
            <Route path="/vacations" element={<Vacations/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/home" element={<Home/>}/>

            
            <Route path="/add-vacation" element={<AddVacation/>}/>
            <Route path="/update-vacation/:id" element={<UpdateVacation/>}/>




            <Route path="/reports" element={<Reports/>}/>
            <Route path="/about" element={<About/>}/>

            <Route path="/" element={<Navigate to="/home"/>}/>

            {/* <Route path="*" element={<PageNotFound/>}/> */}


            </Routes>

			
        </div>
    );
}

export default Routing;
