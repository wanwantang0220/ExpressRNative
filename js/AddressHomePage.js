import {createStackNavigator} from "react-navigation";
import AddressPage from "./page/AddressPage";
import AddressEditPage from "./page/address/AddressEditPage";

const AddressHomePage = createStackNavigator({
    Address: {
        screen: AddressPage
    },
    AddressEdit: {
        screen: AddressEditPage
    },

});

export default AddressHomePage;