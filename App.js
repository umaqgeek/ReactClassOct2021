import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Title from './src/components/Title'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{
        alignItems: 'center'
      }}>
        <Title />
        <Title />

        <TextInput style={styles.textinput}></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
    marginTop: 32
  }
})

export default App