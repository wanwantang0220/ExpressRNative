/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, StatusBar, TouchableOpacity} from "react-native";
import NaviBarView from "../component/NaviBarView";
import {White} from "../style/BaseStyle";
import {deviceWidth} from "../util/ScreenUtil";
import TitleView from "../component/TitleView";
import HttpManager from "../data/http/HttpManager";


export default class AddressPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '地址簿',
        //标题
        title:"地址簿",
        headerTitleStyle:{
            flex: 1,
            textAlign:"center",
        },
        headerRight:<View/>
    };

    constructor(props){
        super(props);
        this.state={
            refreshing : true,
            isInit : false,
            mData:{}
        };
        this.httpManager  = new HttpManager();

        this.requestData();
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <View style={[styles.container]}>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'
                />
                <NaviBarView backgroundColor="black"/>
                <TitleView title='地址簿' onBack={()=>{
                    this.props.navigation.pop();
                }}/>

                <Text>地址簿</Text>
            </View>
        )
    }

    requestData(){
        //{"object":{"object":{"active":"1","addUserPhone":"15961853707","addUserType":"2","addrType":"1"},"orderBy":"","pageRow":10,"startPage":1}}
        let params = {
            "addUserPhone": "18961812572",
            "addUserType": "2" ,
            "addrType":"1"
        };
        let object2={
            "object":params
        };
        let object = {
            "object": object2
        };

        this.httpManager.requestAddresses(object,(response)=>{
            console.log("response",response);
            alert(response.list);
        });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 56,
        width: deviceWidth,
        alignItems: 'center',
        flexDirection: 'row',
    },
    toolbar_left_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginLeft: 20,
    },
    toolbar_middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toolbar_middle_text: {
        fontSize: 18,
        fontWeight: '600',
        color: White
    },
    toolbar_right_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginRight: 20,
    },
});
