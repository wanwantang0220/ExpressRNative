import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from "react-native";

const {width, height} = Dimensions.get('window');

export default class LoginPage extends Component {

    componentWillUpdate() {

    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});