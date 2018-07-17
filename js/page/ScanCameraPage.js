/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, Animated} from "react-native";
import Toast from 'react-native-simple-toast';
import {black_000, black_00000080, blue_4187E8, white_fff} from "../style/BaseStyle";
import Images from "../style/Images";
import {QRScannerView} from "ac-qrcode";

export default class ScanCameraPage extends Component {

    static navigationOptions = {
        //标题
        title: "扫描",
        drawerLabel: '扫描',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };


    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
        }
    }

    render() {

        return (
            <View>
                <QRScannerView
                    isCornerOffset={true}
                    cornerBorderLength={24}
                    cornerBorderWidth={4}
                    cornerOffsetSize={4}
                    cornerColor={white_fff}
                    rectWidth={280}
                    rectHeight={280}
                    borderWidth={2}
                    borderColor={black_000}
                    hintText={'对准二维码/条形码'}
                    hintTextStyle={{color: white_fff, fontSize: 16,}}
                    hintTextPosition={80}
                    maskColor={black_00000080}
                    bottomMenuHeight={100}
                    bottomMenuStyle={{backgroundColor: '#000000B3', height: 100, justifyContent: 'center'}}
                    scanBarColor={blue_4187E8}
                    scanBarMargin={10}
                    scanBarAnimateTime={3000}
                    onScanResultReceived={this.barcodeReceived.bind(this)}
                    renderTopBarView={() => this.renderTitleBar()}
                    renderBottomMenuView={() => this.renderMenu()}
                />

            </View>
        )
    }


    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
    }


    renderTitleBar() {
        return (
            <View style={styles.view_title_container}>
                <ImageButton
                    onPress={() => this.props.navigation.goBack()}
                    source={Images.ic_qq_back}
                    style={{height: 32, width: 32, resizeMode: 'contain', marginLeft: 16}}
                />
                <Text
                    style={{color: blue_4187E8, fontSize: 18}}
                >扫码</Text>
                <Text
                    style={{color: 'white', fontSize: 18}}
                >扫物</Text>
                <Text
                    style={{color: 'white', fontSize: 18, marginRight: 80}}
                >扫题</Text>
            </View>
        );
    }


    renderMenu() {
        return (
            <View style={styles.view_bottom_menu_container}>
                <ImageButton
                    style={styles.image_qqbrowser_light}
                    source={Images.ic_qrcode_light}
                />
                <Text
                    style={styles.text_album}
                >相册</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    view_title_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#000000B3',
        height:56,
        alignItems:'center',
    },
    image_qqbrowser_light:{
        height:30,
        width:30,

    },
    text_album:{
        color:'white',
    },
    view_bottom_menu_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:32,
        paddingRight:32,

    },
});
