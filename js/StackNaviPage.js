import React, {Component} from 'react';
import StackNavigator from "react-navigation";

import HomePage from "./page/HomePage";


const StackNaviPage = StackNavigator({
    Home: {
        screen: HomePage
    }

});

export default StackNaviPage;