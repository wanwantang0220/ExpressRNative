import {createStackNavigator} from "react-navigation";
import MyOrderListPage from "./page/MyOrderListPage";
import OrderDetailPage from "./page/OrderDetailPage";

const OrderHomePage = createStackNavigator({
    MyOrder: {
        screen: MyOrderListPage
    },
    OrderDetail: {
        screen: OrderDetailPage
    }

});

export default OrderHomePage;