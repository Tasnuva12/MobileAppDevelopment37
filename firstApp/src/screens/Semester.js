import React from "react";
import {View, StyleSheet, Button} from "react-native";
import Semester_1 from '../screens/Semester_1';
import Semester_2 from '../screens/Semester_2';
import Semester_3 from '../screens/Semester_3';

const Semester=(props)=>{
    return (
        <View style={styles.viewStyle}>
            <View style = {styles.buttonStyle}>
        <Button
          title="1st Semsester"
          onPress={function (){
            props.navigation.navigate("1st Semester");
            }
          }
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="2nd Semsester"
          onPress={function (){
            props.navigation.navigate("2nd Semester");
            }
          }
          
        />
        </View>
        <View style = {styles.buttonStyle}>
        <Button
          title="3rd Semsester"
          onPress={function (){
            props.navigation.navigate("3rd Semester");
            }
          }
         
        />
      
      </View>

        </View>

    );
};
const styles = StyleSheet.create({
    textStyle: {
      fontSize: 15,
      color: "blue",
      marginVertical: 30,
    },
    viewStyle: {
        margin: 100,
        alignItems: 'center'
    },
    buttonStyle: {
      margin: 5,
  },
  });
  export default Semester;