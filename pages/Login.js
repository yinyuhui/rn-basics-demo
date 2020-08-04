import React from 'react'
import { View, Text, Button } from 'react-native'

const Login = (props) => {
    const { navigation } = props
    return (
        <View>
            <Text>Login</Text>
            <Button
                title="login"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>
    )
}

export default Login
