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
        dispatch(onWaitOrderLoading());
        let result = postNetData(url, params)
            .then((response) => {
                if (response != null) {
                    if (response.errCode === RESULT_OK) {
                        dispatch(onWaitOrderSuccess(true, response.object));
                    } else {
                        dispatch(onWaitOrderError(false));
                    }
                } else {
                    dispatch(onWaitOrderError(false));
                }
            }).catch((error) => {
                if (error != null && error instanceof ErrorBean) {
                    dispatch(onWaitOrderError(false));
                } else {
                    dispatch(onWaitOrderError(false));
                }
            })
    };

}


export function acceptOrder(params) {
    const url = BaseUrl + ACCEPT_ORDER;

    return dispatch => {
        dispatch(onAcceptOrderLoading());
        let result = postNetData(url, params)
            .then((response) => {
                if (response != null) {
                    if (response.errCode === RESULT_OK) {
                        dispatch(onAcceptOrderSuccess(true, response.object));
                        // waitorderList(Wait_OrderList_Param);
                    } else {
                        dispatch(onAcceptOrderError(false));
                    }
                } else {
                    dispatch(onAcceptOrderError(false));
                }
            });
    }
}

function onWaitOrderLoading() {
    return {
        type: types.WAITING_ORDER_IN_DOING
    }
}

function onWaitOrderSuccess(isSuccess, object) {
    return {
        type: types.WAITING_ORDER_IN_DONE,
        object: object,
    }
}

function onWaitOrderError(isSuccess) {
    return {
        type: types.WAITING_ORDER_IN_ERROR,
    }
}

function onAcceptOrderLoading() {
    return {
        type: types.ACCEPT_ORDER_IN_DOING
    }
}

function onAcceptOrderSuccess(isSuccess, object) {
    return {
        type: types.ACCEPT_ORDER_IN_DONE,
        object: object,
    }
}

function onAcceptOrderError(isSuccess) {
    return {
        type: types.ACCEPT_ORDER_IN_ERROR,
    }
}
