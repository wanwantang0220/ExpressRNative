import React, {Component} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet,Alert} from 'react-native';
import {ColorTextGrey, SeparatorColor, White} from "../style/BaseStyle";
import HttpManager from "../data/http/HttpManager";

export default class AddressItemCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.httpManager = new HttpManager();

    }

    render() {
        let {address,navigator} = this.props;
        const addressdetail = address.proviceCityRegionTxt + address.addrDetail;
        return (
            <TouchableOpacity onPress={this.onSelectPress.bind(this)}>
                <View style={styles.container}>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{address.name}</Text>
                        <Text style={styles.phone}>{address.phone}</Text>
                    </View>
                            <Text style={styles.address}>{addressdetail}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    onSelectPress(){
        const address = this.props.address;
        const navigator = this.props.navigator;
        Alert.alert('提示','是否要编辑或删除',
            [
                {text:"编辑", onPress:this.opEditSelected.bind(this)},
                {text:"删除", onPress:this.opDeleteSelected.bind(this)},
            ]
        );
    }


    opEditSelected(){
        const address = this.props.address;
        const navigator = this.props.navigator;
        navigator.navigate('AddressEdit',{ address: address });
    }


    opDeleteSelected(){

    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: SeparatorColor
    },
    thumbnail: {
        width: 110,
        height: 150,
        backgroundColor: '#f0f0f0',
    },
    rightContainer: {
        flex: 1,
        flexDirection:'row',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    title: {
        flex:2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'left',
    },
    phone: {
        flex:1,
        fontSize: 14,
        color: '#777777',
        textAlign: 'right',
    },
    horizontalView: {
        flexDirection: 'row',
        marginTop: 10
    },
    titleTag: {
        color: '#666666',
    },
    address: {
        flex:1,
        fontSize: 14,
        color: ColorTextGrey,
        textAlign: 'left',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
});