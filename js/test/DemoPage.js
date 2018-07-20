/**
 * 我的
 **/

import React, {Component} from 'react';
import {Image, Text, View} from "react-native";
import styles from "../style/Css";
import LinearGradient from "react-native-linear-gradient";
import {BackgroundColorLight, White} from "../style/BaseStyle";
import MineItem from "../component/MineItem";


export default class DemoPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'Demo',
        title: 'Demo'
    };


    render() {

        return (
            <View style={styles.container}>

                <LinearGradient colors={[BackgroundColorLight, White]} style={styles.lineargradient}/>
                <View style={{}}>
                    <MineItem content="Popup Dialog"
                              onPress={() => this.props.navigation.navigate('PopupDialog')}/>
                    <View style={[styles.view_line]}/>
                    <MineItem content="省市区选择"
                              onPress={() => this.props.navigation.navigate('ProvinceCity')}/>
                    <View style={[styles.view_line]}/>
                    <MineItem content="CommonDialog"
                              onPress={() => this.props.navigation.navigate('CommonDialog')}/>
                    <View style={[styles.view_line]}/>
                    <MineItem content="设置"
                              onPress={() => this.props.navigation.navigate('')}/>
                </View>
            </View>
        )
    }
}

// AddressList