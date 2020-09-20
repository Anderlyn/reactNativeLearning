import React from 'react';
import {ScrollView, Alert } from 'react-native';
import {styles} from './Styles';
import {FlexDirectionBasics} from './FlexBasics'
import { ViewsBasic } from './ViewsBasic';
import {RandomNumber} from './RandomNumberButton';
import {ModalHello} from './ModalHelloWorld';
import {CheckBoxElement} from './Checkboxes';
import {InputTest} from "./TextBoxes"
import {ChangeViewButton} from './ChangeViewButton'
const AndroidView = (props) => {
    return (
        <View style={styles.container}>
        <ScrollView>
        <ViewsBasic />
        <FlexDirectionBasics />
        
        <RandomNumber />
        <ModalHello/>
        <CheckBoxElement/>
        <InputText/>
        <ChangeViewButton
            currentViewProps = {props.currentView} 
            setCurrentViewProps = {props.setCurrentView}
            />
        </ScrollView>
      </View>
    );
}
export {AndroidView};