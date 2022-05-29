import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { logoutAction, registerAction } from "../Redux/AuthState";
import store from "../Redux/Store";
import config from "../utils/Config";

class AuthService{

    public async register(user:UserModel):Promise<void>{
        
        const response = await axios.post<string>(config.registerUrl, user);
        const token = response.data;
        store.dispatch(registerAction(token));
        console.log(token);

    }

    public async login(user:CredentialsModel):Promise<void>{
        
        const response = await axios.post<string>(config.login, user);
        const token = response.data;
        store.dispatch(registerAction(token));
        console.log(token);
    }

    public logout():void{
        store.getState().vacationsState.vacations = [];   
        store.dispatch(logoutAction());
    }

}

const authService = new AuthService()

export default authService;