/**
 * 我的订单
 **/

import React, {Component} from 'react';
import { StyleSheet, View} from "react-native";
import RefreshListView from "../../component/refresh/RefreshListView";
import AddressItemCell from "../../component/AddressItemCell";
import {deviceWidth} from "../../util/ScreenUtil";
import HttpManager from "../../data/http/HttpManager";
import RefreshState from "../../component/refresh/RefreshState";
import {White} from "../../style/BaseStyle";

export default class AddressAllPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '地址簿',
        //标题
        title: "地址簿",
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };

    constructor(props) {
        super(props);
        this.state = {
            mData: [],
            startPage: 1,   // 从第几页开始加载
            pageSize: 6,   // 每页加载多少条数据
        };
        this.httpManager = new HttpManager();

    }

    componentDidMount() {
        this.listView.beginHeaderRefresh();
    }


    render() {

        return (
            <View style={[styles.container]}>

                <RefreshListView
                    ref={(ref) => {
                        this.listView = ref
                    }}
                    colors={['red', '#ffd500', '#0080ff', '#99e600']}
                    data={this.state.mData}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => {
                        return item._id || item.uuid;
                    }}
                    ListEmptyComponent={this.renderEmptyView}
                    onHeaderRefresh={() => {
                        this.requestRefreshData(true, false)
                    }}
                    onFooterRefresh={() => {
                        this.requestRefreshData(false, true)
                    }}>
                </RefreshListView>
            </View>
        )
    }

    /// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件
    renderEmptyView = (item) => {
        return <View/>
    };

    renderItem = (item) => {
        const navigator = this.props.navigator;
        return (
            <AddressItemCell address={item.item} navigator={navigator}/>
        )
    };


    /**
     *
     * @param isrefresh  刷新
     * @param isloadmore 加载更多
     */
    requestRefreshData(isrefresh, isloadmore) {
        if (isrefresh) {
            let startpage=1 , mdata=[];
            this.setState({
                mData: mdata,
                startPage: startpage
            });
            this.setState({title: 'React'});

            this.state.mData=[];
            this.state.startPage=1;
        }

        let params = {
            "addUserPhone": "18961812572",
            "addUserType": "2" ,
            "addrType":""
        };
        let object2 = {
            "object": params,
            "pageRow": this.state.pageSize,
            "startPage": this.state.startPage
        };
        let object = {
            "object": object2
        };

        console.log("startPage", this.state.startPage);

        this.httpManager.requestAddresses(object, (response) => {
            console.log("response", response);
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
                startPage = startPage + 1;
            } else {
                footerState = RefreshState.NoMoreData;
            }
            // 更新movieList的值
            let mData = this.state.mData.concat(mlist);
            this.setState({
                mData: mData,
                startPage: startPage
            });
            this.listView.endRefreshing(footerState);

        });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    }
});
