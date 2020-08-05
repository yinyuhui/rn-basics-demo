import React from 'react'
import { ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
} from 'react-navigation-tabs'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import { Button, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import SectionListDemo from '../pages/SectionListDemo'
import FlatListDemo from '../pages/FlatListDemo'
import Login from '../pages/Login'

const DrawerNavigator = createDrawerNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                drawerLabel: 'page1',
                drawerIcon: ({ tintColor, focused }) => (
                    <Feather
                        name="list"
                        fontSize={30}
                        style={{ color: focused ? tintColor : 'grey' }}
                    />
                ),
            },
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                drawerLabel: 'page2',
                drawerIcon: ({ focused }) => (
                    <Feather
                        name="home"
                        style={{ color: focused ? 'red' : 'black' }}
                    />
                ),
            },
        },
    },
    {
        contentComponent: (props) => {
            return (
                <ScrollView style={{ backgroundColor: '#463', flex: 1 }}>
                    <SafeAreaView forceInset={{ top: 'always' }}>
                        <DrawerItems {...props} activeTintColor="#703" />
                    </SafeAreaView>
                </ScrollView>
            )
        },
        contentOptions: {
            // 全局配置
        },
    },
)

const TopBarNavigators = createMaterialTopTabNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'Page1',
            },
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: 'Page2',
            },
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: 'Page3',
            },
        },
    },
    {
        tabBarOptions: {
            labelStyle: {
                // color: 'orange',
                fontSize: 16,
            },
            upperCaseLabel: false,
            style: {
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                backgroundColor: '#e98',
                height: 2,
            },
            activeTintColor: '#e98', // 活动标签的标签和图标颜色
            inactiveTintColor: 'orange',
        },
    },
)

const BottomTabNavigators = createBottomTabNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: 'Home', // 可以接收字符串
                tabBarIcon: ({ tintColor, focused }) => (
                    <Feather
                        name="home"
                        size={20}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },

        Page1: {
            screen: Page1,
            navigationOptions: {
                // 也可以接收一个组件
                tabBarLabel: ({ focused }) => (
                    <Text
                        style={{
                            color: focused ? 'red' : 'grey',
                            fontSize: 11,
                            textAlign: 'center',
                            marginBottom: 1.5,
                        }}>
                        page1
                    </Text>
                ),
                tabBarIcon: ({ focused, tintColor }) => (
                    <Feather
                        name="list"
                        size={20}
                        style={{ color: focused ? 'red' : 'grey' }}
                    />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            // 整体修改选中状态下的颜色
            activeTintColor: 'orange',
        },
    },
)

const AppStackNavigators = createStackNavigator(
    {
        // 如果只有一个 screen 属性，可以简写
        Home: HomePage,
        // Home: {
        //     screen: HomePage,
        // },
        BottomTabNavigators,
        // BottomTabNavigators: {
        //     screen: BottomTabNavigators,
        // },
        TopBarNavigators,
        DrawerNavigator,
        Page1: {
            screen: Page1,
            // 动态设置 navigationOptions
            navigationOptions: ({ navigation }) => ({
                title: `${
                    navigation.state.params && navigation.state.params.name
                }页面`,
            }),
        },
        Page2: {
            screen: Page2,
            navigationOptions: (props) => {
                const {
                    navigation: {
                        state: { params = {} },
                        setParams,
                    },
                } = props

                return {
                    title: params.title,
                    headerRight: () => (
                        <Button
                            title={params.mode === 'edit' ? '编辑' : '保存'}
                            onPress={() => {
                                setParams({
                                    mode: params.mode === 'edit' ? '' : 'edit',
                                })
                            }}
                        />
                    ),
                }
            },
        },
        Page3: {
            screen: Page3,
        },
        FlatListDemo: {
            screen: FlatListDemo,
        },
        SectionListDemo: {
            screen: SectionListDemo,
        },
    },
    // {
    //     // 对所有路由的配置
    //     defaultNavigationOptions: {},
    // },
)

const AuthNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        },
    },
})

const SwitchNavigators = createSwitchNavigator({
    Auth: AuthNavigator,
    Home: AppStackNavigators,
})

export default SwitchNavigators
// export default AppStackNavigators

// export default createAppContainer(AppStackNavigators)
