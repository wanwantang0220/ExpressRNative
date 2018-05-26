import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export const uiHeightPx = 640;

export default function px2dp(uiElementPx) {
    return uiElementPx * deviceHeightDp / uiHeightPx;
}


export {
    deviceHeight,
    deviceWidth
}