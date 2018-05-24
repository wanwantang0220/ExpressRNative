import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from "react-native";
// import * as PixelRatio from "react-native";

const {width, height} = Dimensions.get('window');

export default class SplashPage extends Component {

    render() {
        return (
            <View style={styles.flex} >
                <Image
                    style={[styles.container]}
                    source={require('../img/icon_splash.png')}
                    resizeMode="stretch" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex: 1,
        alignItems:'center'
    },
    container: {
        flex: 1,
        width: width,
        height: height,

    },
});