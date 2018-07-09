import {BaseUrl, LOGIN, RESULT_OK} from "../data/HttpURL";
import JsonUtil from "../data/http/JsonUtil";
import {storage} from "../data/storage/Storage";
import * as types from "../constant/ActionType";


export function login(params) {

    const url = BaseUrl + LOGIN;
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JsonUtil.jsonToStr(params)
    };

    console.log("params", JsonUtil.jsonToStr(params));

    return dispatch => {
        dispatch(isLogining());
        let result = fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseText) => {
                if (responseText.errCode === RESULT_OK) {
                    //存储用户信息
                    storage.save('userInfo', responseText.object.staffInfo);
                    storage.save('sessionId', responseText.object.sessionId);
                    storage.save('ssoToken', responseText.object.ssoToken);
                    dispatch(verCodeSuccess(true, responseText.object));
                } else {
                    dispatch(verCodeError(false));
                }
            }).catch(() => {
                dispatch(verCodeError(false));
            }).done();
    };

}


export function acceptOrder(params) {

}


function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function verCodeSuccess(isSuccess, object) {
    console.log('success');
    return {
        type: types.LOGIN_IN_DONE,
        object: object,
    }
}

function verCodeError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    }
}