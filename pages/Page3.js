import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Page3 = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text>Page3</Text>
            <Button
                title="go back"
                onPress={() => {
                    navigation.goBack()
                }}
            />
            <Button
                title="go page2"
                onPress={() => {
                    navigation.navigate('Page2')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 20,
    },
})
export default Page3
