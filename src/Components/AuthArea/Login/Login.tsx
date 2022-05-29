import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import "./Login.css";

function Login(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CredentialsModel>()

    const navigate = useNavigate()
 
    async function submit(user: CredentialsModel){
        try{
        
         await authService.login(user)
    
         console.log(user)
         alert("Login Succeeds")

         navigate("/Vacations")
 
        }
        catch(err: any){
            alert(err.message)
 
        }
            
        
    }



    return (
        <div className="Login">
                        <h1>Login</h1>

        <form onSubmit={handleSubmit(submit)}>

        <TextField className="login-text" label="Username" variant="standard"  {...register("username", {required: { value:true, message: "Missing username"}})}/>
        <span>{formState.errors?.username?.message}</span>

        <TextField type="password" className="login-text" label="Password" variant="standard"  {...register("password", {required: { value:true, message: "Missing Password"}})}/>
        <span>{formState.errors?.password?.message}</span>

        <button>Login</button>
        </form>

        </div>
			
    );
}

export default Login;
