import {StyleSheet} from 'react-native'


const GrayColor = '#9D9D9D';
const GrayBlackColor = '#666666';
const White = '#ffffff';
const Translucent = 'rgba(125,125,125,0.6)';
const MainBg = '#f5f5f5';
const GrayWhiteColor = '#f5f5f5';
const MikeWhiteColor = '#f0ffff';
const BlackTextColor = '#444444';
const BlackColor = '#000000';
const WhiteTextColor = '#ffffff';
const ThemeColor = '#268dcd';
const SeparatorColor = '#e0e0e0';
const BackgroundColor = '#F7F7F7';
const BackgroundColorLight = '#dddfe0';
const ColorTextGrey = '#989898';
const ColorTextGrey2 = '#b5b5b5';
const ColorRed = '#FF0000';
const ColorStart = '#F24A16';
const ColorEnd = '#BE0154';
const ColorLine = '#E5E5E5';
const ColorLineRed = '#E83F57';
const themeColor = '#268dcd';
const separatorColor = '#e0e0e0';
const backgroundColor = '#f3f3f3';
//通用颜色
const white_fff = '#fff';
const    black_000='#000';
const    gray_e9e9e9='#e9e9e9';

    //App 主色调
const   green_00C853= '#67D5B5';
const    red_E53935='#EE7785';
const    blue_009688='#C89EC4';
const    yellow_ffc962= '#ffc962';
const    blue_00B0FF= '#84B1ED';

    //OFO
const    yellow_FFD900='#FFD900';
const   black_0000004D='#0000004D';

    //Twitter
const   blue_1DA1F2='#1DA1F2';
const   blue_1DA1F266='#1DA1F266';

    //QQBrowser
const    blue_4187E8='#4187E8';
const    black_00000080='#00000088';

    //WeChat
const    black_393A3F='#393A3F';
const   green_65E102='#65E102';
const   gray_C0C0C0='#C0C0C0';

    //DingTalk
    white_F4F0E9='#F4F0E9';

const BaseStyles = StyleSheet.create({
    baseWhiteText: {
        fontSize: 16,
        color: WhiteTextColor,
    },
    baseBlackText: {
        fontSize: 16,
        color: BlackTextColor,
    },
    baseIcon: {
        width: 26,
        height: 26,
    }
});

export {
    white_fff,
    black_000,
    gray_e9e9e9,
    green_00C853,
    red_E53935,
    blue_009688,
    yellow_ffc962,
    blue_00B0FF,
    yellow_FFD900,
    black_0000004D,
    blue_1DA1F2,
    blue_1DA1F266,
    blue_4187E8,
    black_00000080,
    black_393A3F,
    green_65E102,
    gray_C0C0C0,

    MainBg,
    GrayColor,
    GrayBlackColor,
    Translucent,
    White,
    BlackColor,
    GrayWhiteColor,
    MikeWhiteColor,
    BlackTextColor,
    WhiteTextColor,
    BaseStyles,
    ThemeColor,
    SeparatorColor,
    BackgroundColor,
    BackgroundColorLight,
    ColorTextGrey,
    ColorStart,
    ColorEnd,
    ColorTextGrey2,
    ColorLine,
    ColorLineRed,
    themeColor,
    separatorColor,
    backgroundColor
}