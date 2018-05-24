import React, {Component} from 'react';
import {StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import StackNaviPage from "./StackNaviPage";
import MenuPage from "./page/MenuPage";
import SplashPage from "./SplashPage";

const {width, height} = Dimensions.get('window');
/**
 * 侧滑根目录
 */
const Drawer = DrawerNavigator({

    StackNaviPage: {
        screen: StackNaviPage
    },
    MenuPage:{
        screen:MenuPage
    },
    SplashPage:{
        screen:SplashPage
    }

}, {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentOptions: {
        initialRouteName: 'Home', // 默认页面组件
        activeItemKey: 'MyStackNavi',
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


export default class DrawerPage extends Component {

    render() {
        return (
            <Drawer/>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: width,
        height: 150
    },
    text: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#DDD8CE',
        marginTop: 40,
        height: 65,
        flexDirection: 'row',
        paddingTop: 10,

    }
});
