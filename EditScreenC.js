
function EditContat({ navigation, route}){
  const { contatos } = route.params;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  const deleteContat = (id) => {
    axios.delete(`http://localhost:3000/contatos/${contatos.id}`)
    .then((response) => {
      setContatos(response.data);
      setLoading(false);
    } , navigation.navigate('Home'))
    .catch((error) => {
      console.error('Erro ao buscar contatos:', error);
      setLoading(false);
    });
  }

  const attContat = () => {
    axios.put(`http://localhost:3000/contatos/${contatos.id}`, {
      ...contatos,
      name,
      status,
      image,
      time
    })
    .then(() => navigation.navigate('Home'))
    .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
        <Text style={styles.title}> Editar contato</Text>
      </View>
      <View style={styles.container}>
        <Text>Bem-vindo, {contatos.name}!</Text>
        
        <Input style={styles.Input} placeholder='Nome' value={name} onChangeText={setName}/>
        <Input style={styles.Input} placeholder='Status'value={status} onChangeText={setStatus}/>
        <Input style={styles.Input} placeholder='Image' value={image} onChangeText={setImage}/>
        <Input style={styles.Input} placeholder='Time' value={time} onChangeText={setTime}/>
        
        <Button style={styles.Button} title="Atualizar" onPress={attContat}/>
        <Button style={styles.Button} title="Excluir" onPress={deleteContat}/>
      </View>
    </SafeAreaView>
    );
}


export default EditContat;