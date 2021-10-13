import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Title Saya</Text>
        <Text>Description saya</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 16,
    marginBottom: 16
  },
  text: {
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.4
  }
})

export default Title