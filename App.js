import React, {useState} from 'react';
import {Platform, View, Alert, Text } from 'react-native';
import {IosView} from './IosView';
import {AndroidView} from './AndroidView';
import {BackendView} from './backendView';
import { styles } from './Styles';
export default App;
function App() {
  const [currentView, setCurrentView] = useState("backend");
  switch(currentView){
    case "mainView":
      if (Platform.OS === 'ios'){
        return (
            <IosView
            currentView = {currentView}
            setCurrentView = {setCurrentView}
            />
        );
      }else if(Platform.OS === 'android'){
        return (
            <AndroidView
            currentView = {currentView}
            setCurrentView = {setCurrentView}
            />
        );
      }    
    break;
    case "backend":
     return(
      <BackendView 
      currentView = {currentView}
      setCurrentView = {setCurrentView}
      />
     )
    break;
  }
  
}
/*if (Platform.OS === 'ios'){
  return (
      <IosView/>
  );
}else if(Platform.OS === 'android'){
  return (
      <AndroidView/>
  );
}*/
