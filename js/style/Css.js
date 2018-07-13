import {deviceWidth} from "../util/ScreenUtil";
import {BackgroundColorLight, BlackColor, ColorStart, ColorTextGrey, White} from "./BaseStyle";
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
        color: BlackColor,
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'center',
    },
    address_edit_item_right: {
        width: deviceWidth - 90,
        height: 45,
        textAlign: 'left',
        textAlignVertical: 'center',
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
    }

});
export default styles;