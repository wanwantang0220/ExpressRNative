import * as types from "../constant/ActionType";
import {BaseUrl, LOGIN, RESULT_OK, WAIT_ACCEPT_ORDER} from "../data/HttpURL";
import ErrorBean from "../data/http/ErrorBean";
import {ErrorAnayle, NetWork_Request_Error} from "../data/http/ErrorAnayle";
import {postNetData} from "../data/http/HttpManagerNew";


export function waitorderList(params) {
    const url = BaseUrl + WAIT_ACCEPT_ORDER;
    return dispatch =>{
        dispatch(onLoading());
        let result = postNetData(url,params)
            .then((response)=>{
                if (response != null) {
                    if (responseText.errCode === RESULT_OK) {
                        dispatch(onSuccess(true,response.object));
                    }else{
                        dispatch(onError(false));
                    }
                }else{
                    dispatch(onError(false));
                }
            });
    };

}


function onLoading() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function onSuccess(isSuccess, object) {
    console.log('success');
    return {
        type: types.LOGIN_IN_DONE,
        object: object,
    }
}

function onError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    }
}