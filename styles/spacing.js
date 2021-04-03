import React from 'react';
import { StyleSheet } from 'react-native';
import Variables from './variables';

const space = Variables.gutter;
const SpacingStyle = StyleSheet.create({
    px_0: {
        paddingHorizontal: 0
    },
    px_1: {
        paddingHorizontal: space * .25
    },
    px_2: {
        paddingHorizontal: space * .5
    },
    px_3: {
        paddingHorizontal: space * 1
    },
    px_4: {
        paddingHorizontal: space * 1.5
    },
    px_5: {
        paddingHorizontal: space * 2
    },

    py_0: {
        paddingVertical: 0
    },
    py_1: {
        paddingVertical: space * .25
    },
    py_2: {
        paddingVertical: space * .5
    },
    py_3: {
        paddingVertical: space * 1
    },
    py_4: {
        paddingVertical: space * 1.5
    },
    py_5: {
        paddingVertical: space * 2
    },

    mx_0: {
        marginHorizontal: 0
    },
    mx_1: {
        marginHorizontal: space * .25
    },
    mx_2: {
        marginHorizontal: space * .5
    },
    mx_3: {
        marginHorizontal: space * 1
    },
    mx_4: {
        marginHorizontal: space * 1.5
    },
    mx_5: {
        marginHorizontal: space * 2
    },

    my_0: {
        marginVertical: 0
    },
    my_1: {
        marginVertical: space * .25
    },
    my_2: {
        marginVertical: space * .5
    },
    my_3: {
        marginVertical: space * 1
    },
    my_4: {
        marginVertical: space * 1.5
    },
    my_5: {
        marginVertical: space * 2
    },
    mt_0: {
        marginTop: 0
    },
    mt_1: {
        marginTop: space * .25
    },
    mt_2: {
        marginTop: space * .5
    },
    mt_3: {
        marginTop: space * 1
    },
    mt_4: {
        marginTop: space * 1.5
    },
    mt_5: {
        marginTop: space * 2
    },
    mb_0: {
        marginTop: 0
    },
    mb_1: {
        marginBottom: space * .25
    },
    mb_2: {
        marginBottom: space * .5
    },
    mb_3: {
        marginBottom: space * 1
    },
    mb_4: {
        marginBottom: space * 1.5
    },
    mb_5: {
        marginBottom: space * 2
    }

});

export default SpacingStyle;