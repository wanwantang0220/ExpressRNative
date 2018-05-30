import React, {Component} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {ColorTextGrey, SeparatorColor, White} from "../style/BaseStyle";

export default class AddressItemCell extends Component {

    render() {
        let {address,onPress} = this.props;
        const addressdetail = address.proviceCityRegionTxt + address.addrDetail;
        return (
            <TouchableOpacity onPress={onPress}>
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
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: SeparatorColor,
        color:White
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