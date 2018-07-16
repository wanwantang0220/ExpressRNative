
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import {BlackColor, GrayColor, White} from "../style/BaseStyle";
import PropTypes from 'prop-types';


export default class HomeCell extends Component {

    // 定义相关属性类型
    static propTypes = {
        badgeStyle: PropTypes.style,
        backgroundColor: PropTypes.style,
        title: PropTypes.string,
        padding: PropTypes.number,
        renderImage: PropTypes.func,
        clickAction: PropTypes.func,
        badgeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    // render外部传递的组件
    renderImage(props) {
        if (this.props.renderImage) {
            // 这里将引用外部renderImage方法
            return React.cloneElement(this.props.renderImage(), props);
        }
        return null;
    }

    render() {
        const {title, renderImage, padding, badgeText, clickAction} = this.props;
        return (
            <TouchableOpacity
                style={[{
                    paddingTop: 40,
                    paddingBottom: 40,
                    paddingLeft: 54,
                    paddingRight: 54,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: White,
                }, this.props.badgeStyle]}
                onPress={() => {
                    clickAction();
                }} activeOpacity={0.6}>
                <View style={[styles.container, this.props.backgroundColor]}>
                    <View style={{alignSelf: 'center'}}>
                        {
                            badgeText ?
                                <View style={styles.badgeIcon}>
                                    <Text
                                        style={{
                                            color: BlackColor,
                                            fontSize: 11,
                                            backgroundColor: 'transparent',
                                        }}
                                    >{badgeText}</Text></View>
                                : <View style={styles.badgeNull} />
                        }

                        {this.renderImage(this.props)}
                    </View>
                    <Text
                        style={{
                            marginTop: padding,
                            fontSize: 15,
                            color: White,
                            backgroundColor: 'transparent',
                            alignSelf: 'center',
                        }}
                    >{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    badgeIcon: {
        backgroundColor: GrayColor,
        width: 18,
        height: 18,
        alignSelf: 'center',
        borderRadius: 9,
        alignItems: 'center',
        zIndex: 3,
        justifyContent: 'center',
        position: 'relative',
        top: 6,
        right: -12,
    },
    badgeNull: {
        width: 18,
        height: 18,
        alignSelf: 'center',
        borderRadius: 9,
        alignItems: 'center',
        zIndex: 3,
        justifyContent: 'center',
        position: 'relative',
        top: 6,
        right: -12,
    },
    container: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
});
