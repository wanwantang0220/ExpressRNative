const App_Name = "Mung";
const Init_HotMovies = {}
const Base = {
    name: 'apikey',
    value: '0df993c66c0c636e29ecbb5344252a4a'
}
const Wait_OrderList_Param = {
    "object": {}
};

const TYPE_0 = '0';//"0","待揽收"
const TYPE_1 = '1'; //"1","待取件（已接单）"
const TYPE_2 = '2';// "2","待发件（未付款）"
const TYPE_3 = '3';// "3","待发件（已付款）"
const TYPE_4 = '4';//"4","已发件（待签收）"
const TYPE_5 = '5';//"5","已签收"
const TYPE_6 = '6';//"6","已取消"

export {
    Base, Wait_OrderList_Param, TYPE_0, TYPE_1, TYPE_2, TYPE_3, TYPE_4,
    TYPE_5, TYPE_6
}