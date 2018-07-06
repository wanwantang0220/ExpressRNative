import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "react-native";

export default class WaitOrderItemCell extends PureComponent {

    static propTypes = {

        // clickAction: PropTypes.func,

    };


    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        let {item} = this.props;
        console.log('item', item);
        return (
            <View>
                <Text>
                    test
                </Text>
            </View>
        )
    }
}