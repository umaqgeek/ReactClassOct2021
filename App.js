import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

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

    const year = this.state.arrYear[1]
    const title = this.state.title

    return (
      <View style={styles.mainContainer}>
        <Text>{title} {year}</Text>
        <Title />
        <Title />
        <TextInput style={styles.textinput}></TextInput>
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
    marginTop: 32
  }
})

export default App