import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from './styles'

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const title = this.props.title || 'Title Default'
    const description = this.props.description || 'Default description'

    return (
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text>{description}</Text>
      </View>
    )
  }
}

export default Title