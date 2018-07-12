import {PureComponent} from "react";
import {RefreshControl, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import React from "react";
import {LOAD_EMPTY, PAGE_SIZE, START_PAGE, TOTAL_ROW} from "../constant/Contants";
import HttpManager from "../data/http/HttpManager";
import NaviBarView from "../component/NaviBarView";
import theme from "../style/Theme";

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
        this.state({
            refreshing: true,
            footerInfo: LOAD_EMPTY,
            startPage: START_PAGE,
            pageSize: PAGE_SIZE,
            mList: [],
            total: TOTAL_ROW
        });
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
                    backgroundColor='black'
                    barStyle='light-content'/>
                <NaviBarView backgroundColor='black'/>
                <ScrollView
                    style={[styles.scrollview_container]}
                    showsVerticalScrollIndicator={false}
                    refreshControl={this.refreshControlView()}>

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
                title='Loading...'
                titleColor={theme.themeColor}/>
        )
    }


    onRefresh() {

        this.setState({
            refreshing: true,
            footerInfo: LOAD_EMPTY,
            startPage: START_PAGE,
            pageSize: PAGE_SIZE,
            mList: [],
            total: TOTAL_ROW
        });

        let objectChild = {
            "object": {
                "receiverUuid": "126R0O1VN6EG10TA"
            },
            "orderBy": "",
            "pageRow": PAGE_SIZE,
            "startPage": START_PAGE
        };

        this.requestData(objectChild);

    }


    requestData(objectChild) {
        let object = {
            "object": objectChild
        };


        this.httpManager.getMessageList(object,(response)=>{
            const res = response.list;

            var dataBlob = [];
            for(let i in res){

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
