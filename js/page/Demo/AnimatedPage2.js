import React, {PureComponent} from 'react';
import {Animated, View, Easing, TouchableOpacity, Text, TouchableHighlight, ScrollView, Image} from "react-native";
import {ColorLineRed} from "../../style/BaseStyle";
import {deviceWidth} from "../../util/ScreenUtil";

export default class AnimatedPage2 extends PureComponent {

    static navigationOptions = {
        title: 'AnimatedPage2',
        drawerLabel: 'AnimatedPage2',
    };

    state: {
        fadeAnim: Animated,
        currentAlpha: number,
        xOffset: Animated,
    };

    constructor(props) {
        super(props);
        this.state = {
            currentAlpha: 1.0,//标志位，记录当前value
            fadeAnim: new Animated.Value(1.0),
            xOffset: new Animated.Value(1.0)
        }
    }

    componentDidMount() {

    }

    render() {


        return (
            <View style={{flex: 1, marginTop: 20, alignItems: 'center', flexDirection: 'column'}}>

                <Animated.Text
                    style={{
                        opacity: this.state.fadeAnim, //透明度动画
                        transform: [{ //transform动画
                            translateX: this.state.fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [60, 0]//线性插值，0对应60，0.6对应30，1对应0
                            })
                        }, {
                            scale: this.state.fadeAnim
                        }]
                    }}>
                    Welcome to React Native!
                </Animated.Text>

                <TouchableOpacity
                    style={{
                        marginTop: 20, backgroundColor: ColorLineRed,
                        height: 35, width: 140, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => this.startAnimation()}>
                    <Text>Start Animation</Text>
                </TouchableOpacity>

                <ScrollView horizontal={true} //水平滑动
                            showsHorizontalScrollIndicator={false}
                            style={{width: deviceWidth, height: 300}}//设置大小
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {x: this.state.xOffset}}}]//把contentOffset.x绑定给this.state.xOffset
                            )}
                            scrollEventThrottle={100}
                >
                    <Animated.Image source={require('../../../img/s3.png')}
                                    style={{
                                        height: 300,
                                        width: deviceWidth,
                                        opacity: this.state.xOffset.interpolate({//映射到0.0,1.0之间
                                            inputRange: [0, 375],
                                            outputRange: [1.0, 0.0]
                                        }),
                                    }}
                                    resizeMode="cover"/>
                    <Image source={require('../../../img/s4.png')} style={{height: 300, width: deviceWidth}}
                           resizeMode="cover"/>
                    <Image source={require('../../../img/s2.png')} style={{height: 300, width: deviceWidth}}
                           resizeMode="cover"/>
                </ScrollView>
            </View>
        )
    }


    startAnimation() {
        this.state.currentAlpha = this.state.currentAlpha == 1.0 ? 0.0 : 1.0;
        Animated.timing(
            this.state.fadeAnim,
            {toValue: this.state.currentAlpha}
        ).start();
    }
}

