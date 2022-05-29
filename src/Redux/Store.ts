import { combineReducers, createStore } from "redux";
import { vacationsReducer } from './VacationsState';
import { authReducer } from './AuthState';


const reducers = combineReducers({vacationsState:vacationsReducer, authState:authReducer});

const store = createStore(reducers);

export default store;