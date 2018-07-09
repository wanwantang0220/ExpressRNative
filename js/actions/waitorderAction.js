import * as types from "../constant/ActionType";
import {ACCEPT_ORDER, BaseUrl, LOGIN, RESULT_OK, WAIT_ACCEPT_ORDER} from "../data/HttpURL";
import ErrorBean from "../data/http/ErrorBean";
import {ErrorAnayle, NetWork_Request_Error} from "../data/http/ErrorAnayle";
import {postNetData} from "../data/http/HttpManagerNew";
import {Wait_OrderList_Param} from "../constant/BaseContant";


export function waitorderList(object) {
    const url = BaseUrl + WAIT_ACCEPT_ORDER;
    let params = Wait_OrderList_Param;
    return dispatch => {
        dispatch(onLoading());
        let result = postNetData(url, params)
            .then((response) => {
                if (response != null) {
                    if (response.errCode === RESULT_OK) {
                        dispatch(onSuccess(true, response.object));
                    } else {
                        dispatch(onError(false));
                    }
                } else {
                    dispatch(onError(false));
                }
            });
    };

}


export function acceptOrder(params) {
    const url = BaseUrl + ACCEPT_ORDER;

    return dispatch => {
        dispatch(onLoading());
        let result = postNetData(params)
            .then((response) => {
                if (response != null) {
                    if (response.errCode === RESULT_OK) {
                        dispatch(onSuccess(true, response.object));
                        // waitorderList();
                    } else {
                        dispatch(onError(false));
                    }
                } else {
                    dispatch(onError(false));
                }
            });
    }
}

function onLoading() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function onSuccess(isSuccess, object) {
    return {
        type: types.LOGIN_IN_DONE,
        object: object,
    }
}

function onError(isSuccess) {
    return {
        type: types.LOGIN_IN_ERROR,
    }
}