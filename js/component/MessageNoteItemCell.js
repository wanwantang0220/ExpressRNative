import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Text, View} from "react-native";
import {BackgroundColorLight, BlackColor, White} from "../style/BaseStyle";
import Line from "./Line";
import styles from "../style/Css";
import {getMessageTitle} from "../constant/StatusConstant";
import {deviceWidth} from "../util/ScreenUtil";

export default class MessageNoteItemCell extends PureComponent {

    static propTypes = {
        onSelectItem: PropTypes.func,
    };


    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        const {item, onSelectItem} = this.props;
        const title = getMessageTitle(item.type);

        console.log('item', item);
        return (
            <View style={{width: deviceWidth, flexDirection: 'column', marginTop: 5}}>
                <View style={{width: deviceWidth, flexDirection: 'row', flex: 1, justifyContent: 'center',}}>
                    <View style={[styles.message_note_time_bg]}>
                        <Text style={{
                            flex: 1,
                            justifyContent: 'center',
                            textAlign: "center", marginTop: 5,
                            fontSize: 10, color: White
                        }}>
                            {item.createTime}
                        </Text>
                    </View>
                </View>
                <View style={[styles.message_note_bg, {flexDirection: 'column'}]}>
                    <Text style={{marginStart: 10, marginTop: 10, fontSize: 18, color: BlackColor}}>
                        {title}
                    </Text>
                    <Text style={{marginStart: 10, marginTop: 5, marginBottom: 10, fontSize: 12}}>
                        订单号： {item.orderNo}
                    </Text>

                    <Line color={BackgroundColorLight}/>

                    <View style={{flexDirection: 'row', marginTop: 6, marginStart: 10, marginBottom: 6}}>
                        <Text style={{textAlign: 'left', fontSize: 12}}>查看订单</Text>
                        <Text style={{textAlign: 'right', marginEnd: 10}}>></Text>
                    </View>
                </View>
            </View>
        )
    }


}