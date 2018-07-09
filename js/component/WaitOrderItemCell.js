import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "../style/Css";
import {deviceWidth} from "../util/ScreenUtil";
import {BackgroundColorLight, ColorStart, SeparatorColor} from "../style/BaseStyle";
import Line from "./Line";
import PropTypes from 'prop-types';

export default class WaitOrderItemCell extends PureComponent {

    static propTypes = {
        onAcceptOrder: PropTypes.func,
    };


    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        let {item,onAcceptOrder} = this.props;
        console.log('item', item);

        return (
            <View style={{width: deviceWidth,}}>
                <View style={[styles.waitorder_bg]}>
                    <View style={{
                        flexDirection: 'column',
                        marginStart: 10,
                        marginEnd: 10,
                        marginTop: 10,
                        marginBottom: 5,
                        height: 80
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000',}}>{item.senderName}</Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5,
                        }}>{item.bookedFrom + "--" + item.bookedTo}</Text>
                        <Text
                            style={{
                                fontSize: 12, marginTop: 5,
                                marginBottom: 5
                            }}>{item.senderProvinceCityCountyName + item.senderAddressDetail}</Text>
                    </View>

                    <Line color={BackgroundColorLight}/>
                    <View style={{flex: 1, flexDirection: 'row', height: 30, marginTop: 10, marginStart: 10}}>
                        <Text style={{flex: 4, fontSize: 10}}>下单时间：{item.createTime}</Text>
                        <TouchableOpacity style={[styles.waitorder_print_bg, {flex: 1}]}
                                          onPress={()=>{onAcceptOrder()}}>
                            <Text style={{
                                fontSize: 10, fontWeight: 'bold', color: ColorStart, textAlign: 'center',
                                textShadowOffset: {width: 0.5, hegith: 0.5},
                                textShadowRadius: 1,
                                textShadowColor: 'grey',
                                alignItems: 'center'
                            }}>接单</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        )
    }
}