import React from 'react'
import { 
  View,
  ScrollView,
  TextInput,
  Image
} from 'react-native'

import Title from '../../components/Title'
import Button from '../../components/Button'
import styles from './styles'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        username: '',
        password: ''
    }
  }

  onLogin = () => {
      const username = this.state.username
      const password = this.state.password

      if (username == 'umar' && password == '123') {
        this.props.navigation.replace('Dashboard')
      } else {
        alert('Salah username/password!')
      }
  }

  onHandleInput = (text, name) => {
      this.setState({
          [name]: text
      })
  }

  render() {

    const title = 'Welcome to React Native'
    const desc = 'Login Screen'

    return (
      <ScrollView
        contentContainerStyle={styles.mainContainer}>
        <Title title={title} description={desc} />

        <TextInput
          style={styles.textinput}
          placeholder='Type your username'
          value={this.state.username}
          onChangeText={(text) => this.onHandleInput(text, 'username')} />

        <TextInput
          style={styles.textinput}
          placeholder='Type your password'
          secureTextEntry={false}
          value={this.state.password}
          onChangeText={(text) => this.onHandleInput(text, 'password')} />

        <Button onPress={this.onLogin} />

        <Image
            style={{
                width: '90%',
                height: 300,
                marginTop: 32
            }}
            source={require('../../assets/images/gambar1.png')}/>

      </ScrollView>
    )
  }
}

export default Login