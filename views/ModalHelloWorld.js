import React, {useState} from 'react';
import {View,TouchableOpacity,Text, Modal, Alert} from 'react-native';
import {styles} from '../Styles';
const ModalHello = (props) =>{
    const [ModalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.containerChild}>
            <Text style={styles.titleText}>Modal</Text>
            <Modal
            animationType="slide"
            transparent={true}
            visible={ModalVisible}
            onRequestClose={()=>{
                    //cuando se presiona el boton atras en telefono
                    Alert.alert("Modal cerrado");
                }
            }>
                <View style={styles.containerModal}>
        <Text style={styles.interiorText}>{props.text}</Text>
                    <TouchableOpacity 
                    style={styles.ModalButtton}
                    onPress = {()=>{
                        setModalVisible(false);
                    }}>
                        <Text style={styles.interiorText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <TouchableOpacity 
            style={styles.ModalButtton}
            onPress = {()=>{
                setModalVisible(true);
            }}
            >
                <Text style={styles.interiorText}>Open</Text>
            </TouchableOpacity>
        </View>
        
    );
}
export {ModalHello};