import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const FacultyList=()=>{
    const teachers=[
        { name: "Tasnim Ahmed",key:'1' },
        { name: "Sabbir Ahmed",key:'2' },
        { name: "Bakhtiar Hasan" ,key:'3'},
        { name: "Mohayeminul Islam",key:'4' },
        { name: "Tajkia Rahman Toma",key:'5' },
        { name: "Ridwan Kabir",key:'6' },
        { name: "Ridwan Karim Sony",key:'7' },
    ];
    return(
        <View style={styles.viewStyle}>
            <FlatList
            showsVerticalScrollIndicator = {false}
            data={teachers}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />

        </View>
    )


};

const styles=StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color:"blue", 
            marginVertical: 30,

        },
        viewStyle: {
            borderColor: 'red',
            borderWidth:5,
            margin: 50,
            alignSelf: 'center',
        },
    }

);
export default  FacultyList ;
