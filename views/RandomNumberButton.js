import React, {useState} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {styles} from '../Styles';
const RandomNumber = () =>{
    const [randonNumberText, setrandomNumberText] = useState(0);
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    };
    return(
        <View style={styles.containerChild}>
            <Text style = {styles.titleText}>Boton Numero Random</Text>
            <TouchableOpacity 
            style={styles.randomNumberButtton} 
            onPress = { () => {setrandomNumberText(getRandomNumber);}}
            >
                <Text style = {styles.interiorText}>{randonNumberText}</Text>
            </TouchableOpacity>
        </View>
        
    );
}
export {RandomNumber};