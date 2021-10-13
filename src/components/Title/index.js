import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from './styles'

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const title = this.props.title || 'Title Default'

    return (
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text>Description saya</Text>
      </View>
    )
  }
}

export default Title