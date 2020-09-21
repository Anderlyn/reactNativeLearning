import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Alert} from 'react-native';
import {styles} from '../Styles';
const ChangeViewButton = (props) => {
    const [currentView, setCurrentView] = useState("");
    console.log(props);
    const selectColor = () =>{
        switch(props.currentViewProps){
            case 'mainView':
               return ("blue");   
            break;          
            case 'backend':
                return("green");
            break;
        }
    }
    return(
        <View style={styles.containerChild}>
            <TouchableOpacity 
                style={
                    [styles.CheckBoxStyle],
                    {backgroundColor: selectColor()}
                }
                onPress={
                    ()=>{
                        switch(props.currentViewProps){
                            case 'mainView':
                                props.setCurrentViewProps("backend");
                            break;          
                            case 'backend':
                                props.setCurrentViewProps("mainView");
                            break;
                        }       
                        
                    }
                }
                >
                    <Text style ={styles.interiorText}>Change View</Text>
            </TouchableOpacity>
        </View>
        
    )
}
export {ChangeViewButton};