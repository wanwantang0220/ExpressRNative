import React, { Component } from 'react';
import {createStackNavigator, StackNavigator} from 'react-navigation';
import LaunchPage from "../LaunchPage";
import LoginPage from "../LoginPage";
import SettingPage from "../page/SettingPage";
import DrawerHomePage from "../DrawerHomePage";
import MyOrderListPage from "../page/MyOrderListPage";
import AddressHomePage from "../page/AddressHomePage";
import HomePage from "../page/HomePage";
import AddressEditPage from "../page/address/AddressEditPage";
import WaitingOrderPager from "../page/WaitingOrderPager";


const App = createStackNavigator({
    Launch: {
        screen: LaunchPage,
    },
    DrawHome: {
        screen: DrawerHomePage
    },
    MyOrder: {
        title: "我的订单",
        screen: MyOrderListPage
    },
    AddressHome:{
        screen:AddressHomePage
    },
    Settings: {
        screen: SettingPage
    },
    Login: {
        screen: LoginPage,

    },
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


export default App