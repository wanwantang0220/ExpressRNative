/**
 * 个人中心
 **/

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {BackgroundColorLight, BlackColor, ColorLine, ColorStart, ColorTextGrey2} from "../style/BaseStyle";
import {deviceWidth} from "../util/ScreenUtil";
import HttpManager from "../data/http/HttpManager";
import {storage} from "../data/storage/Storage";


const PIC_HEADER = require('../../img/icon_header.png');

export default class PersonDetialPage extends Component {

    static navigationOptions = {
        //标题
        title: "个人中心",
        drawerLabel: '个人中心',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };


    constructor(props) {
        super(props);
        this.state = {
            uuid: '',
            user_info: {},
            user_logininfo: {}
        };
        storage.load('userInfo', (response) => {
            this.setState({
                user_logininfo: response
            })
        });

        this.httpManager = new HttpManager();
    }

    componentDidMount() {
        console.log('debug', "componentDidMount");
        this.getUserInfo();
    }

    componentDidUpdate() {
    }

    render() {
        console.log('debug', "render");

        const user = this.state.user_info;
        const userinfo = this.state.user_logininfo;
        const name = user.name != null ? user.name : '';
        const orgName = user.orgName != null ? user.orgName : '';
        const centerName = user.centerName != null ? user.centerName : '';
        const orgNo = user.orgNo != null ? user.orgNo : '';
        const phone = userinfo.phone != null ? userinfo.phone : '';
        const idCard = userinfo.idCard != null ? userinfo.idCard : '';


        return (
            <View style={[styles.curbg]}>
                <View style={[styles.curview_50]}>
                    <Text
                        style={[styles.text_left, {flex: 3}]}>头像</Text>
                    <Image style={[styles.curheader, {flex: 1}]} source={PIC_HEADER}
                           resizeMode={Image.resizeMode.contain}/>
                </View>
                <View style={[styles.view_line]}/>
                <View style={[styles.curview_40]}>
                    <Text style={[styles.text_left]}>姓名</Text>
                    <Text style={[styles.text_right]}>{name}</Text>
                </View>
                <View style={[styles.view_line]}/>
                <View style={[styles.curview_40]}>
                    <Text style={[styles.text_left]}>所属经营中心</Text>
                    <Text style={[styles.text_right]}>{centerName}</Text>
                </View>
                <View style={[styles.view_line]}/>
                <View style={[styles.curview_40]}>
                    <Text style={[styles.text_left]}>所属网点</Text>
                    <Text style={[styles.text_right]}>{orgName}</Text>
                </View>
                <View style={[styles.view_line]}/>
                <View style={[styles.curview_40]}>
                    <Text style={[styles.text_left]}>工号</Text>
                    <Text style={[styles.text_right]}>{orgNo}</Text>
                </View>
                <View style={[styles.view_line]}/>
                <View style={[styles.curview_40]}>
                    <Text style={[styles.text_left]}>手机号码</Text>
                    <Text style={[styles.text_right]}>{phone}</Text>
                </View>
                <View style={[styles.view_line]}/>
                <View style={[styles.curview_40]}>
                    <Text style={[styles.text_left]}>身份证号</Text>
                    <Text style={[styles.text_right]}>{idCard}</Text>
                </View>
                <View style={[styles.view_line]}/>
                <View style={[styles.curview_40]}>
                    <Text style={[styles.text_left]}>我的收件码</Text>
                    <Text style={[styles.text_right]}>暂无</Text>
                </View>
            </View>
        )
    }


    getUserInfo() {

     const {uuid} = this.props.navigation.state.params;

        let param = {
            'object': uuid
        };


        this.httpManager.getUserInfo(param, (response) => {
            this.setState({
                user_info: response
            })
        });
    }
}

const styles = StyleSheet.create({
    curbg: {
        width: deviceWidth - 20,
        height: 350,
        backgroundColor: '#ffffffff',
        shadowColor: ColorStart,
        elevation: 1,
        borderColor: BackgroundColorLight,
        justifyContent: 'center',
        borderRadius: 5,
        marginEnd: 10,
        marginStart: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    curview_50: {
        flexDirection: 'row',
        width: deviceWidth,
        marginStart: 20,
        height: 50,
    },
    curview_40: {
        flexDirection: 'row',
        width: deviceWidth - 20,
        marginStart: 20,
        height: 40,
        marginEnd: 10,
    },
    curheader: {
        flex: 1,
        width: 40,
        height: 40,
        justifyContent: 'flex-end',
        // marginStart: 5
    },
    text_left: {
        flex: 1,
        justifyContent: 'flex-start',
        marginStart: 10,
        marginTop: 5,
        fontSize: 14,
        color: BlackColor,
        marginBottom: 5,
        textAlign: 'left',
        textAlignVertical: 'center',
    },
    text_right: {
        flex: 1,
        justifyContent: 'flex-end',
        marginStart: 10,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
        color: ColorTextGrey2,
        textAlign: 'right',
        textAlignVertical: 'center',
        marginEnd: 20,

    },
    view_line: {
        height: 1,
        width: deviceWidth - 40,
        marginStart: 20,
        marginEnd: 20,
        backgroundColor: ColorLine,
    }
});
