
import React,{PureComponent} from 'react';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import App from "./container/App";

const store = configureStore();

export default class Root extends PureComponent{

    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}