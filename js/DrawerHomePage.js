import HomePage from "./page/HomePage";
import {createStackNavigator, StackNavigator} from "react-navigation";
import WaitingOrderPager from "./page/WaitingOrderPager";
import AddressEditPage from "./page/address/AddressEditPage";
import PersonDetialPage from "./page/PersonDetialPage";
import MessagePage from "./page/MessagePage";
import MessageNotePage from "./page/MessageNotePage";
import OrderDetailPage from "./page/OrderDetailPage";
import ScanCameraPage from "./page/ScanCameraPage";
import AddAddressPage from "./page/address/AddAddressPage";
import TestPage from "./test/TestScanPage";
import DemoPage from "./test/DemoPage";
import PopupDialogPage from "./page/Demo/PopupDialogPage";

const DrawHomePage = createStackNavigator({
    Home: {
        screen: HomePage
    },
    WaitingOrder: {
        screen: WaitingOrderPager
    },
    AddressEdit: {
        screen: AddressEditPage
    },
    PersonDetail: {
        screen: PersonDetialPage
    },
    Message: {
        screen: MessagePage
    },
    MessageNote: {
        screen: MessageNotePage
    },
    OrderDetail: {
        screen: OrderDetailPage
    },
    ScanCamera: {
        screen: ScanCameraPage
    },
    AddAddress: {
        screen: AddAddressPage
    },
    Test: {
        screen: TestPage
    },
    Demo: {
        screen: DemoPage
    },
    PopupDialog: {
        screen: PopupDialogPage
    }

});

export default DrawHomePage;