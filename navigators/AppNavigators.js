import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import {
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import { Button, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import SectionListDemo from '../pages/SectionListDemo'
import FlatListDemo from '../pages/FlatListDemo'

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
        Home: {
            screen: HomePage,
        },
        BottomTabNavigators: {
            screen: BottomTabNavigators,
        },
        TopBarNavigators: {
            screen: TopBarNavigators,
        },
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

export default AppStackNavigators

// export default createAppContainer(AppStackNavigators)
