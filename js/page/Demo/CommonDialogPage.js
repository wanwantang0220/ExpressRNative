/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import DialogSelected from "../../component/demo/DialogSelected";

const selectedArr = ["拍照", "图库"];
const {width, height} = Dimensions.get('window');
const [aWidth] = [width - 20];
const [left, top] = [0, 0];
const [middleLeft] = [(width - aWidth) / 2];

export default class CommonDialogPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'CommonDialog',
        title: 'CommonDialog'
    };

    constructor(props) {
        super(props);
        this.showAlertSelected = this.showAlertSelected.bind(this);
        this.callbackSelected = this.callbackSelected.bind(this);
    }


    render() {


        return (
            <View style={{position: "absolute", width: width, height: height, left: left, top: top,}}>

                <TouchableOpacity
                    style={{marginStart: 60, marginTop: 60}}
                    onPress={() => {
                        this.showAlertSelected()
                    }}>
                    <View>
                        <Text>弹出框</Text>
                    </View>
                </TouchableOpacity>
                <DialogSelected
                    ref={(dialog) => {
                        this.dialog = dialog;
                    }}
                />
            </View>
        )
    }


    showAlertSelected() {
        this.dialog.show("请选择照片", selectedArr, '#333333', this.callbackSelected);
    }


    callbackSelected(i) {
        switch (i) {
            case 0:
                this.tackPhoto();
                break;
            case 1:
                this.pickMultiple();
                break;
        }

    }


    tackPhoto() {
        alert('11111');
    }

    pickMultiple() {
        alert('22222')
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
