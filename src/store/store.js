import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    //redux masi kosongan
});

const ConfigureStore = () => {
    return createStore(rootReducer);
}

export default ConfigureStore;