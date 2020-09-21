import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
const CheckBoxElement = () =>{
    const [isPressed, setisPressed] = useState(false);
    return(
        <View style = {styles.containerChild}>
            <Text style={styles.titleText}>Checkbox</Text>
            <TouchableOpacity 
            style={
                [isPressed ? {backgroundColor: 'powderblue'}: {backgroundColor: 'steelblue'},
                styles.CheckBoxStyle]
            } 
            onPress = {
                () => {
                    isPressed ? setisPressed(false) : setisPressed(true)
                }
            }> 
                <Text style={
                    [styles.interiorText, 
                    isPressed ? {color: 'black'}: {color: 'white'}]
                    }>{isPressed ? 'Checked!':'Check'}</Text>
            </TouchableOpacity>
        </View>
    )
        
}
export {CheckBoxElement}