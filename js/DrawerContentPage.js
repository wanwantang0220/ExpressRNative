import * as DrawerActions from "react-native";
import React, {Component} from 'react';
import {View, ScrollView, Text} from "react-native";
import {
    NavigationActions,
} from 'react-navigation';
import PropTypes from 'prop-types';

export default class DrawerScreen extends Component {

    // navigateToScreen = (route) => () => {
    //     const navigateAction = NavigationActions.navigate({
    //         routeName: route
    //     });
    //     this.props.navigation.dispatch(navigateAction);
    //     // this.props.navigation.dispatch(DrawerActions.closeDrawer())
    // };

    render() {
        return (
            <CustomDrawerContentComponent/>
        );
    }
}

// DrawerScreen.propTypes = {
//     navigation: PropTypes.object
// };

const CustomDrawerContentComponent = (props) => (
    <ScrollView>

    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
