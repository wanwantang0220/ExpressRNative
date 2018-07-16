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
        // header: null
    };

    componentDidMount() {
        const uuid = this.props.navigation.state.params.uuid;
        // const uuid = params ? params.uuid : null;
        console.log('uuid = ', uuid);
    }

    render() {

        const {navigation} = this.props.navigation;
        return (
            <View style={[styles.container]}>
                {/*<StatusBar*/}
                    {/*animated={true}*/}
                    {/*backgroundColor="black"*/}
                    {/*barStyle='light-content'/>*/}
                {/*<NaviBarView backgroundColor="black"/>*/}
                {/*<TitleView title='订单详情' onBack={() => {*/}
                    {/*this.props.navigation.goBack(null);*/}
                {/*}}/>*/}

            </View>
        )
    }
}

const styles = StyleSheet.create({});
