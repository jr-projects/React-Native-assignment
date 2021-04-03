import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, Pressable } from 'react-native';
import FlexBox from '../styles/flex';
import SpacingStyle from '../styles/spacing';
import TextStyles from '../styles/text';
import Variables from '../styles/variables';

export default DashboardPage = ({navigation}) => {
    return(
        <SafeAreaView style={[SpacingStyle.px_4, FlexBox.fb_1, FlexBox.fb_align_horizontal_center]}>
            <Text style={[style.title, SpacingStyle.mt_3, SpacingStyle.mb_5]}>Lab Cart</Text>
            {/* <Button
                width={150}
                height={150}
                title="Categories">
            </Button> */}
            <Pressable
                style={({pressed})=>[
                    {backgroundColor: pressed ? 'rgba(144, 13, 64, 0.8)' : 'rgba(144, 13, 64, 1)'},
                    FlexBox.fb_align_horizontal_center,
                    FlexBox.fb_align_vertical_center,
                    style.button,
                ]}
                onPress={() => navigation.navigate('Categories')}>
                    <Text style={style.btnlable}>Categories</Text>
            </Pressable>
            <Pressable
                style={({pressed})=>[
                    {backgroundColor: pressed ? 'rgba(144, 13, 64, 0.8)' : 'rgba(144, 13, 64, 1)'},
                    FlexBox.fb_align_horizontal_center,
                    FlexBox.fb_align_vertical_center,
                    SpacingStyle.mt_3,
                    style.button,
                ]}
                onPress={() => navigation.navigate('Categories')}>
                    <Text style={style.btnlable}>Gift List</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: TextStyles.title,
        color: '#222',
        fontFamily: 'Roboto'
    },
    subtitle: {
        fontSize: TextStyles.text,
        color: '#666',
        fontFamily: 'Roboto'
    },
    button: {
        width: 150,
        height:150,
        borderRadius: Variables.gutter
    },
    btnlable: {
        fontSize: TextStyles.subtitle,
        color: '#FFF'
    }
});