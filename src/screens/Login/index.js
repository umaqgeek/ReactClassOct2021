import React from 'react'
import { 
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import Title from '../../components/Title'
import Button from '../../components/Button'
import styles from './styles'

class Login extends React.Component {
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

export default Login