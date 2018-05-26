import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image, StatusBar, Dimensions
} from 'react-native';
import NaviBarView from "../component/NaviBarView";
import {White} from "../style/BaseStyle";
import {deviceWidth} from "../util/ScreenUtil";

export default class HomePage extends Component {

    static navigationOptions = {
        drawerLabel: '首页',
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
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
                            style={styles.toolbar_left_img}
                            tintColor={White}/>
                    </TouchableOpacity>
                    <View style={styles.toolbar_middle}>
                        <Text style={styles.toolbar_middle_text}>首页</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={() => {
                    //点击打开抽屉
                    this.props.navigation.navigate('DrawerOpen')
                }}>
                    <Text>打开侧滑栏</Text>
                </TouchableOpacity>
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
    }
});
