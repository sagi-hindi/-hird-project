import VacationModel from "../Models/VacationModel";

export class VacationsState{
    public vacations: VacationModel[] = [];
}

//vacations action type - any action which can be done on the above vacation state:
export enum VacationsActionType{
    FetchVacations = "FetchVacations",
    AddVacations = "AddVacations",
    UpdateVacations = "UpdateVacations",
    DeleteVacation = "DeleteVacation",
    AddFollow = "AddFollow",
    RemoveFollow = "AddFollow",

}

export interface VacationsAction{
    type: VacationsActionType;
    payload: any;
}

export function fetchVacationsAction(vacations: VacationModel[]): VacationsAction{
    return { type: VacationsActionType.FetchVacations, payload: vacations };

}
export function addVacationAction(vacation: VacationModel): VacationsAction {
    return {type: VacationsActionType.AddVacations, payload: vacation};

}

export function updateVacationAction(vacation: VacationModel): VacationsAction {
    return{type: VacationsActionType.UpdateVacations, payload:vacation};

}

export function deleteVacationAction(id: number): VacationsAction {
    return {type: VacationsActionType.DeleteVacation, payload:id};

}
export function addFollowAction(vacations: VacationModel[]): VacationsAction {
    return {type: VacationsActionType.AddFollow, payload: vacations};

}
export function removeFollowAction(vacations: VacationModel[]): VacationsAction {
    return {type: VacationsActionType.RemoveFollow, payload: vacations};

}

export function vacationsReducer(state = new VacationsState(),  action: VacationsAction): VacationsState{
    const {type,payload} = action
    switch(type){
        case VacationsActionType.FetchVacations:
        case VacationsActionType.AddFollow:
        case VacationsActionType.RemoveFollow:
            return {...state, vacations: payload}
        case VacationsActionType.AddVacations:
            return {...state, vacations: [...state.vacations, payload]}
        case VacationsActionType.UpdateVacations:
            const newVacations=[...state.vacations]
            const indexToUpdate = state.vacations.findIndex(v => v.vacationId === payload.vacationId)
            if(indexToUpdate >= 0) {
                newVacations[indexToUpdate] = payload;
            }
            return {...state, vacations: newVacations} 
        case VacationsActionType.DeleteVacation:
            return {...state, vacations: state.vacations.filter(v=>v.vacationId !== payload)}
        default: return state
    }
}