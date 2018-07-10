//根视图
import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DrawerHomePage from './DrawerHomePage';
import {createDrawerNavigator, DrawerItems, DrawerNavigator, NavigationActions, StackActions} from 'react-navigation';
import {deviceWidth} from "./util/ScreenUtil";
import MyOrderListPage from "./page/MyOrderListPage";
import SettingPage from "./page/SettingPage";
import AddressHomePage from "./page/AddressHomePage";
import {White} from "./style/BaseStyle";
import {storage} from "./data/storage/Storage";
import PersonDetialPage from "./page/PersonDetialPage";

let USER_INFO = '';
const Drawer = createDrawerNavigator({
    DrawHome: {
        screen: DrawerHomePage
    },
    MyOrder: {
        title: "我的订单",
        screen: MyOrderListPage
    },
    AddressHome: {
        screen: AddressHomePage
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
        // contentComponent: DrawerContentPage,  // 自定义抽屉组件
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

        storage.load('userInfo', (response) => {
            USER_INFO = response;

        });
        console.log('userinfo', USER_INFO);

        const navigation = props.navigation;

        return (
            <ScrollView>
                <View>
                    <ImageBackground
                        style={[styles.image, {flexDirection: 'row'}]}
                        source={require('../img/icon_menu_header.png')}>
                        <TouchableOpacity
                            style={{marginTop: 50, marginStart: 20}}
                            activeOpacity={0.7}
                            underlayColor='transparent'
                            onPress={() => {
                                const navigateAction = NavigationActions.navigate({
                                    routeName: 'PersonDetail',
                                    params: {uuid: USER_INFO.userUuid}

                                });
                                navigation.navigate(navigateAction)
                            }}>
                            <Image
                                style={[styles.header]}
                                source={require('../img/icon_header.png')}/>
                        </TouchableOpacity>

                        <View style={{flexDirection: 'column', marginTop: 55, marginStart: 10}}>
                            <Text style={{fontSize: 14, color: White}}>{USER_INFO.perName}</Text>
                            <Text style={{fontSize: 10, color: White}}>{USER_INFO.parentOrgNo}</Text>
                        </View>
                    </ImageBackground>

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
    header: {
        width: 50,
        height: 50,
    }
});