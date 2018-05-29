/**
 * 待接单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {deviceWidth} from "../util/ScreenUtil";
import HttpManager from "../data/http/HttpManager";

const itemHight = 200;
const itemCount = 20;

export default class WaitingOrderPager extends Component {

    static navigationOptions = ({navigation}) =>({
        //标题
        title:"待接单",
        drawerLabel: '待接单',
        headerTitleStyle:{
            flex: 1,
            textAlign:"center",
        },
        headerRight:<View/>
    });


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
            <View>
                <Text>待接单</Text>
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
