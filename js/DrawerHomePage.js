
import HomePage from "./page/HomePage";
import {StackNavigator} from "react-navigation";
import WaitingOrderPager from "./page/WaitingOrderPager";

const DrawHomePage = StackNavigator({
    Home: {
        screen: HomePage
    },
    WaitingOrder:{
        screen:WaitingOrderPager
    }

});

export default DrawHomePage;