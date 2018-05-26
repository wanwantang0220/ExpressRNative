import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from "react-native";
import { PermissionsAndroid } from 'react-native';
import * as ToastAndroid from "react-native";

const {width, height} = Dimensions.get('window');

export default class SplashPage extends Component {

    componentWillUpdate(){
    }

    componentDidUpdate(){
       this.requestReadPermission();
    }

    render() {
        return (
            <View style={styles.flex} >
                <Image
                    style={[styles.container]}
                    source={require('../img/icon_splash.png')}
                    resizeMode="stretch" />
            </View>
        )
    }

    async requestReadPermission() {
        try {
            const permissions = [
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.CAMERA
            ];
            //返回得是对象类型
            const granteds = await PermissionsAndroid.requestMultiple(permissions);
            var data = "是否同意地址权限: ";
            if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data+"是否同意相机权限: ";
            if (granteds["android.permission.CAMERA"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data+"是否同意存储权限: ";
            if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            this.show(data)
        } catch (err) {
            this.show(err.toString())
        }
    }

    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

}

const styles = StyleSheet.create({
    flex:{
        flex: 1,
        alignItems:'center'
    },
    container: {
        flex: 1,
        width: width,
        height: height,
    },
});