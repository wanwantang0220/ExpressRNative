/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, StatusBar, TextInput} from "react-native";
import {BackgroundColorLight, BlackColor, White} from "../../style/BaseStyle";
import NaviBarView from "../../component/NaviBarView";
import TitleView from "../../component/TitleView";
import LinearGradient from "react-native-linear-gradient";
import {deviceWidth} from "../../util/ScreenUtil";
import Line from "../../component/Line";


export default class AddressEditPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        //标题
        drawerLabel: '编辑地址',
        //标题
        title: "编辑地址",
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    });



    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        const { params } = this.props.navigation.state;
        console.log("params",params);

        return (
            <View>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'/>

                <LinearGradient colors={[ BackgroundColorLight, White]} style={styles.lineargradient}>
                </LinearGradient>

                <View style={[styles.cardview]}>
                    <View  style={[styles.item]}>
                        <Text style={[styles.item_left]}>姓名</Text>
                        <TextInput style={[styles.item_right]} placeholder={params.address.name} underlineColorAndroid="transparent"/>
                    </View>
                    <Line color={BlackColor}/>
                    <View  style={[styles.item]}>
                        <Text style={[styles.item_left]}>姓名</Text>
                        <TextInput style={[styles.item_right]} placeholder={params.address.name} underlineColorAndroid="transparent"/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardview:{
        width: deviceWidth-20,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 3,
        marginTop:10,
        marginRight:10,
        marginLeft:10
    },
    item:{
        flex:1,
        flexDirection:'row',
        width:deviceWidth,
        height:45,
        marginStart:10,
        marginEnd:10,
        marginTop:10
    },
    item_left:{
        flex:1,
        width:100,
        height:45,
        justifyContent: 'center',
        color:BlackColor,
        fontWeight: 'bold',
    },
    item_right:{
        flex:3,
        width:100,
        height:45,
        justifyContent: 'center',
    }
});
