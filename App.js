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
                title="flatList demo"
                onPress={() => {
                    props.navigation.navigate('FlatListDemo')
                }}
            />
            <Button
                title="sectionList demo"
                onPress={() => {
                    props.navigation.navigate('SectionListDemo')
                }}
            />
        </View>
    )
}
export default HelloWorldApp
