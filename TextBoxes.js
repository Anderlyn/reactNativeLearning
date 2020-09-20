import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './Styles';
const InputTest = () => {
    const [inputText, setInputText] = useState('');
    return(
        <View style={styles.containerChild}>
            <Text style={styles.titleText}>Inputs</Text>
            <View style={styles.InputTextStyle}>
                <TextInput 
                style={styles.interiorText}
                placeholder="Escribe aqui" 
                onChangeText={inputText=>setInputText(inputText)} 
                defaultValue={inputText}/>
            </View>
            <TouchableOpacity 
            style={[styles.ModalButtton,{margin:15}]}
            onPress={() =>{
                Alert.alert(inputText);
            }}>
                <Text style={styles.interiorText}>Leer</Text>
            </TouchableOpacity>
        </View>
    );
}
export {InputTest};
