/**
 * 订单详情
 **/

import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import HttpManager from "../data/http/HttpManager";
import {BackgroundColorLight, BlackColor, ColorEnd, ColorStart, White} from "../style/BaseStyle";
import Line from "../component/Line";
import styles from "../style/Css";
import LinearGradient from "react-native-linear-gradient";
import {getStatus} from "../constant/StatusConstant";
import {deviceWidth} from "../util/ScreenUtil";


const HEADER_BG_PIC = require('../../img/top_bar_bg.png');
const HEADER_PIC = require('../../img/icon_header.png');
const CALL_PIC = require('../../img/icon_phone.png');
const RECEIVE_PIC = require('../../img/icon_order_recever.png');
const SENDER_PIC = require('../../img/icon_order_sender.png');


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

        const type = getStatus(orderInfo.orderSource);

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>

                <ImageBackground style={{width: deviceWidth, height: 50}}
                                 source={HEADER_BG_PIC}>
                    <View style={{height: 50}}>
                        <Text style={{color: White, marginTop: 10, marginStart: 20}}>订单{type}</Text>
                    </View>
                </ImageBackground>

                {this.headerContentView()}
                {this.addressContentView(orderInfo)}
                {this.orderInfoContentView(orderInfo)}


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
    addressContentView(orderInfo) {


        const receiverName = orderInfo.receiverName;
        const receiverPhone = orderInfo.receiverPhone;
        const receiverProvinceCityCountyName = orderInfo.receiverProvinceCityCountyName;
        const receiverAddressDetail = orderInfo.receiverAddressDetail;
        const senderName = orderInfo.senderName;
        const senderPhone = orderInfo.senderPhone;
        const senderProvinceCityCountyName = orderInfo.senderProvinceCityCountyName;
        const senderAddressDetail = orderInfo.senderAddressDetail;


        return (
            <View style={{backgroundColor: White, marginTop: 10}}>

                <View style={[styles.order_address_view]}>
                    <Image style={{marginStart: 15, width: 30, height: 30, marginTop: 10}}
                           source={SENDER_PIC}
                           resizeMode={Image.resizeMode.contain}/>
                    <View style={{flexDirection: 'column', marginStart: 10}}>
                        <Text style={[styles.order_address_name_text]}>{receiverName}</Text>
                        <Text
                            style={[styles.order_address_text, {marginTop: 5}]}>{receiverProvinceCityCountyName + receiverAddressDetail}</Text>
                    </View>
                </View>
                <Line color={BackgroundColorLight}/>

                <View style={[styles.order_address_view]}>
                    <Image style={{marginStart: 15, width: 30, height: 30, marginTop: 10}}
                           source={RECEIVE_PIC}
                           resizeMode={Image.resizeMode.contain}/>
                    <View style={{flexDirection: 'column', marginStart: 10}}>
                        <Text style={[styles.order_address_name_text]}>{senderName}</Text>
                        <Text
                            style={[styles.order_address_text, {marginTop: 5}]}>{senderProvinceCityCountyName + senderAddressDetail}</Text>
                    </View>
                </View>
            </View>
        )
    };


    /***
     * 订单信息
     * @returns {*}
     */
    orderInfoContentView(orderInfo) {

        const goodsType = orderInfo.goodsType;
        const goodsWeight = orderInfo.goodsWeight;
        const orderNo = orderInfo.orderNo;
        const createTime = orderInfo.createTime;


        return (
            <View style={{flexDirection: 'column', backgroundColor: White, marginTop: 10}}>
                <View style={{marginTop: 10, marginStart: 10}}>
                    <Text style={[styles.order_detail_text]}>订单号: {orderNo}</Text>
                    <Text style={[styles.order_detail_text]}>物品类型: {goodsType}</Text>
                    <Text style={[styles.order_detail_text]}>物品重量: {goodsWeight}公斤</Text>
                    <Text style={[styles.order_detail_text]}>预约时间: {createTime}</Text>
                </View>

                <Line color={BackgroundColorLight} style={{marginBottom: 5, marginTop: 5}}/>

                <View style={[styles.order_cancle_view, {marginTop: 10, marginBottom: 10}]}>
                    <Text style={{textAlign: 'center'}}>取消订单</Text>
                </View>

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

