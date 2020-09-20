import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Alert} from 'react-native';
import {ChangeViewButton} from './ChangeViewButton'
import {styles} from './Styles';
const BackendView = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerChild}>
                    <Text style={styles.interiorText}>Hola</Text>
                </View>
                <ChangeViewButton 
                    currentViewProps = {props.currentView} 
                    setCurrentViewProps = {props.setCurrentView}
                    />
            </ScrollView>
        </SafeAreaView>
    )

    
}
export {BackendView};