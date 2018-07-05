/**
 * 待接单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {deviceWidth} from "../util/ScreenUtil";
import HttpManager from "../data/http/HttpManager";
import {connect} from "react-redux";
import * as waitorderAction from "../actions/waitorderAction";
import {SUCCESS} from "../constant/Contants";

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
        this.requestData();
    }


    componentDidMount() {
        console.log('wait-order-page   debug','componentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('wait-order-page   debug','componentWillReceiveProps');

        if (nextProps.status === SUCCESS && nextProps.isSuccess) {
            this.setState({mData: nextProps.object.list});
            console.log('list', nextProps.object.list);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('wait-order-page   debug','shouldComponentUpdate')

        if (nextProps.status === SUCCESS && nextProps.isSuccess) {
            return false;
        }
        return true;

    }

    render() {

        return (
            <View>
                <Text/>
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
    status: state.waitorderList.status,
    isSuccess: state.waitorderList.isSuccess,
    object: state.waitorderList.object,
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
