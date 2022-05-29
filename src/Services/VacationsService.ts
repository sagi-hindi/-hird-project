import axios from "axios";
import VacationModel from "../Models/VacationModel";
import { addVacationAction, fetchVacationsAction, updateVacationAction } from "../Redux/VacationsState";
import store from "../Redux/Store";
import config from "../utils/Config";

class VacationsService{
    public async fetchVacations():Promise<VacationModel[]>{

        if(store.getState().vacationsState.vacations.length === 0){
            const response = await axios.get<VacationModel[]>(config.vacationsUrl)
            const vacations = response.data
            store.dispatch(fetchVacationsAction(vacations));
            console.log("from server")
        }
        console.log("from redux")
        return store.getState().vacationsState.vacations;
    }

    public async getOneVacation(id:number): Promise<VacationModel>{
        let vacation = store.getState().vacationsState.vacations.find(v => v.vacationId === id);
        if(!vacation){
            const response = await axios.get<VacationModel>(config.vacationsUrl + id)
            vacation = response.data
        }
        return vacation

    }

    public async deleteOneVacation(id:number):Promise<void>{
        await axios.delete(config.vacationsUrl + id);
    }

    public async addNewVacation(vacation: VacationModel):Promise<void>{
        const formData = new FormData();
        formData.append("description", vacation.description);
        formData.append("destination", vacation.destination);
        formData.append("imageName", vacation.imageName);
        formData.append("startDate", vacation.startDate);
        formData.append("endDate", vacation.endDate);
        formData.append("price", vacation.price.toString());
        formData.append("image", vacation.image.item(0));

        await axios.post<VacationModel>(config.addVacationsUrl, formData);

    }

    public async UpdateVacation(vacation: VacationModel):Promise<void>{
        const formData = new FormData();
        formData.append("description", vacation.description);
        formData.append("destination", vacation.destination);
        formData.append("imageName", vacation.imageName);
        formData.append("startDate", vacation.startDate);
        formData.append("endDate", vacation.endDate);
        formData.append("price", vacation.price.toString());
        formData.append("image", vacation.image.item(0));

        await axios.put<VacationModel>(config.vacationsUrl + vacation.vacationId, formData);


    }

    
            



}

const vacationsService = new VacationsService()

export default vacationsService