import React from 'react';
import { SafeAreaView, View, Text, TextInput,  Button, StyleSheet, Alert } from 'react-native';
import SpacingStyle from '../styles/spacing';
import FlexBox from '../styles/flex';
import ButtonStyle from '../styles/button';
import Variables from '../styles/variables';
import TextStyles from '../styles/text';

export default LoginPage = ({navigation}) => {
    const [name, onChangeName] = React.useState("");

    const onLoginClick = () => {
        if(text) {
            navigation.navigate('Dashboard');
        }else {
            Alert.alert(
                "Alert",
                "Please Enter user name",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
        }
    }
    return(
        <SafeAreaView style={[SpacingStyle.px_4, FlexBox.fb_1, FlexBox.fb_align_vertical_center, style.bg]}>
            <Text style={[style.title]}>LabKart</Text>
            <Text style={[SpacingStyle.mt_1, SpacingStyle.mb_5, style.subtitle]}>Welcome to Gift Registory</Text>
            <TextInput
                style={style.input}
                placeholder="Enter name"
                onChangeText={onChangeName}
                value={name}
            />
            <Button
                style={[ButtonStyle.btn]}
                title="Login"
                onPress={onLoginClick}
                />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    bg: {
        backgroundColor: '#FFF',
        //justifyContent: 'center',
        alignItems: 'center'
    },
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
    input: {
        padding: Variables.gutter/2,
        borderColor: "#999",
        minHeight: 40,
        minWidth: 250,
        margin: 12,
        borderWidth: 1,
    }
});