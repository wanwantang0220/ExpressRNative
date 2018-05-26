import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image, StatusBar, Dimensions
} from 'react-native';
import HomePage from "./page/HomePage";
import {StackNavigator} from "react-navigation";

const {width, height} = Dimensions.get('window');

const DrawHomePage = StackNavigator({
    Home: {
        screen: HomePage
    }

});

export default DrawHomePage;