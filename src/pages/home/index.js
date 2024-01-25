import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import {useState} from 'react'
import {ModalPassword} from '../../components/modal/index.js'

//Todo o código dentro do export são elementos do aplicativo//

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%&*"


export function Home(){
  
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);


  function gerarsenha(){
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random()*n))
    }

    setPasswordValue(password)
    setModalVisible(true);
    
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/cadeado.png")}
        style={styles.logo}
      />
      <Text style= {styles.dica}
      >Dica: Deslize abaixo à quantidade de {'\n'}Caracteres desejada:</Text>
      <Text style={styles.title}>{size} Caracteres</Text>
      
      <View style={styles.area}>
        <Slider
        style={{ height: 50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor="white"
        minimumTrackTintColor='#000'
        thumbTintColor='#ffff00'
        value={size}
        onValueChange={(value)=> setSize(value. toFixed(0)) }

        />
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarsenha}>
        <Text style={styles.buttontext}TouchableOpacity>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>

    </View>
  )
}

// Elementos de estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e15",
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    marginBottom: 80,
    justifyContent:'center',
    alignContent:'center',
    top:60
  
  },
  dica:{
    fontSize: 20,
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    height:"15%",
    justifyContent:'center',
    padding:20,
    

  },
  title: {
    fontSize: 30,
    color: "#000",
    fontWeight: 'bold',
    padding:20
  },
  area:{
    marginTop:14,
    marginBottom: 14,
    width:"80%",
    backgroundColor:"#00BFFF",
    borderRadius:400,
    padding: 5,
  
  },
  button:{
    backgroundColor:"",
    borderRadius: 100,
    marginTop: 15,
    padding: 20,
    width:"70%",
    height: 73,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 20,
  
  },
  buttontext:{
    justifyContent:'center',
    color:'white',
    fontSize: 24,
  },

})
