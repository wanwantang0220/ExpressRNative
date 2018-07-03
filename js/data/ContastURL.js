// 发送验证码
const CREATE_VERIFICATION_CODE = "user/createVerificationCode";
// 注册登录
const LOGIN_REGISTER = "login/userLogin";
// 通过uuid查询地址
const GET_BY_UUID = "addressBook/getByUuid";
// 根据指定条件查询地址
const QUERY_BY_SEARCH_FILTER = "addressBook/queryBySearchFilter";
// 模糊查询
const QUERY_FROM_APP = "addressBook/queryFromApp";
// 删除地址簿
const ADDRESS_REMOVE = "addressBook/remove";
// 修改地址簿
const ADDRESS_UPDATE = "addressBook/update";
// 查询地址簿
const ADDRESS_RETRIEVE_APP = "xilaimanager_s/addressBook/retrieveApp";
// 新增地址
const ADDRESS_CREATE = "addressBook/create";
// 发件
const SENDER_ORDER = "order/senderOrder";
//实名认证
const VALIDATE_USER_ID_CARD = "idCardAuth/validateUserIdCard";
//订单详情
const SELECT_BY_UUID = "expressOrderDetail/selectByUuid";
//我的发件记录
const MY_EXPRESS_LIST = "xilaisender_s/expressOrderDetail/queryUserOrderList";

//返回成功
const RESULT_OK = "000000";


export {
    RESULT_OK, CREATE_VERIFICATION_CODE, LOGIN_REGISTER,
    GET_BY_UUID, QUERY_BY_SEARCH_FILTER, QUERY_FROM_APP,
    ADDRESS_REMOVE, ADDRESS_UPDATE, ADDRESS_RETRIEVE_APP,
    ADDRESS_CREATE, SENDER_ORDER, VALIDATE_USER_ID_CARD,
    SELECT_BY_UUID, MY_EXPRESS_LIST

}