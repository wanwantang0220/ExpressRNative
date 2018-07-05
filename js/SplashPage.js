import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from "react-native";
import {deviceHeight, deviceWidth} from "./util/ScreenUtil";
import {NavigationActions, StackActions} from "react-navigation";


export default class SplashPage extends Component {


    componentDidMount() {
        //还是有白屏问题
        setTimeout(()=>{
            // const navigator = this.props.navigator;
            // if(navigator){
            //     navigator.replace({
            //         component:LoginPage,
            //     });
            // }
            const resetAction = StackActions.reset({
                index:0,
                actions: [
                    NavigationActions.navigate({routeName: 'Login'})
                ]
            });
            this.props.navigation.dispatch(resetAction);
        },2000)
    }


    render() {
        return (
            <View style={styles.flex} >
                <Image
                    style={[styles.container]}
                    source={require('../img/icon_splash.png')}
                    />
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
        width: deviceWidth,
        height: deviceHeight,
    },
});