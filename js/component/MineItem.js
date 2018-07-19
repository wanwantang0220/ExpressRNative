/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import styles from "../style/Css";
import {White} from "../style/BaseStyle";



export default class MineItem extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            logo: ''
        }
    }

    static propTypes = {
        logo: PropTypes.number,
        content: PropTypes.string,
        onPress: PropTypes.func
    };

    componentDidMount() {
    }

    render() {

        const {content, onPress} = this.props;
        return (
            <TouchableOpacity
                style={[styles.mine_item]}
                activeOpacity={0.85}
                underlayColor='white'
                onPress={onPress}>
                <View style={{}}>
                    <Text style={[styles.mine_item_text]}>{content}</Text>
                </View>
            </TouchableOpacity>
        )
    }


}

