import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import vacationsService from "../../../Services/VacationsService";
import "./AddVacation.css";

function AddVacation(): JSX.Element {
    const {register, handleSubmit, formState}=useForm<VacationModel>()

    const navigate = useNavigate()

    async function submit(vacation: VacationModel):Promise<void>{
       try{
         await vacationsService.addNewVacation(vacation)
         alert("new Vacation is added")

              navigate("/vacations")

       }
       catch(err:any){
           alert(err.message)

       }

    }

    return (
        <div className="AddVacation">

<form onSubmit={handleSubmit(submit)}>
           <h1>Add Product</h1>
               <TextField label="description" className="vacation-text" type="text" {...register("description", {
                   required: { value: true, message: "Missing description" }
               })} />
               <span>{formState.errors.description?.message}</span>

               <TextField label="destination" className="vacation-text" type="text" {...register("destination",{
                   required: { value: true, message: "Missing destination" } })} />
               <span>{formState.errors.destination?.message}</span>


               <TextField label="startDate" className="vacation-text" type="date" {...register("startDate", {
                   required: { value: true, message: "Missing Start Date" } }) } />
               <span>{formState.errors.startDate?.message}</span>

               
               <TextField label="endDate" className="vacation-text" type="date" {...register("endDate", {
                   required: { value: true, message: "Missing End Date" } }) } />
               <span>{formState.errors.endDate?.message}</span>

               
               <TextField label="image" className="vacation-text" type="file"  {...register("image", {
                   required: { value: true, message: "Missing image" } }) } />
               <span>{formState.errors.image?.message}</span>


               <TextField label="price" className="vacation-text" type="number" {...register("price", {
                   required: { value: true, message: "Missing price" } }) } />
               <span>{formState.errors.price?.message}</span>


               
               
               <button >Add Vacation</button>

           </form>
			
        </div>
    );
}

export default AddVacation;
