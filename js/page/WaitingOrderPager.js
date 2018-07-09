/**
 * 待接单
 **/

import React, {Component} from 'react';
import {
    Dimensions, Image, StyleSheet, View, Text, TouchableOpacity, ScrollView, RefreshControl,
    FlatList
} from "react-native";
import {deviceWidth} from "../util/ScreenUtil";
import HttpManager from "../data/http/HttpManager";
import {connect} from "react-redux";
import * as waitorderAction from "../actions/waitorderAction";
import {PAGE_SIZE, START_PAGE, SUCCESS} from "../constant/Contants";
// import RefreshListView from "../component/refresh/RefreshListView";
import WaitOrderItemCell from "../component/WaitOrderItemCell";
import RefreshState from "../component/refresh/RefreshState";
import {BackgroundColorLight, ColorTextGrey, SeparatorColor, White} from "../style/BaseStyle";

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
            mData: [],
            refreshing: true,
            startPage: START_PAGE,   // 从第几页开始加载
            pageSize: PAGE_SIZE,   // 每页加载多少条数据
            isLoadMore: ''
        };
    }


    componentDidMount() {
        // this.listView.beginHeaderRefresh();
        this.requestRefreshData();
        console.log('wait-order-page   debug', 'componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('wait-order-page   debug', 'componentWillReceiveProps');

        if (nextProps.status === SUCCESS && nextProps.isSuccess) {
            // this.setState({mData: nextProps.object.list});
            let response = nextProps.object;
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
            let footer = '';
            let startPage = this.state.startPage;
            if (currentCount + mlist.length <= totalCount) {
                if (startPage === START_PAGE) {
                    footerState = RefreshState.NoMoreData;
                    footer = '没有更多数据了';
                } else {
                    // 还有数据可以加载
                    footerState = RefreshState.CanLoadMore;
                    // 下次加载从第几条数据开始
                    startPage = startPage + 1;
                    footer = '加载更多';
                }
            } else {
                footerState = RefreshState.NoMoreData;
                footer = '没有更多数据了';
            }
            // 更新movieList的值
            let mData = this.state.mData.concat(mlist);
            this.setState({
                mData: mData,
                startPage: startPage,
                refreshing: false,
                isLoadMore: footer,
            });
            console.log('list', nextProps.object.list);

        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('wait-order-page   debug', 'shouldComponentUpdate')
    //
    //     //一旦 shouldComponentUpdate() 返回 false，
    //     // 这就意味着 componentWillUpdate()、 render() 和 componentDidUpdate() 将不再执行。
    //     // if (nextProps.status === SUCCESS && nextProps.isSuccess) {
    //     //     return false;
    //     // }
    //     return true;
    //
    // }

    render() {

        console.log('wait-order-page   debug', 'render');


        const list = this.state.mData;

        return (
            <View style={[styles.curcontainer]}>

                <ScrollView style={styles.scrollview_container}
                            showsVerticalScrollIndicator={false}
                            refreshControl={this.refreshControlView()}>

                    <FlatList
                        data={this.state.mData}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) => (this.renderItem(item))}
                        showsVerticalScrollIndicator={false}
                    />
                    {/*加载更多*/}
                    <View style={styles.commentary_item_loadmore_view}>{this.getCommentaryItemLoadView()}</View>
                </ScrollView>

                {/*<RefreshListView*/}
                {/*ref={(ref) => {*/}
                {/*this.listView = ref*/}
                {/*}}*/}
                {/*colors={['red', '#ffd500', '#0080ff', '#99e600']}*/}
                {/*data={list}*/}
                {/*renderItem={this.renderItem}*/}
                {/*keyExtractor={(item) => {*/}
                {/*return item.uuid || item.orderNo;*/}
                {/*}}*/}
                {/*ListEmptyComponent={this.renderEmptyView}*/}
                {/*onHeaderRefresh={() => {*/}
                {/*this.requestRefreshData()*/}
                {/*}}*/}
                {/*onFooterRefresh={() => {*/}
                {/*this.requestRefreshData()*/}
                {/*}}>*/}
                {/*</RefreshListView>*/}
            </View>
        )
    }

    refreshControlView() {
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.refresh()}
                colors={['#ff0000', '#00ff00', '#0000ff']}
            />
        )
    }

    refresh() {
        this.setState({
            refreshing: true,
            mData: [],
        });
        this.requestRefreshData()
    }

    renderEmptyView = (item) => {
        return (
            <View>
                <Text>Empty</Text>
            </View>
        )
    };

    renderItem = (item) => {
        const itm = item;
        const {acceptOrder} = this.props.acceptOrder;
        return (
            <WaitOrderItemCell item={item} onAcceptOrder={this.handAcceptOrder(item.uuid)}/>
        )
    };


    handAcceptOrder(uuid){
        let {acceptOrder} = this.props;
        let object = {
            "object": uuid
        };
        acceptOrder();
    }

    /**
     *
     * @param isrefresh  刷新
     * @param isloadmore 加载更多
     */
    requestRefreshData() {
        // if (isrefresh) {
        //     this.setState({
        //         mData: [],
        //         isRefresh: true,
        //         startPage: START_PAGE
        //     });
        //
        //     this.state.mData = [];
        //     this.state.startPage = 1;
        // }
        // if (isloadmore) {
        //     this.setState({
        //         isLoadMore: true
        //     })
        // }
        let {waitorderList} = this.props;
        let object = {
            "object": {}
        };

        waitorderList(object);

    }

    getCommentaryItemLoadView() {

        return (
            <TouchableOpacity onPress={() => {
            }}>
                <Text style={[styles.commentary_item_loadmore_text]}>{this.state.isLoadMore}</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => ({
    status: state.waitorderList.status,
    isSuccess: state.waitorderList.isSuccess,
    object: state.waitorderList.object,
});


const mapDispatchToProps = (dispatch) => ({
    waitorderList: param => dispatch(waitorderAction.waitorderList(param)),
    acceptOrder: param => dispatch(waitorderAction.acceptOrder(param))
});
export default connect(mapStateToProps, mapDispatchToProps)(WaitingOrderPager);


const styles = StyleSheet.create({
    curcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:White,
        backgroundColor: SeparatorColor
    },
    scrollview_container: {
        flex: 1,
    },
    commentary_item_loadmore_view: {
        width: deviceWidth,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentary_item_loadmore_text: {
        fontSize: 12,
        color: ColorTextGrey
    }
});
