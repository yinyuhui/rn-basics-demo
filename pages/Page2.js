import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Page2 = (props) => {
    const {
        navigation: {
            setParams,
            state: { params = {} },
        },
    } = props
    return (
        <View style={styles.container}>
            <Text>Page2</Text>

            {/* 导航参数控制页面展示 */}
            <Text>{params.mode === 'edit' ? '正在编辑' : '编辑结束'}</Text>

            {/* 页面控制导航内容展示 */}
            <TextInput
                style={styles.input}
                onChangeText={(input) => {
                    setParams({ title: input })
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

    input: {
        height: 30,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 2,
    },
})
export default Page2
