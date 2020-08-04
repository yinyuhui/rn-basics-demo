import React from 'react'
import { View, Text, Button } from 'react-native'

const HomePage = (props) => {
    const { navigation } = props
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title="BottomTabNavigators"
                onPress={() => {
                    navigation.navigate('BottomTabNavigators')
                }}
            />
            <Button
                title="TopBarNavigators"
                onPress={() => {
                    navigation.navigate('TopBarNavigators')
                }}
            />
            <Button
                title="page1"
                onPress={() => {
                    navigation.navigate('Page1', { name: '动态' })
                }}
            />
            <Button
                title="page2"
                onPress={() => {
                    navigation.navigate('Page2')
                }}
            />
            <Button
                title="page3"
                onPress={() => {
                    navigation.navigate('Page3')
                }}
            />
            <Button
                title="FlatListDemo"
                onPress={() => {
                    navigation.navigate('FlatListDemo')
                }}
            />
            <Button
                title="SectionListDemo"
                onPress={() => {
                    navigation.navigate('SectionListDemo')
                }}
            />
        </View>
    )
}

// 在页面设置 navigationOptions
HomePage.navigationOptions = {
    headerTitle: 'Home', // title 也是设置页面标题
    headerTitleAlign: 'center', // 安卓上标题默认居左，设置居中
    headerBackTitle: '返回', // 没生效，原因暂时未知
}

export default HomePage
