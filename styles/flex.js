import React from 'react';
import { StyleSheet } from 'react-native';

const FlexBox = StyleSheet.create({
    fb_1 : {
        flex: 1
    },
    fb_2 : {
        flex: 2
    },
    fb_column: {
        flexDirection: 'column'
    },
    fb_row: {
        flexDirection: 'row'
    },
    fb_align_vertical_center: {
        justifyContent: 'center'
    },
    fb_align_horizontal_center: {
        alignItems: 'center'
    }
});

export default FlexBox;