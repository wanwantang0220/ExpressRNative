/**
 * 物流详情
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class OrderWLDetailPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '物流详情',
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
