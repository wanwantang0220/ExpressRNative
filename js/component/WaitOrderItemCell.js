import React, {PureComponent} from 'react';
import {Text, View} from "react-native";
import styles from "../style/Css";
import {deviceWidth} from "../util/ScreenUtil";
import {BackgroundColorLight, SeparatorColor} from "../style/BaseStyle";
import Line from "./Line";

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
            <View style={{width:deviceWidth,backgroundColor:SeparatorColor}}>
                <View  style={[styles.waitorder_bg]}>
                    <View style={{flexDirection:'column',marginStart:10,marginEnd:10,marginTop:10,marginBottom:5}}>
                        <Text style={{fontSize:18,fontWeight:'bold', color:'#000000',}}>{item.senderName}</Text>
                        <Text style={{fontSize:14}}>{item.bookedFrom +"--"+item.bookedTo}</Text>
                        <Text style={{fontSize:14}} >{item.senderProvinceCityCountyName+item.senderAddressDetail}</Text>
                    </View>

                    <Line color={BackgroundColorLight}/>
                    <View style={{flex:1,flexDirection:'row',marginTop:10,marginStart:10}}>
                        <Text style={{flex:4,fontSize:12}}>下单时间：{item.bookedFrom}</Text>
                        <View style={[styles.waitorder_print_bg,{flex:1}]}>
                            <Text style={{fontSize:12}}>接单</Text>
                        </View>

                    </View>

                </View>

            </View>
        )
    }
}