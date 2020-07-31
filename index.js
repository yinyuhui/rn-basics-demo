/**
 * @format
 */
import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'
import App from './App'
import FlatListDemo from './pages/FlatListDemo'
import { name } from './app.json'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const Root = createStackNavigator({
    Home: {
        screen: App,
    },
    FlatListDemo: {
        screen: FlatListDemo,
    },
})

AppRegistry.registerComponent(name, () => createAppContainer(Root))
