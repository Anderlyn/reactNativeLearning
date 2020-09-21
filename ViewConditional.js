import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {styles} from './Styles';
import {FullApp} from './FullApp'

const ViewConditional = (props)  => {
    if(props.device === "android"){
        return (
            <SafeAreaView style={styles.container}>
                <FullApp/>
            </SafeAreaView>
        );
    }else if(props.device === "ios"){
        return (
            <View>
                <FullApp/>
            </View>
        );
    }
}
export {ViewConditional}