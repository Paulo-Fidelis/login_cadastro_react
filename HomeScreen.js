import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Input, Icon , Button , ListItem, Avatar} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


function HomeScreen({ navigation, route}) {
  const [contatos, setContatos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  
   useEffect(() => {
    const verifyContatos = async () => {
    try {
      const q = query(
        collection(db, "contatos")
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {

           alert('funcionou')
      } else {
        alert("E-mail ou senha incorretos!");
      }
    } catch (err) {
      console.log("ERROR: ", err);
      alert("Houve um erro. Contate o suporte.");
    }
  }
  }, []);
  return (

  <SafeAreaView style={styles.container}>
    <View style={styles.containerheader}>
      <View style={styles.headerIcon}>
      </View>
      <View style={styles.headerText}>
        <Text style={styles.title}>Messages & Chat </Text>
      </View>
    </View> 
    <View style={styles.containerList}>
    {
    contatos.map((item, i) => (
      <ListItem style={{ marginTop: 30 }}key={i} bottomDivider>
      <Avatar
        rounded
        source={{uri: item.image}}
        size='medium'
        
      />  

      <ListItem.Content>
        <ListItem.Title style={{ fontSize: 20}}>{item.name}</ListItem.Title>
        <ListItem.Title>{item.status}</ListItem.Title>
      </ListItem.Content>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 12, color: 'gray' }}>{item.time}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
             <TouchableOpacity onPress={() => navigation.navigate('EditContato', {contatos: item})}>
              <View style={[styles.Icon, { backgroundColor: "orange"}]} onPress={() => navigation.navigate("Profile")}>
                <AntDesign name="user" size={40} color="white" rounded/>
              </View>
            </TouchableOpacity>
        </View>
        
    </ListItem>
    ))
    }
    </View>
  </SafeAreaView>
    
 )}


export default HomeScreen;






