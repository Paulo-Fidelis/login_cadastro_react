import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Input, Button } from 'react-native-elements';
import { addDoc, collection} from 'firebase/firestore';
import { db } from './firebase';

function CadastroCont({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  
    const saveCont = async () => {  
    try {
      const docRef = await addDoc(collection(db,"contato"), {
        nome,
        email,
        num,
        createdAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.navigate('Login');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.containerheader}>
      <Text style={styles.title}>Cadastrar contato</Text>
    </View>
    <View style={styles.container}>
      <Input style={styles.Input} placeholder='nome' value={name} onChangeText={setName}/>
      <Input style={styles.Input} placeholder='email' value={email} onChangeText={setEmail}/>
      <Input style={styles.Input} placeholder='numero' values={num} onChangeText={setNum}/>

      <Button style={styles.Button} title="adicionar" onPress={saveCont}/>
    </View>
  </SafeAreaView>
  );
}


export default CadastroCont;