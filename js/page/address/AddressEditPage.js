/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from "react-native";
import {BlackColor, ColorEnd, ColorStart} from "../../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import Line from "../../component/Line";
import styles from "../../style/Css";
import HttpManager from "../../data/http/HttpManager";
import {storage} from '../../data/storage/Storage';
import {show} from "../../util/ToastUtils";
import {NavigationActions} from 'react-navigation';

export default class AddressEditPage extends Component {

    static navigationOptions = ({navigation}) => ({
        //标题
        drawerLabel: '编辑地址',
        //标题
        title: "编辑地址",
        drawerLockMode:'locked-closed',
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
            address: params.address,
            name: params.address.name,
            phone: params.address.phone,
            proviceCityRegionTxt: params.address.proviceCityRegionTxt,
            addrDetail: params.address.addrDetail
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
            <View style={{flex: 1}}>
                <View style={[styles.address_edit_cardview]}>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>姓名</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.name}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({name: text})}/>
                    </View>
                    <Line color={BlackColor}/>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>联系方式</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.phone}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({phone: text})}/>
                    </View>
                    <Line color={BlackColor}/>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>所在区域</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.proviceCityRegionTxt}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({proviceCityRegionTxt: text})}/>
                    </View>
                    <Line color={BlackColor}/>
                    <View style={[styles.address_edit_item]}>
                        <Text style={[styles.address_edit_item_left]}>详细地址</Text>
                        <TextInput style={[styles.address_edit_item_right]}
                                   value={this.state.addrDetail}
                                   underlineColorAndroid="transparent"
                                   onChangeText={(text) => this.setState({addrDetail: text})}/>
                    </View>
                </View>

                <LinearGradient colors={[ColorStart, ColorEnd]}
                                style={[styles.address_edit_lineargradient, {marginTop: 30}]}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={this.pressSave.bind(this)}>
                        <Text style={[styles.btn_text]}>保存</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text onPress={this.goBack.bind(this)}>返回</Text>
            </View>
        )
    }

    goBack(){
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

