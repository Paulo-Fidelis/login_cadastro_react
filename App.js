import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Input, Icon , Button , ListItem, Avatar} from 'react-native-elements';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

export default App;

const Stack = createNativeStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="AddContato" component={AddCont} />
      <Stack.Screen name="EditContato" component={EditContat} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}