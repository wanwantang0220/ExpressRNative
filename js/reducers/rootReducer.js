import {combineReducers} from "redux";
import loginIn from './loginReducer';
import waitorderList from './waitorderReducer';

const rootReducer = combineReducers({
    loginIn: loginIn,
    waitorderList:waitorderList
});

export default rootReducer;


