import React, {PureComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../style/Css";
import {deviceWidth} from "../util/ScreenUtil";
import {BackgroundColorLight, BlackColor, ColorEnd, ColorStart, SeparatorColor} from "../style/BaseStyle";
import Line from "./Line";
import PropTypes from 'prop-types';
import {TYPE_0} from "../constant/BaseContant";
import {getStatus} from "../constant/StatusConstant";


const PIC_ADDRESS = require('../../img/icon_address.png');
const PIC_ORDER = require('../../img/icon_order.png');

export default class MyOrderItemCell extends PureComponent {

    static propTypes = {
        onSelectOrder: PropTypes.func,
    };


    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        let {item, onSelectOrder} = this.props;
        let status = getStatus(item.orderSource);

        const senderName = item.senderName != null ? item.senderName : '';
        const bookedFrom = item.bookedFrom != null ? item.bookedFrom : '';
        const bookedTo = item.bookedTo != null ? item.bookedTo : '';
        const senderProvinceCityCountyName = item.senderProvinceCityCountyName != null ? item.senderProvinceCityCountyName : '';
        const senderAddressDetail = item.senderAddressDetail != null ? item.senderAddressDetail : '';

        const time = bookedFrom + " - " + bookedTo;
        const address = senderProvinceCityCountyName + senderAddressDetail;
        const createTime = item.createTime != null ? item.createTime : '';

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={{width: deviceWidth,}}
                onPress={() => {
                    this.props.onSelectOrder()
                }}>
                <View style={[styles.waitorder_bg]}>
                    <View style={{
                        flexDirection: 'column',
                        marginStart: 10,
                        marginEnd: 10,
                        marginTop: 10,
                        marginBottom: 5,
                        height: 80
                    }}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={{
                                flex: 4,
                                fontSize: 18, fontWeight: 'bold', color: BlackColor,
                                textAlignVertical: 'center',
                                textAlign: 'left'
                            }}>
                                {senderName}
                            </Text>
                            <Text style={{
                                flex: 1,
                                fontSize: 12, color: ColorEnd,
                                textAlignVertical: 'center',
                                textAlign: 'right'
                            }}>{status}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image style={{
                                width: 10, height: 10,
                                marginTop: 8,
                                marginBottom: 5
                            }}
                                   source={PIC_ORDER}/>
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5, marginStart: 5,
                            }}>{time}</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image style={{
                                width: 10, height: 10,
                                marginTop: 3,
                                marginBottom: 5
                            }}
                                   source={PIC_ADDRESS}/>
                            <Text
                                style={{
                                    fontSize: 12,
                                    marginStart: 5,
                                }}>{address}</Text>
                        </View>

                    </View>

                    <Line color={BackgroundColorLight}/>
                    <View style={{flex: 1, flexDirection: 'row', height: 30, marginTop: 10, marginStart: 10}}>
                        <Text style={{flex: 4, fontSize: 10}}>下单时间：{createTime}</Text>

                    </View>

                </View>

            </TouchableOpacity>
        )
    }


}