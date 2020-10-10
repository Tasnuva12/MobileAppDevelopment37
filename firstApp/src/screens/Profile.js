import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";


const Profile=()=>{

  return(
    <View> 
        <Image
        source={{uri :'http://icons.iconarchive.com/icons/icons8/ios7/512/Users-User-Female-2-icon.pngg'}}
        style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name: Tasnuva Mehnaz{"\n"}
            Student ID: 170042037{"\n"}
            Room No: 302 Utility Building{"\n"}
            Email: tasnuvamehnaz@iut-dhaka.edu
        </Text>
        
    </View>
  );

};
const styles = StyleSheet.create({
    textStyle: {
      fontSize: 18,
      color: "black",
      margin: 20,
      alignSelf: "center",
    },
    viewStyle: {
      margin: 50,
      alignSelf: "center"
    },
    imageStyle: {
      height: 260,
      width: 260,
      alignSelf: 'center',
  },
  });
  export default Profile;