import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            isLoading: true
        }
    }

    componentDidMount = () => {
        this.onGetData()
    }

    onLogout = () => {
        this.props.navigation.replace('Login')
    }

    onGetData = () => {
        this.setState({
            isLoading: true
        })
        axios({
            method: 'GET',
            url: 'https://kelas-react-native-2021-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
        }).then(response => {
            this.setState({
                data: response.data,
                isLoading: false
            })
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        })
    }

    onPostData = () => {
        axios({
            method: 'POST',
            url: 'https://kelas-react-native-2021-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
            data: {
                username: 'Umar',
                password: '123',
                fullname: 'Umar Mukhtar'
            }
        }).then(response => {
            this.onGetData()
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        })
    }

    onDeleteData = () => {
        axios({
            method: 'DELETE',
            url: 'https://kelas-react-native-2021-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
        }).then(response => {
            this.onGetData()
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {

        const content = this.state.isLoading ? 'Loading ...' : JSON.stringify(this.state.data)
        // const content = null
        // if (this.state.isLoading) {
        //     content = 'Loading ...'
        // } else {
        //     content = JSON.stringify(this.state.data)
        // }

        return (
            <View>
                <Text>Saya di Dashboard</Text>
                <TouchableOpacity onPress={this.onLogout}>
                    <Text>Back to Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onGetData}>
                    <Text>Get Data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPostData}>
                    <Text>Post Data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onDeleteData}>
                    <Text>Delete All Data</Text>
                </TouchableOpacity>
                <View>
                    <Text>{content}</Text>
                </View>
            </View>
        )
    }
}

export default Dashboard