import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Log Masuk</Text> 
      </TouchableOpacity>
    )
  }
}

export default Button