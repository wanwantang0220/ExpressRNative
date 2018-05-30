//根视图
import React, {Component} from 'react';
import {
    StyleSheet,
    View, ScrollView, Image, Dimensions
} from 'react-native';
import DrawerHomePage from './DrawerHomePage';
import DrawerLeftPage from './DrawerLeftPage';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {deviceWidth} from "./util/ScreenUtil";
import MyOrderListPage from "./page/MyOrderListPage";
import SettingPage from "./page/SettingPage";
import AddressPage from "./page/AddressPage";
import AddressHomePage from "./page/AddressHomePage";

const Drawer = DrawerNavigator({
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
    // Address:{
    //     screen: AddressPage
    // },
    Setting: {
        screen: SettingPage
    }
}, {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentOptions: {
        initialRouteName: 'Home', // 默认页面组件
        // activeItemKey: 'MyStackNavi',
        labelStyle: {//标签样式
            // color : 'red',
            height: 30,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0,
        },
    },
    contentComponent: props => {
        console.log('contentComponent');
        console.log(props);
        return (
            <ScrollView>
                <View>
                    <Image
                        style={[styles.image]}
                        source={require('../img/icon_menu_header.png')}/>
                    <DrawerItems
                        {...props}
                        activeTintColor='#000000'
                        activeBackgroundColor='rgba(0, 0, 0, .04)'
                        inactiveTintColor='rgba(0, 0, 0, .87)'
                        inactiveBackgroundColor='transparent'
                        style={{backgroundColor: '#ffffff'}}
                        labelStyle={{color: '#000000'}}
                    />
                </View>
            </ScrollView>
        )
    },
});
// module.exports = DrawerPage;

export default class DrawerPage extends Component {

    render() {
        return (
            <Drawer/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: deviceWidth,
        height: 150
    },
});