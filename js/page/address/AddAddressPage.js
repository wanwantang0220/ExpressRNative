/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from "react-native";
import {
    BackgroundColorLight, BlackColor, BlackTextColor, ColorEnd, ColorLineRed,
    ColorStart
} from "../../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import Line from "../../component/Line";
import styles from "../../style/Css";
import HttpManager from "../../data/http/HttpManager";
import {storage} from '../../data/storage/Storage';
import {show} from "../../util/ToastUtils";
import {NavigationActions} from 'react-navigation';
import RadioView from "../../component/RadioView";

export default class AddAddressPage extends Component {

    static navigationOptions = ({navigation}) => ({
        //标题
        drawerLabel: '新增地址',
        //标题
        title: "新增地址",
        drawerLockMode: 'locked-closed',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    });

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;

        this.state = {
            userinfo: {},
            address: '',
            name: '',
            phone: '',
            proviceCityRegionTxt: '',
            addrDetail: '',
            addrType: '',
            flag: 1
        };
        storage.load("userInfo", (data) => {
            this.setState({
                userinfo: data
            })
        });

        this.httpManager = new HttpManager();
    }


    render() {

        const {params} = this.props.navigation.state;
        console.log("params", params);

        return (
            <View style={{flex: 2}}>
                <View style={[styles.add_address_bg, {flex: 1}]}>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>姓名</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.name}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({name: text})}/>
                    </View>
                    <Line color={BackgroundColorLight}/>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>联系方式</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.phone}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({phone: text})}/>
                    </View>
                    <Line color={BackgroundColorLight}/>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>所在区域</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.proviceCityRegionTxt}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({proviceCityRegionTxt: text})}/>
                    </View>
                    <Line color={BackgroundColorLight}/>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>详细地址</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.addrDetail}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({addrDetail: text})}/>
                    </View>
                    <Line color={BackgroundColorLight}/>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left,{marginRight:20}]}>地址类型</Text>
                        <RadioView
                            id={1} onCheck={this.checkCallBack} radius={16}
                                   bgc={ColorLineRed} checked={this.state.flag === 1}/>
                        <Text style={{marginStart: 5, color: BlackTextColor, fontSize: 14,textAlign:'center',
                            textAlignVertical:'center',marginRight:10}}>收件地址</Text>

                        <RadioView id={2} onCheck={this.checkCallBack} radius={16}
                                   bgc={ColorLineRed} checked={this.state.flag === 2}/>
                        <Text style={{marginStart: 5, color: BlackTextColor, fontSize: 14,
                            textAlignVertical:'center',marginRight:10}}>发件地址</Text>

                    </View>
                </View>

                <View style={{flex: 1}}>
                    <LinearGradient colors={[ColorStart, ColorEnd]}
                                    style={[styles.address_edit_lineargradient, {marginTop: 30}]}
                                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={this.pressSave.bind(this)}>
                            <Text style={[styles.btn_text]}>保存</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        )
    }


    checkCallBack = (id) => {
        this.setState({
            flag: id
        });
        if (id === 1) {
            alert('第一种')
        } else if (id === 2) {
            alert('第二种');
        }
    };

    goBack() {
        this.props.navigation.goBack();
    }

    pressSave() {
        const address = this.state.address;
        const name = this.state.name;
        const phone = this.state.phone;
        const proviceCityRegionTxt = this.state.proviceCityRegionTxt;
        const addrDetail = this.state.addrDetail;

        const addUserName = this.state.userinfo.perName;
        const addUserPhone = this.state.userinfo.phone;

        let params = {
            "uuid": address.uuid,
            "name": name,
            "phone": phone,
            "proviceCityRegionTxt": proviceCityRegionTxt,
            "addrDetail": addrDetail,
            "addrType": "",
            "addUserType": "2",
            "longitude": "",
            "latitude": "",
            "addUserPhone": addUserPhone,
            "addUserName": addUserName
        };
        let object = {
            "object": params
        };
        this.httpManager.postEditAddress(object, (response) => {
            console.log("address edit response", response);
            show('修改成功');
            // this.props.navigation.back();
            this.props.navigation.pop();
        })
    }
}

