import React from 'react';
import {ScrollView} from 'react-native';
import {FlexDirectionBasics} from './views/FlexBasics'
import { ViewsBasic } from './views/ViewsBasic';
import {RandomNumber} from './views/RandomNumberButton';
import {ModalHello} from './views/ModalHelloWorld';
import {CheckBoxElement} from './views/Checkboxes';
import {ChangeViewButton} from './views/ChangeViewButton'

const FullApp = () => {
    return (
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
    )
}

export {FullApp}