import * as types from "../constant/ActionType";

const initialState = {
    status: "...",
    isSuccess: false,
    list: [],

};


export default function waitorderList(state = initialState, action) {

    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                status: 'loading',
                isSuccess: false,
                list: []
            };
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status:'success',
                isSuccess:true,
                list:action.object
            };
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: 'error',
                isSuccess: true,
                list: [],
            };
        default:
            return state;
    }
}