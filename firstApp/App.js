import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Semester from './src/screens/Semester';
import Profile from './src/screens/Profile';
import FacultyList  from './src/screens/FacultyList';

import Semester_1 from './src/screens/Semester_1';
import Semester_2 from './src/screens/Semester_2';
import Semester_3 from './src/screens/Semester_3';

const  stack =createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home"> 
        <stack.Screen name= "Home" component= {HomeScreen}/>
        <stack.Screen name= "Semester" component= {Semester}/>
        <stack.Screen name= "Profile" component= {Profile}/>
        <stack.Screen name= "Faculty Name" component= {FacultyList}/>
        <stack.Screen name= "1st Semester" component= {Semester_1}/>
        <stack.Screen name= "2nd Semester" component= {Semester_2}/>
        <stack.Screen name= "3rd Semester" component= {Semester_3}/>


        
         
      </stack.Navigator>
      </NavigationContainer>

      
  );
}
export default App;
