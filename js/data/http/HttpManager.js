import {Nuknown_Error, NetWork_Request_Error, ErrorAnayle} from './ErrorAnayle'
import ErrorBean from "./ErrorBean";
import JsonUtil from "./JsonUtil";


/*基础链接头*/
// const BaseUrl = "https://manager.xilaikd.com/xilaireceiver_s";
// const BaseUrl = "http://10.10.10.166:1882";
export const BaseUrl = "http://10.20.0.48:1881";

const ADDRESS_LIST = "/addressBook/queryBySearchFilter";
const ADDRESS_EDIT = "/addressBook/update";

//个人信息
const USER_INFO_BY_UUID = "/staffMessage/findByUuid";
/*我的收件*/
const MY_ORDER_LIST = "/expressOrderDetail/searchOrdersByFilter";
/*消息列表*/
const MESSAGE_LIST = "/message/retrieveAll";

export default class HttpManager {


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
    postNetData(url, data) {
        let header = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JsonUtil.jsonToStr(data)
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

    /***
     * 用户信息
     * @param param
     * @param callback
     * @returns {Promise<any>}
     */
    getUserInfo(data, callback) {
        const url = BaseUrl + USER_INFO_BY_UUID;
        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    console.log("response address list ", data);
                    if (data != null) {
                        if (data.errCode === "000000") {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
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


    /**
     * 地址列表
     * @param object
     * @param param2
     */
    requestAddresses(data, callback) {
        const url = BaseUrl + ADDRESS_LIST;
        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    console.log("response address list ", data);
                    if (data != null) {
                        if (data.errCode === "000000") {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
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

    /**
     * 编辑地址
     * @param data
     * @param callback
     */
    postEditAddress(data, callback) {
        const url = BaseUrl + ADDRESS_EDIT;
        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    if (data != null) {
                        if (data.errCode === "000000") {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
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


    /**
     * 待打单列表
     */
    getMyOrderList(data, callback) {

        const url = BaseUrl + MY_ORDER_LIST;

        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    if (data != null) {
                        if (data.errCode === "000000") {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
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


    /***
     * 消息列表
     * @param param
     * @param callback
     */
    getMessageList(param, callback) {
        const url = BaseUrl + MESSAGE_LIST;

        return new Promise((resolve, reject) => {
            this.postNetData(url, param)
                .then((data) => {
                    if (data != null) {
                        if (data.errCode === "000000") {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error) => {
                // if (error != null && error instanceof ErrorBean) {
                //     reject(error)
                // } else {
                reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                // }
            })
        })
    }

}


