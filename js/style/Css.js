import {deviceWidth} from "../util/ScreenUtil";
import {
    BackgroundColorLight, BlackColor, BlackTextColor, ColorEnd, ColorLineRed, ColorStart, ColorTextGrey, ColorTextGrey2,
    White
} from "./BaseStyle";
import {
    Dimensions, Image, StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity,
    PixelRatio
} from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
    address_edit_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    address_edit_cardview: {
        width: deviceWidth - 20,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10
    },
    address_edit_item: {
        flex: 1,
        flexDirection: 'row',
        width: deviceWidth,
        height: 60,
        marginStart: 10,
        marginEnd: 10,
    },
    address_edit_item_left: {
        width: 60,
        height: 45,
        color: BlackTextColor,
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize:14
    },
    address_edit_item_right: {
        width: deviceWidth - 90,
        height: 45,
        textAlign: 'left',
        textAlignVertical: 'center',
        marginStart:10
    },
    address_edit_viewTextBg: {
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
    address_edit_text2: {
        color: White,
        textAlign: 'right',
        fontSize: 14,
        marginTop: 10,
        marginRight: 50
    },
    btn_touchableopacity: {
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
    btn_text: {
        color: White,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Gill Sans',
        margin: 10,
        backgroundColor: 'transparent'
    },
    address_edit_lineargradient: {
        borderRadius: 25,
        width: 300,
        height: 38,
        alignSelf: 'center',
        justifyContent: 'center',

    },
    waitorder_bg: {
        width: deviceWidth - 20,
        backgroundColor: '#ffffff',
        shadowColor: BackgroundColorLight,
        borderRadius: 5,
        elevation: 3,
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 5
    },
    waitorder_print_bg: {
        width: 60,
        height: 20,
        backgroundColor: '#ffffffff',
        shadowColor: ColorStart,
        elevation: 3,
        borderColor: BackgroundColorLight,
        justifyContent: 'center',
        borderRadius: 30,
        marginEnd: 10,
        alignItems: 'center'
    },
    waitorder_print_text: {
        color: White,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Gill Sans',
        margin: 10,
        backgroundColor: 'transparent'
    },
    message_note_bg: {
        width: deviceWidth - 20,
        backgroundColor: '#ffffff',
        shadowColor: BackgroundColorLight,
        borderRadius: 5,
        elevation: 3,
        marginTop: 5,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 5
    },
    message_note_time_bg: {
        width: 120,
        height: 25,
        backgroundColor: ColorTextGrey,
        shadowColor: BackgroundColorLight,
        borderRadius: 20,
        elevation: 3,
        marginTop: 5,
        marginBottom: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTextBg: {
        width: 220,
        height: 30,
        backgroundColor: '#ffffff',
        borderColor: '#080808',
        justifyContent: 'center',
        borderRadius: 15,
        borderStyle: 'solid',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
    },
    order_address_view: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        marginStart: 10
    },
    order_address_name_text: {
        marginStart: 10,
        fontSize: 16,
        color: BlackColor
    },
    order_address_text: {
        marginTop: 5,
        marginStart: 10,
        fontSize: 14,
        color: ColorTextGrey
    },
    order_detail_text: {
        marginTop: 5,
        fontSize: 12,
        color: ColorTextGrey
    },
    order_cancle_view: {
        width: 100,
        height: 30,
        backgroundColor: '#ffffff',
        borderColor: BlackColor,
        justifyContent: 'flex-end',
        borderRadius: 30,
        borderStyle: 'solid',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
    },
    add_address_bg: {
        backgroundColor: White,
        marginTop: 10,
        paddingStart: 10,
        paddingEnd: 10
    },
    shortLine: {
        width: deviceWidth - 20,
        marginStart: 10,
        marginEnd: 10
    },
    radio_press: {
        backgroundColor: ColorLineRed,
        width: 20,
        height: 20,
        borderRadius: 50,
        borderColor: ColorEnd,
        borderWidth: 1
    },
    radio_unpress: {
        backgroundColor: ColorTextGrey2,
        width: 20,
        height: 20,
        borderRadius: 50,
        borderColor: ColorTextGrey,
        borderWidth: 1
    },
    mine_item:{
        width:deviceWidth,
        height:50,
        flexDirection:'row',
        alignItems: 'center',
    },
    mine_item_text:{
        textAlign:'left',
        fontSize:14,
        color:BlackColor,
        marginStart:10,
    },

});
export default styles;