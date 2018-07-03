
import HomePage from "./page/HomePage";
import {createStackNavigator, StackNavigator} from "react-navigation";
import WaitingOrderPager from "./page/WaitingOrderPager";
import AddressEditPage from "./page/address/AddressEditPage";

const DrawHomePage = createStackNavigator({
    Home: {
        screen: HomePage
    },
    WaitingOrder:{
        screen:WaitingOrderPager
    },
    AddressEdit:{
        screen:AddressEditPage
    }

});

export default DrawHomePage;