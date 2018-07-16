/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {
    Dimensions, Image, StyleSheet, View, Text, StatusBar, ScrollView, RefreshControl,
    TouchableOpacity, FlatList
} from "react-native";
import NaviBarView from "../component/NaviBarView";
import HttpManager from "../data/http/HttpManager";
import theme from "../style/Theme";
import OrderListItemCell from "../component/OrderListItemCell";
import RefreshState from "../component/refresh/RefreshState";
import {LOAD_EMPTY, LOAD_NO_MORE, LOAD_NORMAL, LOADING, PAGE_SIZE, START_PAGE} from "../constant/Contants";
import TitleView from "../component/TitleView";
import MyOrderItemCell from "../component/MyOrderItemCell";
import {deviceWidth} from "../util/ScreenUtil";
import {ColorTextGrey} from "../style/BaseStyle";
import {NavigationActions, StackActions} from "react-navigation";


export default class MyOrderListPage extends Component {

    static navigationOptions = ({navigation}) => ({
        //标题
        drawerLabel: '我的收件',
        //标题
        title: "我的收件",
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>,
        drawerLockMode: 'locked-closed',
    });

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            footerInfo: LOAD_EMPTY,
            mList: [],
            startPage: START_PAGE,   // 从第几页开始加载
            pageSize: PAGE_SIZE,   // 每页加载多少条数据
            totalRow: 0
        };
        this.httpManager = new HttpManager();
    }


    componentDidMount() {
        this.onRefresh();
    }

    render() {


        return (
            <View style={[styles.container]}>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'/>
                <NaviBarView backgroundColor="black"/>
                <TitleView title='我的收件' onBack={() => {
                    this.props.navigation.goBack();
                }}/>
                <ScrollView style={styles.scrollview_container}
                            showsVerticalScrollIndicator={false}
                            refreshControl={this.refreshControlView()}>
                    {this.renderContent()}
                    {this.footerContent()}
                </ScrollView>
            </View>
        )
    }

    refreshControlView() {
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
                colors={['red', '#ffd500', '#0080ff', '#99e600']}
                tintColor={theme.themeColor}
                title="Loading..."
                titleColor={theme.themeColor}/>
        )
    }

    onRefresh() {
        this.setState({
            refreshing: true,
            mList: [],
            startPage: START_PAGE,
            pageSize: PAGE_SIZE,
            totalRow: 0,
            footerInfo: LOAD_EMPTY
        });
        let objectChild = {
            "object": "",
            "orderBy": "",
            "pageRow": this.state.pageSize,
            "startPage": this.state.startPage,
        };
        this.requestData(objectChild);
    }

    renderContent() {
        if (!this.state.refreshing || this.state.loadedData) {
            const list = this.state.mList;
            return (
                <View style={{marginBottom: 20}}>
                    <FlatList
                        data={list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (this.renderItem(item))}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )
        }
    }

    renderItem = (item) => {
        return (
            <View>
                <MyOrderItemCell item={item} onSelectOrder={() => {
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({
                                routeName: 'OrderDetail',
                                params: {uuid: item.uuid}
                            })
                        ]
                    });
                    this.props.navigation.dispatch(resetAction);

                    // const navigateAction = NavigationActions.navigate({
                    //     routeName: 'OrderDetail',
                    //     params: {uuid: item.uuid}
                    //
                    // });
                    // this.props.navigation.navigate(navigateAction);
                    // this.props.navigation.navigate('OrderDetail', {
                    //     params: {uuid: item.uuid}
                    // })
                }}/>
            </View>
        )
    };


    handSelectOrder(uuid) {

        this.prop.navigation.navigate('OrderDetail');
        // alert("uuid = " + uuid);
    }

    /***
     * 底部显示
     * @returns {*}
     */
    footerContent() {

        if (!this.state.refreshing || this.state.loadedData) {
            return (
                <View style={{
                    width: deviceWidth,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={this.loadMore.bind(this)}>
                        <Text style={{
                            fontSize: 12,
                            color: ColorTextGrey
                        }}>
                            {this.state.footerInfo}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }


    loadMore() {
        let curLoadStatus = this.state.footerInfo;
        if (curLoadStatus != LOAD_NO_MORE) {
            this.setState({
                footerInfo: LOADING,
            });
            let page = this.state.startPage + 1;
            let objectChild = {
                "object": "",
                "orderBy": "",
                "pageRow": this.state.pageSize,
                "startPage": page,
            };
            this.requestData(objectChild);
        }

    }


    /**
     * 请求数据
     */
    requestData(objectChild) {

        let object = {
            "object": objectChild
        };

        this.httpManager.getMyOrderList(object, (response) => {
            console.log("response", response);
            const res = response.list;
            var dataBlob = [];
            for (let i in res) {
                let info = {
                    uuid: res[i].uuid,
                    orderNo: res[i].orderNo,
                    orderSource: res[i].orderSource,
                    userUuid: res[i].userUuid,
                    senderLocation: res[i].senderLocation,
                    senderName: res[i].senderName,
                    senderPhone: res[i].senderPhone,
                    senderProvinceCityCountyCode: res[i].senderProvinceCityCountyCode,
                    senderProvinceCityCountyName: res[i].senderProvinceCityCountyName,
                    senderAddressDetail: res[i].senderAddressDetail,
                    orderStatus: res[i].orderStatus,
                    payStatus: res[i].payStatus,
                    createTime: res[i].createTime,
                    active: res[i].active,
                    bookedFrom: res[i].bookedFrom,
                    bookedTo: res[i].bookedTo,
                };
                dataBlob.push(info);
            }


            // 获取总的条数
            let totalCount = response.totalRow;
            // 当前已经加载的条数
            let currentCount = this.state.mList.length;
            let footer = '';
            if (currentCount + dataBlob.length < totalCount) {
                footer = LOAD_NORMAL;
            } else {
                footer = LOAD_NO_MORE;
            }

            if (dataBlob.length !== 0) {
                // 更新movieList的值
                let mdata = this.state.mList.concat(dataBlob);
                this.setState({
                    mList: mdata,
                    loadedData: true,
                    refreshing: false,
                    totalRow: response.totalRow,
                    startPage: response.startPage,
                    footerInfo: footer,
                })
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
