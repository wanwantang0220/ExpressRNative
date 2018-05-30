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
import EditView from "./component/EditView";
import HttpManager from "./data/http/HttpManager";
import {storage} from './data/storage/Storage';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "18961812572",
            password: "zd521036",
            userinfo: {}
        };
        this.httpManager = new HttpManager();
    }

    render() {

        return (
            <View style={styles.flex}>
                <ImageBackground
                    style={[styles.flex]}
                    source={require('../img/icon_splash.png')}>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 1}}>
                        <EditView
                            name='18961812572'
                            onChangeText={(text) => {
                                this.userName = text;
                            }}/>

                        <EditView
                            name='zd521036'
                            onChangeText={(text) => {
                                this.password = text;
                            }}/>

                        <Text style={[styles.text2]}>忘记密码</Text>
                        <TouchableOpacity
                            style={[styles.viewTextBg, {marginTop: 120}]}
                            onPress={this.pressLogin}>
                            <Text style={{color: White, textAlign: 'center', fontSize: 16}}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }


    pressLogin = () => {
        let params = {
            "username": "18961812572",//this.userName,
            "password": "zd521036" //this.password
        };
        let object = {
            "object": params
        };

        this.httpManager.requestLogin(object, (response) => {

            console.log("response.object.staffInfo", response.object.staffInfo);
            if (response.errCode === "000000") {
                this.setState({
                    userinfo: response.object.staffInfo
                });
                storage.save('userInfo', response.object.staffInfo);
                storage.save('sessionId',response.object.sessionId);
                storage.save('ssoToken',response.object.ssoToken);
                this.onLoginSuccess();
            } else {
                alert(responseText.errDesc);
            }

        });
    };

    onLoginSuccess() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                component: DrawerPage,
            });
        }
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
        fontSize: 14,
        marginTop: 10,
        marginRight: 50
    }

});