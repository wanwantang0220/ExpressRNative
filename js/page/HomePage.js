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

export default class HomePage extends Component {

    static  navigationOptions = {
        title: "首页"
    }

    render() {
        return (
            <View>
                <Text>Hello world</Text>
            </View>
        )
    }

}