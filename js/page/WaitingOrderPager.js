/**
 * 待接单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {deviceWidth} from "../util/ScreenUtil";
import HttpManager from "../data/http/HttpManager";
import {connect} from "react-redux";
import waitorderAction from "../reducers/rootReducer";

class WaitingOrderPager extends Component {

    static navigationOptions = ({navigation}) => ({
        //标题
        title: "待接单",
        drawerLabel: '待接单',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    });


    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            isInit: false,
            mData: []
        };
    }

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    shouldComponentUpdate() {
        
    }

    render() {

        return (
            <View>
                <Text>待接单</Text>
            </View>
        )
    }

    /**
     * 请求数据
     */
    requestData() {


        let {waitorderList} = this.props;
        let object = {
            "object": {}
        };

        waitorderList(object);
    }
}

const mapStateToProps = (state) => ({
    status: 'loading',
    isSuccess: false,
    list: []
});


const mapDispatchToProps = (dispatch) => ({
    waitorderList: param => dispatch(waitorderAction.waitorderList(param))
});
export default connect(mapStateToProps, mapDispatchToProps)(WaitingOrderPager);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
