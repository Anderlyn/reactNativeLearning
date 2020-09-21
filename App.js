import React, {useState} from 'react';
import {Platform} from 'react-native';
import {ViewConditional} from './ViewConditional';
import {BackendView} from './backendView';
export default App;
function App() {
  const [currentView, setCurrentView] = useState("backend");
  switch(currentView){
    case "mainView":
      return(
        <ViewConditional device={Platform.OS}></ViewConditional>
      );
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
