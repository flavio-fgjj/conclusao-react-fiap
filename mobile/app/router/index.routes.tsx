import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '@theme/colors';

// pages
import ListStudentsScreen from '@screens/listStudents';
import StudentDetailsScreen from '@screens/studentDetails';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  ListStudents: undefined;
  StudentDetails: undefined;
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const StackNavigator = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="ListStudents"
          component={ListStudentsScreen}
          options={{
            title: 'Estudantes',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="StudentDetails"
          component={StudentDetailsScreen}
          options={{
            title: 'Estudante',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
