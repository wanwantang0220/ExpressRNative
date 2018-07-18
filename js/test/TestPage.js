/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Platform, Text, View, Animated, ActivityIndicator, StyleSheet, Image,Easing} from "react-native";
import Camera from "react-native-camera";
import {deviceWidth} from "../util/ScreenUtil";
import {black_000, black_00000080, blue_4187E8, white_fff, yellow_FFD900} from "../style/BaseStyle";

export default class ScanTestPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maskColor: '#0000004D',
            cornerColor:yellow_FFD900,
            borderColor: '#000000',
            rectHeight: 200,
            rectWidth: 200,
            borderWidth: 0,
            cornerBorderWidth: 4,
            cornerBorderLength: 20,
            isLoading: false,
            cornerOffsetSize: 0,
            isCornerOffset: false,
            bottomMenuHeight: 0,
            scanBarAnimateTime: 2500,
            scanBarColor: yellow_FFD900,
            scanBarImage: require('../../img/scanBar.png'),
            scanBarHeight: 1.5,
            scanBarMargin: 6,
            hintText: '将二维码/条码放入框内，即可自动扫描',
            hintTextStyle: {color: '#fff', fontSize: 14, backgroundColor: 'transparent'},
            hintTextPosition: 130,
            isShowScanBar: true,

            topWidth: 0,
            topHeight: 0,
            leftWidth: 0,
            animatedValue: new Animated.Value(0),
        }
    }

    static navigationOptions = {
        //标题
        title: "扫描",
        drawerLabel: '扫描',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };


    componentDidMount() {
        this.scannerLineMove();
    }

    render() {

        const animatedStyle = {
            transform: [
                {translateY: this.state.animatedValue}
            ]
        };

        return (
            <View style={{flex: 1}}>
                <Camera style={{flex: 1}}>
                    <View
                        onLayout={({nativeEvent: e}) => this.measureTotalSize(e)}
                        style={[styles.container, this.getBottomMenuHeight()]}>

                        <View style={[styles.viewfinder, this.getRectSize()]}
                              onLayout={({nativeEvent: e}) => this.measureRectPosition(e)}
                        >

                            <View>
                                {/*扫描框部分*/}
                                <View>
                                    {/*扫描框边线*/}
                                    <View style={[
                                        this.getBorderSize(),
                                        this.getBorderColor(),
                                        this.getBorderWidth(),
                                    ]}>

                                        <Animated.View
                                            style={[animatedStyle,]}>
                                            {this.renderScanBar()}
                                        </Animated.View>

                                    </View>

                                    {/*扫描框转角-左上*/}
                                    <View style={[
                                        this.getCornerColor(),
                                        this.getCornerSize(),
                                        styles.topLeftCorner,
                                        {
                                            borderLeftWidth: this.state.cornerBorderWidth,
                                            borderTopWidth: this.state.cornerBorderWidth,
                                        }
                                    ]}/>

                                    {/*扫描框转角-右上*/}
                                    <View style={[
                                        this.getCornerColor(),
                                        this.getCornerSize(),
                                        styles.topRightCorner,
                                        {
                                            borderRightWidth: this.state.cornerBorderWidth,
                                            borderTopWidth: this.state.cornerBorderWidth,
                                        }
                                    ]}/>

                                    {/*加载动画*/}
                                    {this.renderLoadingIndicator()}

                                    {/*扫描框转角-左下*/}
                                    <View style={[
                                        this.getCornerColor(),
                                        this.getCornerSize(),
                                        styles.bottomLeftCorner,
                                        {
                                            borderLeftWidth: this.state.cornerBorderWidth,
                                            borderBottomWidth: this.state.cornerBorderWidth,
                                        }
                                    ]}/>


                                    {/*扫描框转角-右下*/}
                                    <View style={[
                                        this.getCornerColor(),
                                        this.getCornerSize(),
                                        styles.bottomRightCorner,
                                        {
                                            borderRightWidth: this.state.cornerBorderWidth,
                                            borderBottomWidth: this.state.cornerBorderWidth,
                                        }
                                    ]}/>
                                </View>

                                {/*遮罩-上*/}
                                <View style={[
                                    this.getBackgroundColor(),
                                    styles.topMask,
                                    {
                                        bottom: this.getTopMaskHeight(),
                                        width: this.state.topWidth,
                                    }
                                ]}/>

                                {/*遮罩-左*/}
                                <View style={[
                                    this.getBackgroundColor(),
                                    styles.leftMask,
                                    {
                                        height: this.getSideMaskHeight(),
                                        width: this.getSideMaskWidth(),
                                    }
                                ]}/>

                                {/*遮罩-右*/}
                                <View style={[
                                    this.getBackgroundColor(),
                                    styles.rightMask,
                                    {
                                        height: this.getSideMaskHeight(),
                                        width: this.getSideMaskWidth(),
                                    }]}/>

                                {/*遮罩-下*/}
                                <View style={[
                                    this.getBackgroundColor(),
                                    styles.bottomMask,
                                    {
                                        top: this.getBottomMaskHeight(),
                                        width: this.state.topWidth,
                                    }]}/>

                                {/*提示文字*/}
                                <View style={{position: 'absolute', bottom: this.state.hintTextPosition}}>
                                    <Text style={this.state.hintTextStyle}>{this.state.hintText}</Text>
                                </View>
                            </View>

                            {/*底部操作栏*/}

                        </View>
                    </View>
                </Camera>

            </View>
        )

    }


    //获取背景颜色
    getBackgroundColor() {
        return ({
            backgroundColor: this.state.maskColor,
        });
    }

    //获取扫描框背景大小
    getRectSize() {
        return ({
            height: this.state.rectHeight,
            width: this.state.rectWidth,
        });
    }

    //获取扫描框边框大小
    getBorderSize() {
        if (this.state.isCornerOffset) {
            return ({
                height: this.state.rectHeight - this.state.cornerOffsetSize * 2,
                width: this.state.rectWidth - this.state.cornerOffsetSize * 2,
            });
        } else {
            return ({
                height: this.state.rectHeight,
                width: this.state.rectWidth,
            });
        }
    }

    //获取扫描框转角的颜色
    getCornerColor() {
        return ({
            borderColor: this.state.cornerColor,
        });
    }

    //获取扫描框转角的大小
    getCornerSize() {
        return ({
            height: this.state.cornerBorderLength,
            width: this.state.cornerBorderLength,
        });
    }

    //获取扫描框大小
    getBorderWidth() {
        return ({
            borderWidth: this.state.borderWidth,
        });
    }

    //获取扫描框颜色
    getBorderColor() {
        return ({
            borderColor: this.state.borderColor,
        });
    }

    //渲染加载动画
    renderLoadingIndicator() {
        if (!this.state.isLoading) {
            return null;
        }

        return (
            <ActivityIndicator
                animating={this.state.isLoading}
                color={this.state.color}
                size='large'
            />
        );
    }

    //测量整个扫描组件的大小
    measureTotalSize(e) {
        let totalSize = e.layout;
        this.setState({
            topWidth: totalSize.width,
        })
    }

    //测量扫描框的位置
    measureRectPosition(e) {
        let rectSize = e.layout;
        this.setState({
            topHeight: rectSize.y,
            leftWidth: rectSize.x,
        })
    }

    //获取顶部遮罩高度
    getTopMaskHeight() {
        if (this.state.isCornerOffset) {
            return this.state.topHeight + this.state.rectHeight - this.state.cornerOffsetSize;
        } else {
            return this.state.topHeight + this.state.rectHeight;
        }
    }

    //获取底部遮罩高度
    getBottomMaskHeight() {
        if (this.state.isCornerOffset) {
            return this.state.rectHeight + this.state.topHeight - this.state.cornerOffsetSize;
        } else {
            return this.state.topHeight + this.state.rectHeight;
        }
    }

    //获取左右两边遮罩高度
    getSideMaskHeight() {
        if (this.state.isCornerOffset) {
            return this.state.rectHeight - this.state.cornerOffsetSize * 2;
        } else {
            return this.state.rectHeight;
        }
    }

    //获取左右两边遮罩宽度
    getSideMaskWidth() {
        if (this.state.isCornerOffset) {
            return this.state.leftWidth + this.state.cornerOffsetSize;
        } else {
            return this.state.leftWidth;
        }
    }

    getBottomMenuHeight() {
        return ({
            bottom: this.state.bottomMenuHeight,
        });
    }

    getScanBarMargin() {
        return ({
            marginRight: this.state.scanBarMargin,
            marginLeft: this.state.scanBarMargin,
        })
    }

    getScanImageWidth() {
        return this.state.rectWidth - this.state.scanBarMargin * 2
    }


    //绘制扫描线
    renderScanBar() {
        if (!this.state.isShowScanBar) return;
        if (this.state.scanBarImage) {
            return <Image style={{resizeMode: 'contain', width: this.getScanImageWidth()}}
                          source={this.state.scanBarImage}/>
        } else {
            return <View style={[this.getScanBarMargin(), {
                backgroundColor: this.state.scanBarColor,
                height: this.state.scanBarHeight,
            }]}/>
        }
    }


    scannerLineMove() {
        this.state.animatedValue.setValue(0);  //重置Rotate动画值为0
        Animated.timing(this.state.animatedValue, {
            toValue: this.state.rectHeight,
            duration: this.state.scanBarAnimateTime,
            easing: Easing.linear,
            sInteraction: false
        }).start(() => this.scannerLineMove());
    }
}

const styles = StyleSheet.create({
    itemStyle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: (deviceWidth - 200) / 2,
        height: 200
    },
    textStyle: {
        color: '#fff',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    navTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    navBarStyle: { // 导航条样式
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'rgba(34,110,184,1.0)',
        // 设置主轴的方向
        flexDirection: 'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems: 'center',
        justifyContent: 'center'
    },

    leftViewStyle: {
        // 绝对定位
        // 设置主轴的方向
        flexDirection: 'row',
        position: 'absolute',
        left: 10,
        bottom: Platform.OS == 'ios' ? 15 : 12,
        alignItems: 'center',
        width: 30
    },
    animatiedStyle: {
        height: 2,
        backgroundColor: '#00FF00'
    },
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
    },
    rectangle: {
        height: 200,
        width: 200,
    },
    buttonsContainer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
    },
    viewfinder: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    topLeftCorner: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    topRightCorner: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    bottomLeftCorner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    bottomRightCorner: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    topMask: {
        position: 'absolute',
        top: 0,
    },
    leftMask: {
        position: 'absolute',
        left: 0,
    },
    rightMask: {
        position: 'absolute',
        right: 0,
    },
    bottomMask: {
        position: 'absolute',
        bottom: 0,
    }
});






