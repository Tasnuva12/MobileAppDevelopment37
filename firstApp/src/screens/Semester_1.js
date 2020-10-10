import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const Semester_1 = () => {
    const courses = [
        { name: "Hum 4145: Islamiat",key:'1' },
        { name: "Hum 4147: Technology, Environment and Society",key:'2' },
        { name: "Math 4141 Geometry and Differential Calculus",key:'3' },
        { name: "Phy 4143: Physics II",key:'4' },
        { name: "CSE 4107: Structured Programming I",key:'5' },
        { name: "SWE 4101: Introduction to Software Engineering",key:'6' },
      ];
      return (
        <View style={styles.viewStyle}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            data={courses}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />
        </View>
      );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "black",
    marginVertical: 30,
  },
  viewStyle: {
    margin: 50,
    alignSelf: 'center'
},
});
export default Semester_1;