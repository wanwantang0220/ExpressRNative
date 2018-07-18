/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Text, View} from "react-native";
import Toast from 'react-native-simple-toast';
import {QRScannerView} from "ac-qrcode";

export default class ScanTestPage extends Component {

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


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         animatedValue: new Animated.Value(0),
    //     }
    // }

    render() {

        return (
            <QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}
                // renderTopBarView={() => this.renderTitleBar()}
                // renderBottomMenuView={() => this.renderMenu()}
            />
        )

    }


    renderTitleBar() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >这里添加标题</Text>
        );
    }

    renderMenu() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >这里添加底部菜单</Text>
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }

    //
    //
    //
    // renderMenu() {
    //     return (
    //         <View style={styles.view_bottom_menu_container}>
    //             {/*<ImageButton*/}
    //                 {/*style={styles.image_qqbrowser_light}*/}
    //                 {/*source={Images.ic_qrcode_light}*/}
    //             {/*/>*/}
    //             {/*<Text*/}
    //                 {/*style={styles.text_album}*/}
    //             {/*>相册</Text>*/}
    //         </View>
    //     )
    // }

}

// const styles = StyleSheet.create({
//     view_title_container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         backgroundColor: '#000000B3',
//         height: 56,
//         alignItems: 'center',
//     },
//     image_qqbrowser_light: {
//         height: 30,
//         width: 30,
//     },
//     text_album: {
//         color: 'white',
//     },
//     view_bottom_menu_container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingLeft: 32,
//         paddingRight: 32,
//     },
// });
