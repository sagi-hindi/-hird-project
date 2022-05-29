import axios from "axios";
import store from "../Redux/Store";
import { addFollowAction, removeFollowAction } from "../Redux/VacationsState";
import config from "../utils/Config";
import VacationModel from "../Models/VacationModel";
import FollowModel from "../Models/FollowModel";


class FollowService{

    
    public async fetchNumberOfFollowers():Promise<FollowModel[]>{
        const response = await axios.get<FollowModel[]>(config.numberOfFollowersUrl)
        const numberOfFollowVacations = response.data
        return numberOfFollowVacations
    }



    public async addFollow(id:number):Promise<void>{
        await axios.post(config.vacationsAddFollow + id);
        const response = await axios.get<VacationModel[]>(config.vacationsUrl)
        const vacations = response.data
        store.dispatch(addFollowAction(vacations));
    }

    public async removeFollow(id:number):Promise<void>{
        await axios.delete(config.vacationsRemoveFollow + id);
        const response = await axios.get<VacationModel[]>(config.vacationsUrl)
        const vacations = response.data
        store.dispatch(removeFollowAction(vacations));    }
    

}

const followService = new FollowService() 

export default followService