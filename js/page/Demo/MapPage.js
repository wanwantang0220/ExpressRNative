/***
 * 高德地图定位
 **/

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import {Geolocation} from "react-native-amap-geolocation";

export default class MapPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: {}
        }
    }

    static navigationOptions = {

        title: '高德地图',
        drawerLabel: '高德地图',
    };


    componentWillMount() {
        Geolocation.init({
            //TODO ios的要改
            // ios: "9bd6c82e77583020a73ef1af59d0c759",
            android: "c4031dcbefac117fb5e4948bfd093439"
        })
    }

    async componentDidMount() {
        Geolocation.setOptions({
            interval: 10000,
            distanceFilter: 10,
            reGeocode: true
        })
        Geolocation.addLocationListener(location =>
            this.updateLocationState(location)
        )
    }

    componentWillUnmount() {
        Geolocation.stop()
    }

    render() {
        const {location} = this.state
        return (
            <View style={style.body}>
                <View style={style.controls}>
                    <Button
                        style={style.button}
                        onPress={() => Geolocation.start()}
                        title="开始定位"
                    />
                    <Button
                        style={style.button}
                        onPress={() => Geolocation.stop()}
                        title="停止定位"
                    />
                </View>
                {Object.keys(location).map(key => (
                    <View style={style.item} key={key}>
                        <Text style={style.label}>{key}</Text>
                        <Text>{location[key]}</Text>
                    </View>
                ))}
            </View>
        )
    }


    updateLocationState(location) {
        if (location) {
            location.timestamp = new Date(location.timestamp).toLocaleString();
            this.setState({location});
            console.log(location)
        }
    }

    startLocation = () => {
        Geolocation.start();
    };
    stopLocation = () => {
        Geolocation.stop();
    };
    getLastLocation = async () =>{
        this.updateLocationState(await Geolocation.getLastLocation())
    };
}

const style = StyleSheet.create({
    body: {
        padding: 16
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 12,
        marginBottom: 24
    },
    item: {
        flexDirection: "row",
        marginBottom: 4
    },
    label: {
        color: "#f5533d",
        width: 120,
        paddingRight: 10,
        textAlign: "right"
    }
});