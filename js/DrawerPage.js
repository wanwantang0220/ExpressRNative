//根视图
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import DrawerHomePage from './DrawerHomePage';
import DrawerLeftPage from './DrawerLeftPage';
import {DrawerNavigator} from 'react-navigation';

const Drawer = DrawerNavigator({
        Home: {
            screen: DrawerHomePage
        },
        Left: {
            screen: DrawerLeftPage
        }
    },{
        drawerWidth: 300,
        drawerPosition: 'left',
    }
);

export default class DrawerPage extends Component {

    render() {
        return (
            <Drawer/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});