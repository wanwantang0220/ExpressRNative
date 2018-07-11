import {PureComponent} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default class MessageNotePage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '设置',
    };

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View>
                <Text>我的订单</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
