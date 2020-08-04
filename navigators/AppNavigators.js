import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import { Button } from 'react-native'

import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import SectionListDemo from '../pages/SectionListDemo'
import FlatListDemo from '../pages/FlatListDemo'

const AppStackNavigators = createStackNavigator(
    {
        HomePage: {
            screen: HomePage,
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
