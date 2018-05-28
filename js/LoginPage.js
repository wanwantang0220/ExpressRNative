import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,PixelRatio} from "react-native";
import {deviceHeight, deviceWidth} from "./util/ScreenUtil";
import {White} from "./style/BaseStyle";


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {

        return (
            <View style={styles.flex}>
                <ImageBackground
                    style={[styles.flex]}
                    source={require('../img/icon_splash.png')}
                >
                    <View style={{flex:1}}/>
                    <View style={{flex:1}}>
                <TextInput
                    style={[styles.textinput]}
                    editable = {true}
                    placeholder="请输入用户名"
                    underlineColorAndroid="transparent"
                    maxLength = {40}/>

                <TextInput
                    style={[styles.textinput,{marginTop:10}]}
                    underlineColorAndroid="transparent"
                    editable = {true}
                    placeholder="请输入密码"
                    maxLength = {40}/>
                        <TouchableOpacity style={[styles.viewTextBg, {marginTop: 100}]}
                                          onPress={() => this.props.navigation.navigate('Bluetooth')}>
                            <Text style={{color: White, textAlign: 'center',fontSize:18}}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex: 1,
    },
    container: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
    },
    textinput:{
        width: 280,
        height: 35,
        backgroundColor: '#ffffff',
        borderColor: '#080808',
        borderRadius: 15,
        borderStyle: 'solid',
        paddingTop: 0,
        paddingBottom: 0,
        textAlign:'left',
        textAlignVertical:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:10
    },
    viewTextBg:{
        width: 280,
        height: 35,
        borderColor: '#080808',
        borderRadius: 15,
        borderStyle: 'solid',
        alignSelf:'center',
        color:White,
        justifyContent:'center',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),


    }
});