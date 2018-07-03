import React, { Component } from 'react';
import {createStackNavigator, StackNavigator} from 'react-navigation';
import LaunchPage from "../LaunchPage";
import LoginPage from "../LoginPage";
import SettingPage from "../page/SettingPage";
import MyOrderListPage from "../page/MyOrderListPage";
import AddressHomePage from "../page/AddressHomePage";
import HomePage from "../page/HomePage";
import AddressEditPage from "../page/address/AddressEditPage";
import WaitingOrderPager from "../page/WaitingOrderPager";
import {BaseStyles} from "../style/BaseStyle";
import DrawerPage from "../DrawerPage";


const App = createStackNavigator({
    Launch: {
        screen: LaunchPage,
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
        navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true}),
        headerMode: 'none'

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
},
    {
        initialRouteName: 'Launch',
        navigationOptions: {    //不要在此处设置 否则后面全部被覆盖
            headerStyle: [{backgroundColor: 'white',borderBottomColor:'white'}],
            headerBackTitle: null,
            headerTintColor: '#ffffff',// 返回箭头颜色
            showIcon: true,
            swipeEnabled: true,//是否可以滑动返回
            animationEnabled: true,//是否带动画
            gesturesEnabled: true,// 是否支持手势返回
            headerTitleStyle: {fontSize: 18, color: BaseStyles.white, alignSelf:'center'},//定义title的样式
            cardStyle: {
                backgroundColor: 'transparent',
            },
        },
        navigationBarHidden:true,
        headerMode: 'none'
    }

        );


export default App