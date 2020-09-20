import React from 'react';
import {SafeAreaView, ScrollView, Alert} from 'react-native';
import {styles} from './Styles';
import {FlexDirectionBasics} from './FlexBasics'
import { ViewsBasic } from './ViewsBasic';
import {RandomNumber} from './RandomNumberButton';
import {ModalHello} from './ModalHelloWorld';
import {CheckBoxElement} from './Checkboxes';
import {InputTest} from "./TextBoxes"
import {ChangeViewButton} from './ChangeViewButton'
const IosView = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <ViewsBasic />
            <FlexDirectionBasics />  
            <RandomNumber />
            <ModalHello text='hello world'/>
            <CheckBoxElement/>
            <InputTest/>
            <ChangeViewButton
            currentViewProps = {props.currentView} 
            setCurrentViewProps = {props.setCurrentView}
            />
            </ScrollView>
        </SafeAreaView>
    );
}
export {IosView};