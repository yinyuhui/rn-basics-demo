import React from 'react'
import { View, Text, Button } from 'react-native'

const Login = (props) => {
    const { navigation } = props
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
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
