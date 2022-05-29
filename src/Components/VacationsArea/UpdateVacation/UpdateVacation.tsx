import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import socketService from "../../../Services/SocketService";
import vacationsService from "../../../Services/VacationsService";
import "./UpdateVacation.css";

function UpdateVacation(): JSX.Element {
    const params = useParams()
    let id = +params.id

    const {register, handleSubmit, formState, setValue}=useForm<VacationModel>()
    const navigate = useNavigate()

    let today = new Date().toISOString().slice(0, 10)

    useEffect(()=>{

        vacationsService.getOneVacation(id)
        .then(vacation =>{
            setValue("description", vacation.description)
            setValue("destination", vacation.destination)
            setValue("endDate", vacation.endDate)
            setValue("startDate", vacation.startDate)
            setValue("price", vacation.price)

        })
        .catch(err => err.message)


    },[])

    async function submit(vacation: VacationModel):Promise<void>{
        try{
          vacation.vacationId = id
          await vacationsService.UpdateVacation(vacation)
          alert("new Vacation is Update")
 
               navigate("/vacations")
 
        }
        catch(err:any){
            alert(err.message)
 
        }
 
     }

    return (
        <div className="UpdateVacation">
            <form onSubmit={handleSubmit(submit)}>
           <h1>Update Product</h1>

           <label className="headers">description:</label>
               <input  className="vacation-text" type="text" minLength={10} maxLength={285} {...register("description", {
                   required: { value: true, message: "Missing description" }})} />
               <span>{formState.errors.description?.message}</span>

            <label  className="headers">destination:</label>
               <input className="vacation-text" type="text" minLength={2} {...register("destination",{
                   required: { value: true, message: "Missing destination" } })} />
               <span>{formState.errors.destination?.message}</span>

               <label className="headers">startDate:</label>
               <input className="vacation-text" type="date" min={today}  {...register("startDate", {
                   required: { value: true, message: "Missing Start Date" } }) } />
               <span>{formState.errors.startDate?.message}</span>

                <label className="headers">endDate:</label>
               <input className="vacation-text" type="date" min={today} {...register("endDate", {
                   required: { value: true, message: "Missing End Date" } }) } />
               <span>{formState.errors.endDate?.message}</span>

               <label className="headers">image:</label>
               <input className="vacation-text" type="file"  {...register("image", {
                   required: { value: true, message: "Missing image" } }) } />
               <span>{formState.errors.image?.message}</span>

               <label className="headers">price:</label>
               <input className="vacation-text" type="number" step={0.01} min={1} {...register("price", {
                   required: { value: true, message: "Missing price" } }) } />
               <span>{formState.errors.price?.message}</span>


               
               
               <button >Update Vacation</button>

           </form> 
			
        </div>
    );
}

export default UpdateVacation;
