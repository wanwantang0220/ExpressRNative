import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image, StatusBar, Dimensions, PixelRatio,YellowBox
} from 'react-native';
import NaviBarView from "../component/NaviBarView";
import {White} from "../style/BaseStyle";
import {deviceWidth} from "../util/ScreenUtil";
import {storage} from '../data/storage/Storage';
import HomeCell from "../component/HomeCell";
import HttpManager from "../data/http/HttpManager";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class HomePage extends Component {

    static navigationOptions = {
        drawerLabel: '首页',
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount () {
    }


    render() {

        const {homePageState} = this.props;

        return (
            <View style={[styles.container]}>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'
                />
                <NaviBarView backgroundColor="black"/>
                <View style={[styles.toolbar, {backgroundColor: "black"}]}>
                    <TouchableOpacity
                        onPress={() => {
                            //点击打开抽屉
                            this.props.navigation.navigate('DrawerOpen')
                        }}>
                        <Image
                            source={require('../../img/icon_menu.png')}
                            style={[styles.toolbar_left_img]}
                            tintColor={White}/>
                    </TouchableOpacity>
                    <View style={[styles.toolbar_middle]}>
                        <Text style={[styles.toolbar_middle_text]}>首页</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={() => {
                    //点击打开抽屉
                    this.props.navigation.navigate('DrawerOpen')
                }}>
                    <Text>打开侧滑栏</Text>
                </TouchableOpacity>


                <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 20}}>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 15}]}
                        activeOpacity={0.85}
                        underlayColor='white'
                        onPress={() => this.props.navigation.navigate('WaitingOrder')}>
                        <Text style={{marginLeft: 15, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: '#333333'}}>
                            接单
                        </Text>
                        <Text style={{marginLeft: 15, marginTop: 5, fontSize: 14, color: '#7A7A7A'}}>1/10</Text>
                        <Text style={{marginLeft: 15, marginTop: 15, color: '#7A7A7A'}}>......</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 10, marginRight: 10}]}
                        activeOpacity={0.85}
                        underlayColor='white'
                        onPress={() => this.props.navigation.navigate('PrintOrder')}>
                        <Text style={{marginLeft: 15, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: '#333333'}}>
                            打单
                        </Text>
                        <Text style={{marginLeft: 15, marginTop: 5, fontSize: 14, color: '#7A7A7A'}}>1/10</Text>
                        <Text style={{marginLeft: 15, marginTop: 15, color: '#7A7A7A'}}>......</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 10}}>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 15}]}
                        onPress={() => this.props.navigation.navigate('Maps')}>

                        <Text style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>下单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.viewBg, {flex: 1, marginLeft: 10, marginRight: 15}]}
                        onPress={() => this.props.navigation.navigate('JPush')}>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>消息</Text>
                        <Text style={{marginLeft: 15, marginTop: 5, fontSize: 14, color: '#7A7A7A'}}>10</Text>
                    </TouchableOpacity>


                </View>
                <View style={{width: deviceWidth, flexDirection: 'row'}}>
                    <TouchableOpacity style={[styles.viewTextBg, {marginTop: 20, marginLeft: 50}]}
                                      onPress={() => this.props.navigation.navigate('Bluetooth')}>
                        <Text style={{color: '#333333', textAlign: 'center',}}>2018/5/28 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: White
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
    image: {
        width: deviceWidth,
        height: 180,
        // 设置图片填充模式
        // resizeMode: 'stretch'
    },
    bannerBg: {
        width: deviceWidth,
        height: 150,
    },
    viewBg: {
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        shadowColor: '#CFCFCF',
        borderRadius: 25,
        elevation: 50,
    },
    viewTextBg: {
        width: 220,
        height: 30,
        backgroundColor: '#ffffff',
        borderColor: '#080808',
        justifyContent: 'center',
        borderRadius: 15,
        borderStyle: 'solid',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
    }
});
