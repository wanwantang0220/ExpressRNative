import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    StatusBar,
    ImageBackground,
    PixelRatio
} from 'react-native';
import ScreenUtil from '../util/ScreenUtil';

export default class MenuPage extends Component {

    render() {

        return (
            <View>
                <Image
                    style={[styles.image]}
                    source={require('../../img/icon_menu_header.png')}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            width: ScreenUtil.width,
            height: 150

        }
    })
;