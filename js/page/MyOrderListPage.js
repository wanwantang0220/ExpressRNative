/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, StatusBar} from "react-native";
import NaviBarView from "../component/NaviBarView";
import HttpManager from "../data/http/HttpManager";


export default class MyOrderListPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '我的收件',
        //标题
        title:"我的收件",
        headerTitleStyle:{
            flex: 1,
            textAlign:"center",
        },
        headerRight:<View/>
    };

    constructor(props){
        super(props);
        this.state={
            refreshing : true,
            isInit : false,
            mData:{}
        };
        this.httpManager  = new HttpManager();

        this.requestData();
    }

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View style={[styles.container]}>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'
                />
                <NaviBarView backgroundColor="black"/>
                <Text>我的订单</Text>
            </View>
        )
    }


    /**
     * 请求数据
     */
    requestData() {
        let object = {
            "object": {}
        };
        this.httpManager.getWaitOrder(object, (response) =>{
            console.log("response", response);
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
