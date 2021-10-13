import React from 'react'
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Title from './src/components/Title'
import Button from './src/components/Button'

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

        <Button />

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
  }
})

export default App