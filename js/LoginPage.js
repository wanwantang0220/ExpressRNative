import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    PixelRatio
} from "react-native";
import {deviceHeight, deviceWidth} from "./util/ScreenUtil";
import {White} from "./style/BaseStyle";
import DrawerPage from "./DrawerPage";


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userpwd: ""
        };
    }

    render() {

        return (
            <View style={styles.flex}>
                <ImageBackground
                    style={[styles.flex]}
                    source={require('../img/icon_splash.png')}
                >
                    <View style={{flex: 1}}/>
                    <View style={{flex: 1}}>
                        <TextInput
                            style={[styles.textinput]}
                            editable={true}
                            placeholder="请输入用户名"
                            underlineColorAndroid="transparent"
                            onChangeText={(username) => this.setState({username})}
                            maxLength={40}/>

                        <TextInput
                            style={[styles.textinput, {marginTop: 10}]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            placeholder="请输入密码"
                            onChangeText={(userpwd) => this.setState({userpwd})}
                            maxLength={40}/>

                        <Text style={[styles.text2]}>忘记密码</Text>
                        <TouchableOpacity
                            style={[styles.viewTextBg, {marginTop: 120}]}
                            onPress={() => this.props.navigator.push({
                                component: DrawerPage,
                            })}>
                            <Text style={{color: White, textAlign: 'center', fontSize: 18}}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
    },
    textinput: {
        width: 280,
        height: 35,
        backgroundColor: '#ffffff',
        borderColor: '#080808',
        borderRadius: 15,
        borderStyle: 'solid',
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: 'left',
        textAlignVertical: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    viewTextBg: {
        width: 280,
        height: 35,
        borderColor: '#ffffff',
        borderRadius: 15,
        borderStyle: 'solid',
        alignSelf: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),

    },
    text2: {
        color: White,
        textAlign: 'right',
        fontSize: 16,
        marginTop: 10,
        marginRight: 50
    }

});