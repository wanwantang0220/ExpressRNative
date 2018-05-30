import {Nuknown_Error, NetWork_Request_Error, ErrorAnayle} from './ErrorAnayle'
import ErrorBean from "./ErrorBean";
import JsonUtil from "./JsonUtil";


/*基础链接头*/
const BaseUrl = "https://manager.xilaikd.com/xilaireceiver_s";
// const BaseUrl = "http://10.10.10.166:1882";
/*待打单*/
const WAIT_ACCEPT_ORDER = "/order/queryWaitAcceptOrder";

const LOGIN = "/user/login";
const ADDRESS_LIST = "/addressBook/queryBySearchFilter";


export default class HttpManager {

    /**
     * 待打单列表
     * @param start
     * @param count
     */
    getWaitOrder(data,callback) {

        const  url = BaseUrl + WAIT_ACCEPT_ORDER;
        return new Promise((resolve, reject) => {
            this.postNetData(url,data)
                .then((data) => {
                    if (data != null) {
                        if(data.errCode==="000000"){
                            callback(data.object);
                        }else if(data.errDesc != null && data.errDesc!=""){
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        }else{
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error) => {
                if (error != null && error instanceof ErrorBean) {
                    reject(error)
                } else {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                }
            })
        })
    }


    /*请求数据=本地加网络*/
    fetchNetData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
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


    /*请求数据=本地加网络*/
    postNetData(url,data) {
        let header = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JsonUtil.jsonToStr(data)
        };
        return new Promise((resolve, reject) => {
            fetch(url,header)
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



    /**
     * 登录
     * @param data
     * @param callback
     */
    requestLogin(data,callback) {

        const url = BaseUrl + LOGIN;
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JsonUtil.jsonToStr(data)
        };

        console.log("data", JsonUtil.jsonToStr(data));
        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseText) => {
                callback(responseText);
            }).done();

    }

    /**
     * 地址列表
     * @param object
     * @param param2
     */
    requestAddresses(data, callback) {
        const  url = BaseUrl + ADDRESS_LIST;
        return new Promise((resolve, reject) => {
            this.postNetData(url,data)
                .then((data) => {
                    console.log("response address list ",data);
                    if (data != null) {
                        if(data.errCode==="000000"){
                            callback(data.object);
                        }else if(data.errDesc != null && data.errDesc!=""){
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        }else{
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error) => {
                if (error != null && error instanceof ErrorBean) {
                    reject(error)
                } else {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                }
            })
        })
    }
}


