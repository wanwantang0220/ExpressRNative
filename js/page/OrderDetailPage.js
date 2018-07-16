/**
 * 订单详情
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, StatusBar} from "react-native";
import NaviBarView from "../component/NaviBarView";
import TitleView from "../component/TitleView";


export default class OrderDetailPage extends Component {

    static navigationOptions = {
        //标题
        title: "订单详情",
        drawerLabel: '订单详情',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };

    componentDidMount() {
        const {params} = this.props.navigation.state.params;
        const uuid = params ? params.uuid : null;
        console.log('uuid = ', uuid);
    }

    render() {

        return (
            <View style={[styles.container]}>
                {/*<StatusBar*/}
                {/*animated={true}*/}
                {/*backgroundColor="black"*/}
                {/*barStyle='light-content'/>*/}
                {/*<NaviBarView backgroundColor="black"/>*/}
                {/*<TitleView title='订单详情' onBack={() => {*/}
                {/*this.props.navigation.goBack();*/}
                {/*}}/>*/}

            </View>
        )
    }
}

const styles = StyleSheet.create({});
