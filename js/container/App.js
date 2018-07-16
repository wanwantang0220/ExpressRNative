import React, {Component} from 'react';
import {createStackNavigator, StackNavigator} from 'react-navigation';
import LoginPage from "../LoginPage";
import SettingPage from "../page/SettingPage";
import MyOrderListPage from "../page/MyOrderListPage";
import AddressHomePage from "../page/AddressHomePage";
import HomePage from "../page/HomePage";
import AddressEditPage from "../page/address/AddressEditPage";
import WaitingOrderPager from "../page/WaitingOrderPager";
import {BaseStyles} from "../style/BaseStyle";
import DrawerPage from "../DrawerPage";
import SplashPage from "../SplashPage";
import PersonDetialPage from "../page/PersonDetialPage";
import MessagePage from "../page/MessagePage";
import OrderDetailPage from "../page/OrderDetailPage";


const App = createStackNavigator({
        Splash: {
            screen: SplashPage
        },
        Drawer: {
            screen: DrawerPage
        },
        MyOrder: {
            screen: MyOrderListPage
        },
        AddressHome: {
            screen: AddressHomePage
        },
        Settings: {
            screen: SettingPage
        },
        Login: {
            screen: LoginPage
        },
        Home: {
            screen: HomePage,
            headerMode: 'none'
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
        OrderDetail: {
            screen: OrderDetailPage
        }
    },
    {
        initialRouteName: 'Splash',
        navigationOptions: {    //不要在此处设置 否则后面全部被覆盖
            headerStyle: [{backgroundColor: '#000000', borderBottomColor: '#000000'}],
            headerBackTitle: null,
            headerTintColor: '#ffffff',// 返回箭头颜色
            headerTitleStyle: { //定义title的样式
                flex: 1,
                textAlign: "center",
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 18
            },
            showIcon: true,
            swipeEnabled: true,//是否可以滑动返回
            animationEnabled: true,//是否带动画
            gesturesEnabled: true,// 是否支持手势返回
            cardStyle: {
                backgroundColor: 'transparent',
            },
        },
        navigationBarHidden: true,
        headerMode: 'none'
    }
);


export default App