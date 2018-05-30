import React, {Component} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {SeparatorColor} from "../style/BaseStyle";

export default class AddressItemCell extends Component {

    render() {
        let {key,address,onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{address.name}</Text>
                        <Text style={styles.year}>{address.phone}</Text>
                        <View style={styles.horizontalView}>
                            <Text style={styles.titleTag}>地址：</Text>
                            <Text style={styles.name}>{address.proviceCityRegionTxt}</Text>
                        </View>
                        <View style={styles.horizontalView}>
                            <Text style={styles.titleTag}>详情：</Text>
                            <Text style={styles.name}>{address.addrDetail}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
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
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'left',
    },
    year: {
        textAlign: 'left',
        color: '#777777',
        marginTop: 10,
    },
    horizontalView: {
        flexDirection: 'row',
        marginTop: 10
    },
    titleTag: {
        color: '#666666',
    },
    score: {
        color: '#ff8800',
        fontWeight: 'bold',
    },
    name: {
        color: '#333333',
        flex: 1
    },
});