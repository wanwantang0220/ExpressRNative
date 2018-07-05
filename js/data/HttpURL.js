/*基础链接头*/
export const BaseUrl = "https://manager.xilaikd.com/xilaireceiver_s";
// const BaseUrl = "http://10.10.10.166:1882";

//登录
export const LOGIN = "/user/login";
//地址列表
export const ADDRESS_LIST = "/addressBook/queryBySearchFilter";
//地址编辑
export const ADDRESS_EDIT = "/addressBook/update";
//添加地址
export const ADDRESS_ADD = "/addressBook/create";
//删除地址
export const ADDRESS_DELETE = "/addressBook/remove";
//待接单
export const WAIT_ACCEPT_ORDER = "/order/queryWaitAcceptOrder";
//待打单
export const WAIT_PRINT_ORDER = "/order/queryWaitPrintOrder";
//消息
export const GET_STATE_INFO = "/order/getStateInfo";

//返回成功
export const RESULT_OK = "000000";