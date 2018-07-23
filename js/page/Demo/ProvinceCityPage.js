/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import AddressSelect from "../../component/demo/AddressSelect";


export default class ProvinceCityPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '省市区',
        title: '省市区'
    };

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                              onPress={() => this.openAddressSelect()}>

                <Text>地址选择</Text>
                <AddressSelect
                    commitFun={(area) => this.onSelectArea(area)}
                    dissmissFun={() => {
                    }}
                />
            </TouchableOpacity>
        )
    }


    openAddressSelect() {

    }


    onSelectArea(area) {

        alert(area[0].label + area[1].label + area[2].label);
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
