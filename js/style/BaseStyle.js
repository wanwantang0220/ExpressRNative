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