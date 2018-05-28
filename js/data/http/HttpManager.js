
import {Nuknown_Error, NetWork_Request_Error, ErrorAnayle} from './ErrorAnayle'
import ErrorBean from "./ErrorBean";


/*基础链接头*/
const BaseUrl = "https://manager.xilaikd.com/xilaireceiver_s";
/*待打单*/
const Wait_Accept_Order = "/order/queryWaitAcceptOrder";

export default class HttpManager{


    /**
     * 待打单列表
     * @param start
     * @param count
     */
    getWaitOrder(start,count){

        return new Promise((resolve,reject) => {
            this.fetchNetData(BaseUrl+Wait_Accept_Order+"?start="+start+"&count="+count)
                .then((data)=>{
                    if (data != null) {
                        if (data.code != null && typeof data.code == 'number') {
                            reject(ErrorAnayle.getErrorBean(data.code))
                        } else if (data.count != null && data.count>0){
                            resolve(data);
                        } else {
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error)=>{
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
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then((response)=>response.json())
                .then((responseData)=>{
                    resolve(responseData);
                })
                .catch((error)=>{
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                })
                .done();
        })
    }
}