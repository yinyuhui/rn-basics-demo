import React from 'react'
import { Text, View, Button } from 'react-native'

const HelloWorldApp = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Button
                title="flat list demo"
                onPress={() => {
                    props.navigation.navigate('FlatListDemo')
                }}
            />
        </View>
    )
}
export default HelloWorldApp
