/**
 * 运单详情
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class YDDetailPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '运单详情',
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

const styles = StyleSheet.create({

});
