/**
 * 实名认证
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class VertialRealPage extends Component {

    static navigationOptions = {
        //标题
        title: "实名认证",
        drawerLabel: '实名认证',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View>
                <Text>订单详情</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({});
