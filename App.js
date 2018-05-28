/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SplashPage from "./js/SplashPage";
import LoginPage from "./js/LoginPage";
import {Navigator} from "react-native-deprecated-custom-components";


export default class App extends Component {

    constructor(props) {
        super(props);
    }

  render() {
      return (
          <Navigator
              initialRoute={{ name: '欢迎界面', component: SplashPage }}
              renderScene={(route, navigator) =>{
                  //返回按钮
                  navigator.goBack = function () {
                      navigator.pop();
                  };
                  //退出整个app
                  navigator.exitApp = function () {
                      let routes = navigator.getCurrentRoutes();
                      for (var i = 0; i < routes.length; i++) {
                          navigator.pop();
                      }
                  };

                  let Component = route.component;
                  return <Component {...route.passProps} navigator={navigator} />
              }}
          />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
