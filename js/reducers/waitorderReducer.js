import * as types from "../constant/ActionType";

const initialState = {
    status: "...",
    isSuccess: false,
    object: null,
};


export default function waitorderList(state = initialState, action) {

    switch (action.type) {
        case types.WAITING_ORDER_IN_DOING:
            return {
                ...state,
                status: 'wait_loading',
                isSuccess: false,
                object: null
            };
            break;
        case types.WAITING_ORDER_IN_DONE:
            return {
                ...state,
                status: 'wait_success',
                isSuccess: true,
                object: action.object
            };
            break;
        case types.WAITING_ORDER_IN_ERROR:
            return {
                ...state,
                status: 'wait_error',
                isSuccess: true,
                object: null,
            };
            break;
        case types.ACCEPT_ORDER_IN_DOING:
            return {
                ...state,
                status: 'accept_loading',
                isSuccess: false,
                object: null
            };
            break;
        case types.ACCEPT_ORDER_IN_DONE:
            return {
                ...state,
                status: 'accept_success',
                isSuccess: true,
                object: action.object
            };
            break;
        case types.ACCEPT_ORDER_IN_ERROR:
            return {
                ...state,
                status: 'accept_error',
                isSuccess: true,
                object: null,
            };
            break;
        default:
            return state;
    }
}