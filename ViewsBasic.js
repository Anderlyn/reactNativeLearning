import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import {styles} from './Styles';
const ViewsBasic = () =>{
    return (
        <View style={styles.containerChild}>
      <Text style={styles.titleText}>Views (divs)</Text>
        <View style={styles.squareOne}>
          <View style={styles.squareTwo} >
          <View style={styles.squareThree} />
          </View>
        </View>
       <StatusBar style="auto" />
      </View>
    );
    
}
export { ViewsBasic};