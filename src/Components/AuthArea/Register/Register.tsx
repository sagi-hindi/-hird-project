import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import "./Register.css";

function Register(): JSX.Element {
   const {register, handleSubmit, formState} = useForm<UserModel>()

   const navigate = useNavigate()

   async function submit(user: UserModel){
       try{
       
        await authService.register(user)
        console.log(user)
        alert("Register Succeeds")
        
        navigate("/Vacations")

       }
       catch(err: any){
           alert(err.message)

       }
   }

    return (
        <div className="Register Box">
            <h1>Register</h1>

            <form onSubmit={handleSubmit(submit)}>
            
            <TextField className="register-text" label="First Name" variant="standard"  {...register("firstName", {required: { value:true, message: "Missing First Name"}})}/>
            <span>{formState.errors?.firstName?.message}</span>

            <TextField className="register-text" label="Last Name" variant="standard"  {...register("lastName", {required: { value:true, message: "Missing Last Name"}})}/>
            <span>{formState.errors?.lastName?.message}</span>

            <TextField className="register-text" label="Username" variant="standard"  {...register("username", {required: { value:true, message: "Missing username"}})}/>
            <span>{formState.errors?.username?.message}</span>

            <TextField type="password" className="register-text" label="Password" variant="standard"  {...register("password", {required: { value:true, message: "Missing Password"}})}/>
            <span>{formState.errors?.password?.message}</span>

            <button>Register</button>
            </form>
			
        </div>
    );
}

export default Register;
