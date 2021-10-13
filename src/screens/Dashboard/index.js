import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    onLogout = () => {
        this.props.navigation.replace('Login')
    }

    render() {
        return (
            <View>
                <Text>Saya di Dashboard</Text>
                <TouchableOpacity onPress={this.onLogout}>
                    <Text>Back to Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Dashboard