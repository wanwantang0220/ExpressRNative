/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import PopupDialog, {DialogButton, FadeAnimation, ScaleAnimation, SlideAnimation,} from 'react-native-popup-dialog';
import DialogTitle from "react-native-popup-dialog/src/components/DialogTitle";

const slideAnimation = new SlideAnimation({slideFrom: 'bottom'});
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({animationDuration: 150});

export default class PopupDialogPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'PopupDialog',
        title: 'PopupDialog'
    };

    constructor(props) {
        super(props);
        this.state = {
            dialogShow: false,
        }
    }


    render() {

        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>

                    <DialogButton text='Show - Default Aanimation'
                                  onPress={this.showFadeAanimatinDialog}/>


                    <DialogButton text='Show - Scale Animation'
                                  onPress={this.showScaleAnimationDialog}/>

                    <DialogButton text='Show - Slide Animation'
                                  onPress={this.showSlideAnimationDialog}/>
                </View>

                <PopupDialog
                    ref={(popupDialog) => {
                        this.scaleAnimationDialog = popupDialog;
                    }}
                    dialogAnimation={scaleAnimation}
                    dialogTitle={<DialogTitle title="Popup Dialog - Scale Animation"/>}
                    actions={[<DialogButton
                        text='DISMISS'
                        onPress={() => {
                            this.scaleAnimationDialog.dismiss();
                        }}
                        key='button-1'
                    />,
                    ]}
                >
                    <View style={styles.dialogContentView}>
                        <DialogButton
                            text="Show Dialog - Default Animation"
                            onPress={this.showFadeAnimationDialog}
                        />
                    </View>
                </PopupDialog>

                <PopupDialog
                    dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation"/>}
                    ref={(popupDialog) => {
                        this.slideAnimationDialog = popupDialog;
                    }}
                    dialogAnimation={slideAnimation}
                >
                    <View style={styles.dialogContentView}>
                        <Text>Slide Animation</Text>
                    </View>
                </PopupDialog>

                <PopupDialog
                    ref={(fadeAnimationDialog) => {
                        this.fadeAnimationDialog = fadeAnimationDialog;
                    }}
                    dialogTitle={<DialogTitle title="Popup Dialog - Default Animation"/>}
                >
                    <View style={styles.dialogContentView}>
                        <Text>Default Animation</Text>
                    </View>
                </PopupDialog>
            </View>
        )
    }


    showFadeAanimatinDialog = () => {
        this.fadeAnimationDialog.show();
    };


    showScaleAnimationDialog = () => {
        this.scaleAnimationDialog.show();
    }


    showSlideAnimationDialog = () => {
        this.slideAnimationDialog.show();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationBar: {
        borderBottomColor: '#b5b5b5',
        borderBottomWidth: 0.5,
        backgroundColor: '#ffffff',
    },
    navigationTitle: {
        padding: 10,
    },
    navigationButton: {
        padding: 10,
    },
    navigationLeftButton: {
        paddingLeft: 20,
        paddingRight: 40,
    },
    navigator: {
        flex: 1,
        // backgroundColor: '#000000',
    },
});

