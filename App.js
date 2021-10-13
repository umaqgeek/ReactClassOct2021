import React from 'react'
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Title from './src/components/Title'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Title Saya',
      arrYear: ['D1', 'D2', 'D3']
    }
  }

  render() {

    const title1 = 'Title Saya'
    const title2 = 'Title kita'

    return (
      <View style={styles.mainContainer}>
        <Title title={title1} />
        <Title title={title2} />
        <Title />
        <TextInput 
          style={styles.textinput} 
          placeholder='Type your username' />

        <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Log Masuk</Text> 
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center'
  },
  textinput: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
    marginTop: 32,
    paddingHorizontal: 8
  },
  button: {
    borderWidth: 1,
    width: 200,
    borderRadius: 4,
    padding: 16,
    marginTop: 40,
    backgroundColor: 'rgba(0,0,0,1)'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
})

export default App