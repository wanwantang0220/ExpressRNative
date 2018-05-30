/**
 * 地址簿
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, StatusBar} from "react-native";
import {BackgroundColorLight, BlackTextColor, GrayBlackColor, White} from "../style/BaseStyle";
import NaviBarView from "../component/NaviBarView";
import TitleView from "../component/TitleView";
import LinearGradient from "react-native-linear-gradient";
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {deviceWidth} from "../util/ScreenUtil";
import AddressAllPage from "./address/AddressAllPage";
import AddressReceiverPage from "./address/AddressReceiverPage";
import AddressSenderPage from "./address/AddressSenderPage";


export default class AddressHomePage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '新的地址簿',
        //标题
        title: "新的地址簿",
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }


    render() {

        return (
            <View style={[styles.container]}>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'/>
                <NaviBarView backgroundColor="black"/>
                <TitleView title='地址簿' onBack={() => {
                    this.props.navigation.pop();
                }}/>

                <LinearGradient colors={[ BackgroundColorLight, White]} style={styles.lineargradient}>
                </LinearGradient>

                <ScrollableTabView
                    tabBarInactiveTextColor={BlackTextColor} // 没有被选中的文字颜色
                    tabBarActiveTextColor={BlackTextColor}       // 选中的文字颜色
                    tabBarBackgroundColor={White}     // 选项卡背景颜色
                    tabBarUnderlineStyle={{backgroundColor:'#FF0000',height:1}}   //下划线的样式
                    initialPage={0}
                    renderTabBar={() =>
                        <ScrollableTabBar
                            style={{height: 40,borderWidth:0,elevation:2}}
                            tabStyle={{height: 39}}
                            underlineHeight={2}/>}>

                    <AddressAllPage tabLabel="    全部    " />
                    <AddressReceiverPage tabLabel="    收件    " />
                    <AddressSenderPage tabLabel="    发件    " />
                </ScrollableTabView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    lineStyle: {
        width:deviceWidth/4,
        height: 2,
        backgroundColor: '#FF0000',
    },
    textStyle: {
        flex: 1,
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },
    lineargradient:{
        width:deviceWidth,
        height:20
    }
});
