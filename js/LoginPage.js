import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";


export default class LoginPage extends Component {


    render() {

        return (
            <View style={styles.flex}>
                <Text>登录</Text>
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