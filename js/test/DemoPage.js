/**
 * 我的
 **/

import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import styles from "../style/Css";
import LinearGradient from "react-native-linear-gradient";
import {BackgroundColorLight, BlackColor, ColorTextGrey2, White} from "../style/BaseStyle";
import MineItem from "../component/MineItem";
import Line from "../component/Line";


export default class DemoPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'Demo',
        title: 'Demo'
    };


    render() {

        return (
            <ScrollView style={styles.container}>

                <View style={{backgroundColor: White, flex: 1, flexDirection: 'column'}}>
                    <MineItem content="Popup Dialog"
                              onPress={() => this.props.navigation.navigate('PopupDialog')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="省市区选择"
                              onPress={() => this.props.navigation.navigate('ProvinceCity')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="CommonDialog"
                              onPress={() => this.props.navigation.navigate('CommonDialog')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="GMap"
                              onPress={() => this.props.navigation.navigate('GMap')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="Animated详解"
                              onPress={() => this.props.navigation.navigate('Animated')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="Animated详解2"
                              onPress={() => this.props.navigation.navigate('Animated2')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="GMap"
                              onPress={() => this.props.navigation.navigate('GMap')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="GMap"
                              onPress={() => this.props.navigation.navigate('GMap')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="GMap"
                              onPress={() => this.props.navigation.navigate('GMap')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="GMap"
                              onPress={() => this.props.navigation.navigate('GMap')}/>
                    <Line color={ColorTextGrey2}/>
                    <MineItem content="GMap"
                              onPress={() => this.props.navigation.navigate('GMap')}/>

                </View>
            </ScrollView>
        )
    }
}

// AddressList