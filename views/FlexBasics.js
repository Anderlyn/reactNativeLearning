import React from 'react';
import { View,Text } from 'react-native';
import {styles} from '../Styles';
const FlexDirectionBasics = () =>{
    return (
        <View style={styles.containerChild}>
            <Text style={styles.titleText}>Flex</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
      </View>
    );
};
export {FlexDirectionBasics};
