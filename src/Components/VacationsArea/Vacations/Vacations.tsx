import { useEffect, useState } from "react";
import {  useSelector, useDispatch } from 'react-redux'
import vacationsService from "../../../Services/VacationsService";
import VacationCard from "../VacationCard/VacationCard";
import "./Vacations.css";


function Vacations(): JSX.Element {

    const vacations = useSelector((store: any) => store.vacationsState.vacations)



    const getVacations = async ()=>{
         await vacationsService.fetchVacations()
    }
useEffect(()=>{
    getVacations()
},[])

    return (
        <div className="Vacations">

            <h1>Vacations</h1>
     
            <div className="vacations-child">
            {vacations.map((item: any) => <VacationCard key={item.vacationId} vacation={item}/>)}

            </div>


			
        </div>
    );
}

export default Vacations;


