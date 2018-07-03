import {BaseUrl} from "../data/HttpURL";
import JsonUtil from "../data/http/JsonUtil";
import {LOGIN_REGISTER, RESULT_OK} from "../data/ContastURL";
import {storage} from "../data/storage/Storage";
import * as types from "../constant/ActionType";


export function login(params) {
    const url = BaseUrl + LOGIN_REGISTER;
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JsonUtil.jsonToStr(params)
    };

    console.log("params", JsonUtil.jsonToStr(params));
    return dispatch=>{

        dispatch(isLogining());
        let result = fetch(url,fetchOptions)
            .then((response)=>response.json())
            .then((responseText)=> {
                if(responseText.errCode === RESULT_OK){
                    //存储用户信息
                    let authUser = responseText.object.authUser;
                    let staffInfo = responseText.object.staffInfo;
                    storage.save('userName', authUser.userName);
                    storage.save('userId', authUser.userId);
                    storage.save('staffInfo', staffInfo);
                    //存储用户Token
                    storage.save('cookie', 'SESSION=' + responseText.object.sessionId + ';SSOTOKEN=' + responseText.object.ssoToken);
                    dispatch(verCodeSuccess(true,responseText.object));
                }else{
                    dispatch(verCodeError(false));
                }
            }).catch(()=>{
                dispatch(verCodeError(false));
            }).done();
    };

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