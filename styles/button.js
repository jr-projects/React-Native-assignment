import React from 'react';
import { StyleSheet } from 'react-native';
import Variables from './variables';

const ButtonStyle = StyleSheet.create({
    btn : {
        paddingHorizontal: Variables.gutter * 1,
        paddingVertical: Variables.gutter * 1,
        fontSize: 10
    }
});

export default ButtonStyle;