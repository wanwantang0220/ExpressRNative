/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, StatusBar, TouchableOpacity} from "react-native";
import NaviBarView from "../component/NaviBarView";
import {White} from "../style/BaseStyle";
import {deviceWidth} from "../util/ScreenUtil";
import TitleView from "../component/TitleView";
import HttpManager from "../data/http/HttpManager";
import RefreshListView from "../component/refresh/RefreshListView";
import RefreshState from "../component/refresh/RefreshState";


export default class AddressPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '地址簿',
        //标题
        title:"地址簿",
        headerTitleStyle:{
            flex: 1,
            textAlign:"center",
        },
        headerRight:<View/>
    };

    constructor(props){
        super(props);
        this.state={
            mData:[],
            startPage: 1,   // 从第几页开始加载
            pageSize: 10,   // 每页加载多少条数据
        };
        this.httpManager  = new HttpManager();

    }

    componentDidMount() {
        this.requestData();
    }


    render() {

        return (
            <View style={[styles.container]}>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'
                />
                <NaviBarView backgroundColor="black"/>
                <TitleView title='地址簿' onBack={()=>{
                    this.props.navigation.pop();
                }}/>

                <RefreshListView
                    ref={(ref) => {this.listView = ref}}
                    data={this.state.mData}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={this.renderEmptyView}
                    onHeaderRefresh={() => { this.requestData() }}
                    onFooterRefresh={() => { this.requestData() }}
                />
            </View>
        )
    }

    /// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件
    renderEmptyView = (item) => {
        return <View><Text>暂无数据</Text></View>
    };

    renderItem = (item) => {
        return (
            <Text>tece</Text>
        )
    };



    requestData(){
        let that = this;
        let params = {
            "addUserPhone": "18961812572",
            "addUserType": "2" ,
            "addrType":"1"
        };
        let object2={
            "object":params,
            "pageRow":this.state.pageSize,
            "startPage":this.state.startPage
        };
        let object = {
            "object": object2
        };

        this.httpManager.requestAddresses(object,(response)=>{
            console.log("response",response);
            let mlist = [];
            for (let idx in response.list) {
                let item = response.list[idx];
                mlist.push(item)
            }
            // 获取总的条数
            let totalCount = response.totalRow;

            // 当前已经加载的条数
            let currentCount = this.state.mData.length;

            // 根据已经加载的条数和总条数的比较，判断是否还有下一页
            let footerState = RefreshState.Idle;
            let startPage = this.state.startPage;
            if (currentCount + mlist.length < totalCount) {
                // 还有数据可以加载
                footerState = RefreshState.CanLoadMore;
                // 下次加载从第几条数据开始
                startPage = startPage+ mlist.length;
            } else {
                footerState = RefreshState.NoMoreData;
            }
            // 更新movieList的值
            let mList = this.state.mData.concat(mlist);
            that.setState({
                mData: mList,
                startPage: startPage
            });
            that.listView.endRefreshing(footerState);

        });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 56,
        width: deviceWidth,
        alignItems: 'center',
        flexDirection: 'row',
    },
    toolbar_left_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginLeft: 20,
    },
    toolbar_middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toolbar_middle_text: {
        fontSize: 18,
        fontWeight: '600',
        color: White
    },
    toolbar_right_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginRight: 20,
    },
});
