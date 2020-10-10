import React from 'react';
import {Text, StyleSheet, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native';


const  HomeScreen=(props)=>{
    return (
        <ScrollView>
            <View style={styles.viewStyle} >
                <Image
                source ={{uri:'https://upload.wikimedia.org/wikipedia/en/d/d0/Islamic_University_of_Technology_%28coat_of_arms%29.png'}}
                style={styles.viewStyle}
                />
                <Text style = {styles.textStyle}>Department of CSE{"\n"}Program: SWE{"\n"}{"\n"}</Text>
                <TouchableOpacity onPress={function (){props.navigation.navigate("Profile");}}>
                <Text style = {styles.touchStyle}>My Profile{"\n"}</Text>
                </TouchableOpacity>



            

            </View>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Semesterwise Course List"
                    onPress={function (){props.navigation.navigate("Semester");}}
                    color="blue"
                    margin="15"
                />
            </View>
            <View style = {styles.buttonStyle}>
                <Button
                    title="The List of Faculty Members"
                    onPress={function (){props.navigation.navigate("Faculty Name");}}
                    color="blue"
                    margin="15"
                />
            </View>

        </ScrollView>
        
    


        );
}
const styels=StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color:"blue",

        },
        
    }

);


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 18,
            color:'black',
            textAlign: "center",
            margin: 20
        },
        imageStyle: {
            height: 410,
            width: 250,
            alignSelf: 'center',
        },
        viewStyle: {
            margin: 50,
            alignSelf: 'center'
        },
        buttonStyle: {
            margin: 5,
        },
        touchStyle: {
            fontSize: 18,
            color:'blue',
            textAlign: "center",
            margin: 15,
            textDecorationLine: 'underline',
        },
    }
);
export default  HomeScreen ;
