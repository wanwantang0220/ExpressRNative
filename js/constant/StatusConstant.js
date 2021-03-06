import {
    MESSAGE_TYPE_1, MESSAGE_TYPE_2, MESSAGE_TYPE_3, MESSAGE_TYPE_4, TYPE_0, TYPE_1, TYPE_2, TYPE_3, TYPE_4, TYPE_5,
    TYPE_6
} from "./BaseContant";


export const getStatus = (orderSource) => {

    switch (orderSource) {
        case TYPE_0:
            return '待揽收';
        case TYPE_1:
            return '待取件'; //待取件（已接单）
        case TYPE_2:
            return '待发件' //待发件（未付款）
        case TYPE_3:
            return '待发件';//待发件（已付款）
        case TYPE_4:
            return '已发件';//已发件（待签收）
        case TYPE_5:
            return '已签收'; //已签收
        case TYPE_6:
            return '已取消'; //已取消
        default:
            return '';
    }
};

export const getMessageTitle = (type) => {

    switch (type) {
        case MESSAGE_TYPE_1:
            return '您有一个新订单';
        case MESSAGE_TYPE_2:
            return '签收成功';
        case MESSAGE_TYPE_3:
            return '取消订单' ;
        case MESSAGE_TYPE_4:
            return '您有一个新订单';
        default:
            return '';
    }
};



