import JsonUtil from "./JsonUtil";
import {ErrorAnayle, NetWork_Request_Error} from "./ErrorAnayle";


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
                resolve(responseData);
            })
            .catch((error) => {
                reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
            })
            .done();
    })
}