import React, {PureComponent} from 'react';
import {Animated, View, Easing, TouchableOpacity, Text, TouchableHighlight} from "react-native";

export default class AnimatedPage extends PureComponent {

    //构造函数中初始化一个带动画属性的值用于旋转动画的初始值
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
        this.state = {
            fadeAnim: new Animated.Value(-1),//
        }
    }

    componentDidMount() {
        // this.spin();
        this.animate(0);
        this.fadeAnim();
    }

    render() {

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });

        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2]
        })
        const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        })
        const introButton = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 400]
        })

        return (
            <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
                <Animated.Text style={{opacity: this.state.fadeAnim}}>绑定到属性
                    Welcome to React Native!
                </Animated.Text>
                <Animated.Image style={{
                    width: 100, height: 100,marginTop:20,
                    transform: [{rotate: spin}]
                }}
                                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />

                <TouchableOpacity
                    style={{
                        marginTop: 20, backgroundColor: '#808080',
                        height: 35, width: 140, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        this.spin()
                    }}>
                    <Text>启动动画</Text>
                </TouchableOpacity>

                <View>

                    <Animated.View
                        style={{marginTop: 20, transform: [{rotate: spinText}]}}>
                        <Text style={{fontSize: 20}}>to the App</Text>
                    </Animated.View>
                    <Animated.View
                        style={{top: introButton, position: 'absolute'}}>
                        <TouchableHighlight
                            onPress={this.animate.bind(this)}
                            style={{
                                marginTop: 20,
                                backgroundColor: '#808080',
                                height: 35,
                                width: 140,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text>启动组动画</Text>
                        </TouchableHighlight>
                    </Animated.View>
                </View>
            </View>
        )
    }


    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue,
            {toValue: 1, duration: 4000, easing: Easing.linear})
            .start(() => {
                this.spin()
            });

    }


    animate() {
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
                }
            )
        }
        Animated.parallel([
            createAnimation(this.animatedValue1, 2000, Easing.ease),
            createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
            createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
        ]).start()
    }


    fadeAnim() {
        Animated.timing(
            this.state.fadeAnim,////初始值
            {toValue: 1} //结束值
        ).start();//开始
    }
}

