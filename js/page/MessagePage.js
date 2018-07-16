/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity} from "react-native";
import {DEFAULT_NAVBAR_HEIGHT, ParallaxScrollView} from "../component/ParallaxScrollView";
import {BaseStyles, GrayBlackColor, MainBg, White, WhiteTextColor} from "../style/BaseStyle";
import {deviceHeight, deviceWidth} from "../util/ScreenUtil";
import LinearGradient from 'react-native-linear-gradient'
import {NavigationActions} from "react-navigation";


const Header_Height = (deviceHeight - DEFAULT_NAVBAR_HEIGHT) / 2;
const InitPhoto_Count = 6;

export default class MessagePage extends Component {

    static navigationOptions = {
        //标题
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            movieData: null,
            photoDatas: null,
            commentaryDatas: {},
            isInitSuccess: true,
            IsLoadingComment: true,
            isShowAll: false,
            MainColor: '#937eff',
        };
    }

    render() {

        console.log('Header_Height : ', Header_Height);
        return (
            <ParallaxScrollView
                windowHeight={Header_Height}
                navBarTitle='test'
                navBarColor={this.state.MainColor}
                navBarTitleColor={WhiteTextColor}
                leftView={this.getParallaxLeftView()}
                rightView={<View/>}
                headerView={this.getParallaxHeaderView()}>
                <StatusBar
                    animated={true}
                    backgroundColor={this.state.MainColor}
                    barStyle='light-content'
                />

                <ScrollView style={{
                    flex: 1,
                    backgroundColor: MainBg,
                }}>
                    {/*评分等介绍*/}
                    <View style={styles.intro}>
                        <View style={styles.intro_one}>
                            <View style={styles.intro_one_left}>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>
                                <Text style={styles.intro_one_left_top_title} numberOfLines={1}>test</Text>

                            </View>
                        </View>
                    </View>
                </ScrollView>

            </ParallaxScrollView>
        )
    }

    getParallaxLeftView() {
        return (<TouchableOpacity onPress={() => {

            this.props.navigation.goBack(null);


        }}>
            <Image
                style={BaseStyles.baseIcon}
                source={require('../../img/icon_back_white.png')}/>
        </TouchableOpacity>)
    }

    getParallaxHeaderView() {
        return (
            <LinearGradient
                colors={[this.state.MainColor, WhiteTextColor]}
                style={[styles.header_view, {backgroundColor: this.state.MainColor}]}>
                <View style={styles.header_image_view}>
                    <Image
                        style={styles.header_image}
                        source={{uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'}}
                    />
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    intro: {
        padding: 16,
        height: 600,
        width: deviceWidth,
        borderBottomWidth: 1,
        borderBottomColor: White,
    },
    intro_one: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    intro_one_left: {
        flex: 1,
        paddingRight: 36,
    },
    intro_one_left_top_title: {
        fontSize: 20,
        color: GrayBlackColor,
        fontWeight: '500',
        marginBottom: 14,
    },
    header_view: {
        width: deviceWidth,
        height: Header_Height,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header_image_view: {
        width: (Header_Height - DEFAULT_NAVBAR_HEIGHT) * 0.64,
        height: (Header_Height - DEFAULT_NAVBAR_HEIGHT),
        borderRadius: 4,
        marginBottom: DEFAULT_NAVBAR_HEIGHT / 3,
        elevation: 8,
        shadowRadius: 8,
    },
    header_image: {
        width: (Header_Height - DEFAULT_NAVBAR_HEIGHT) * 0.64,
        height: (Header_Height - DEFAULT_NAVBAR_HEIGHT),
        borderRadius: 4,
    },
    baseIcon: {
        width: 26,
        height: 26,
    }
});
