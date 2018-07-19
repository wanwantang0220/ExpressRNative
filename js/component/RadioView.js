import React, {PureComponent} from 'react';
import {TouchableOpacity, View} from "react-native";
import {ColorEnd, ColorLineRed} from "../style/BaseStyle";

export default class RadioView extends PureComponent {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            bgc: ColorLineRed,
        }
    }


    render() {

        let color = this.props.checked ? this.state.bgc : '#fff';

        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>

                <TouchableOpacity
                    onPress={this.pressed.bind(this)}
                    style={{
                        backgroundColor: color,
                        width: 20,
                        height: 20,
                        borderRadius: 50,
                        borderColor: '#d9d9d9',
                        borderWidth: 1
                    }}
                >

                </TouchableOpacity>
            </View>
        )
    }

    pressed() {
        let {id, onCheck} = this.props;
        onCheck(id);
    }
}