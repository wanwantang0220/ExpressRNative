/**
 * 订单详情
 **/

import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import HttpManager from "../data/http/HttpManager";
import {BackgroundColorLight, ColorEnd, ColorStart, White} from "../style/BaseStyle";
import Line from "../component/Line";
import styles from "../style/Css";
import LinearGradient from "react-native-linear-gradient";
import {getStatus} from "../constant/StatusConstant";
import {deviceWidth} from "../util/ScreenUtil";


const HEADER_BG_PIC = require('../../img/top_bar_bg.png');
const HEADER_PIC = require('../../img/icon_header.png');
const CALL_PIC = require('../../img/icon_phone.png');

export default class OrderDetailPage extends Component {

    static navigationOptions = {
        //标题
        title: "订单详情",
        drawerLabel: '订单详情',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
        // header: null
    };


    constructor(props) {
        super(props);
        this.state = {
            order: {}
        };

        this.httpManage = new HttpManager();
    }

    componentDidMount() {
        const uuid = this.props.navigation.state.params.uuid;
        // const uuid = params ? params.uuid : null;
        console.log('uuid = ', uuid);

        this.getOrderDetail(uuid);
    }

    render() {

        const {navigation} = this.props.navigation;
        const orderInfo = this.state.order;

        // const type = getStatus(orderInfo.orderSource);

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <ImageBackground style={{width: deviceWidth, height: 50}}
                                 source={HEADER_BG_PIC}>
                    <View style={{height: 50}}>
                        <Text style={{color: White, marginTop: 10, marginStart: 20}}>test</Text>
                    </View>
                </ImageBackground>

                {this.headerContentView()}
                {this.addressContentView()}
                {this.orderInfoContentView()}


            </View>
        )
    }

    /***
     * 快递员信息
     * @returns {*}
     */
    headerContentView(type) {
        return (
            <View style={{flexDirection: 'row', height: 60, backgroundColor: White, marginTop: 10}}>

                <Image style={{flex: 1, width: 30, height: 30, marginStart: 10, marginTop: 10}}
                       source={HEADER_PIC}
                       resizeMode={Image.resizeMode.contain}/>

                <View style={{flex: 3, justifyContent: 'center'}}>
                    <Text>name</Text>
                    <Text>address</Text>
                </View>


                <TouchableOpacity
                    style={{flex: 1, justifyContent: 'center'}}
                    activeOpacity={1.0}>

                    <Image
                        style={{width: 15, height: 15}}
                        source={CALL_PIC}/>
                </TouchableOpacity>
            </View>
        )
    };

    /***
     * 地址信息
     * @returns {*}
     */
    addressContentView() {
        return (
            <View style={{backgroundColor: White, marginTop: 10}}>

                <View style={{flexDirection: 'row'}}>
                    <Text>寄</Text>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Name</Text>
                        <Text>Address</Text>
                    </View>
                    <Line color={BackgroundColorLight}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>收</Text>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Name</Text>
                        <Text>Address</Text>
                    </View>
                    <Line color={BackgroundColorLight}/>
                </View>
            </View>
        )
    };


    /***
     * 订单信息
     * @returns {*}
     */
    orderInfoContentView() {

        return (
            <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 5, marginStart: 10}}>订单号</Text>
                <Text style={{marginTop: 5, marginStart: 10}}>物品类型</Text>
                <Text style={{marginTop: 5, marginStart: 10}}>物品重量</Text>
                <Text style={{marginTop: 5, marginStart: 10}}>预约时间</Text>
            </View>
        )
    };

    getOrderDetail(uuid) {


        let object = {
            "object": uuid
        };
        this.httpManage.getOrderDetail(object, (response) => {
            console.log("response", response);
            this.setState({
                order: response
            })
        });
    }

}

