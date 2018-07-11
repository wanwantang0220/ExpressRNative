import React, {Component} from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {BlackColor, White} from "../style/BaseStyle";
import {deviceWidth} from "../util/ScreenUtil";
import PropTypes from 'prop-types';

export default class TitleView extends Component {

    // 定义相关属性类型
    static propTypes = {
        title: PropTypes.string,
        onBack: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        const {title, onBack} = this.props;

        return (
            <View style={[styles.toolbar, {backgroundColor: "white"}]}>
                <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => {
                        onBack()
                    }}>
                    <Image
                        source={require('../../img/icon_back.png')}
                        style={[styles.toolbar_left_img]}
                    />
                    {/*<Text style={[styles.toolbar_left_text]}>返回</Text>*/}
                </TouchableOpacity>
                <View style={[styles.toolbar_middle]}>
                    <Text style={[styles.toolbar_middle_text]}>{title}</Text>
                </View>
                <Text ></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        marginLeft: 10,
    },
    toolbar_middle: {
        flex: 1,
        alignItems: 'center',
        marginRight: 50
    },
    toolbar_left_text: {
        fontSize: 14,
        fontWeight: '300',
        color: BlackColor,
        alignSelf: 'center',
    },
    toolbar_middle_text: {
        fontSize: 18,
        fontWeight: '600',
        color: BlackColor,
        alignSelf: 'center',

    },
    toolbar_right_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginRight: 20,
    },
});
