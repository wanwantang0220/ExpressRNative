import JsonUtil from "./JsonUtil";
import {ErrorAnayle, NetWork_Request_Error} from "./ErrorAnayle";

export const header = (params) => ({
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JsonUtil.jsonToStr(params)
});


export function postNetData(url, params) {
    let header = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JsonUtil.jsonToStr(params)
    };
    return new Promise((resolve, reject) => {
        fetch(url, header)
            .then((response) => response.json())
            .then((responseData) => {
                console.log('response', responseData);
                resolve(responseData);
            })
            .catch((error) => {
                console.log(ErrorAnayle.getErrorBean(NetWork_Request_Error));
            })
            .done();
    })
}