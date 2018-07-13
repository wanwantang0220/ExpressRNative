import React, {PureComponent} from "react";
import {View} from "react-native";
import {PAGE_SIZE, START_PAGE, TOTAL_ROW} from "../constant/Contants";
import HttpManager from "../data/http/HttpManager";
import RefreshListView from "../component/refresh/RefreshListView";
import RefreshState from "../component/refresh/RefreshState";
import {BackgroundColor} from "../style/BaseStyle";
import MessageNoteItemCell from "../component/MessageNoteItemCell";
import {storage} from "../data/storage/Storage";


let USER_INFO = '';

export default class MessageNotePage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '消息中心',
        title: '消息中心',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: <View/>,
        drawerLockMode: 'locked-closed',
    };

    constructor(props) {
        super(props);
        this.state = {
            mList: [],
            startPage: START_PAGE,
            pageSize: PAGE_SIZE,
            totalRow: TOTAL_ROW
        };

        storage.load('userInfo', (response) => {
            USER_INFO = response;

        });

        this.httpManager = new HttpManager();
    }

    componentDidMount() {
        this.listView.beginHeaderRefresh();
    }

    render() {
        return (
            <View style={{backgroundColor: BackgroundColor}}>
                <RefreshListView
                    ref={(ref) => {
                        this.listView = ref
                    }}
                    data={this.state.mList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.uuid}
                    ListEmptyComponent={this.renderEmptyView}
                    onHeaderRefresh={() => {
                        this.refreshList()
                    }}
                    onFooterRefresh={() => {
                        this.loadList()
                    }}
                />
            </View>
        )
    }

    renderItem = (item) => {

        return (
            <MessageNoteItemCell item={item.item} onSelectItem={() => {
                this.onSelectItem(item)
            }}/>
        )
    };


    onSelectItem(item) {

    }

    /// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件
    renderEmptyView = (item) => {
        return <View/>
    };

    refreshList() {
        this.setState({
            startPage: START_PAGE,
            totalRow: TOTAL_ROW,
            mList: [],
        }, function () {
            this.requestData();
        });


    }


    /***
     * setState是异步的，所以试图在setState调用之后直接使用状态将不起作用，因为更新不一定会运行。
     * 相反，可以使用第二个参数setState作为回调： function ()
     */
    loadList() {

        const list = this.state.mList;
        const total = this.state.totalRow;

        if (list.length < total) {
            let startPage = this.state.startPage + 1;
            this.setState({
                startPage: startPage,
            }, function () {
                this.requestData();
            });
        } else {

        }
    }

    requestData() {
        let startPage = this.state.startPage;
        let pageSize = this.state.pageSize;

        let objectChild = {
            "object": {
                "receiverUuid": USER_INFO.userUuid,
            },
            "pageRow": pageSize,
            "startPage": startPage
        };

        let object = {
            "object": objectChild
        };

        console.log('startPage = ', this.state.startPage);

        this.httpManager.getMessageList(object, (response) => {
            const res = response.list;

            var dataBlob = [];
            for (let i in res) {
                let info = {
                    uuid: res[i].uuid,
                    title: res[i].title,
                    content: res[i].content,
                    createTime: res[i].createTime,
                    type: res[i].type,
                    receiverUuid: res[i].receiverUuid,
                    readFlag: res[i].readFlag,
                    orderNo: res[i].orderNo,
                };
                dataBlob.push(info);
            }

            let totalCount = response.totalRow;

            // 当前已经加载的条数
            let currentCount = this.state.mList.length;

            // 根据已经加载的条数和总条数的比较，判断是否还有下一页
            let footerState = RefreshState.Idle;
            // let startPage = this.state.startPage;
            if (currentCount + dataBlob.length < totalCount) {
                // 还有数据可以加载
                footerState = RefreshState.CanLoadMore;
                // 下次加载从第几条数据开始
                // startPage = startPage + 1;
            } else {
                footerState = RefreshState.NoMoreData;
            }
            // 更新movieList的值
            let mList = this.state.mList.concat(dataBlob);
            this.setState({
                mList: mList,
                totalRow: totalCount,
                // startPage: startPage
            });
            this.listView.endRefreshing(footerState);

        });
    }

}
