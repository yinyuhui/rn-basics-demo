/**
 * @format
 */
import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'
import { name } from './app.json'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import App from './App'
import FlatListDemo from './pages/FlatListDemo'
import SectionListDemo from './pages/SectionListDemo'

const Root = createStackNavigator({
    Home: {
        screen: App,
    },
    FlatListDemo: {
        screen: FlatListDemo,
    },
    SectionListDemo: {
        screen: SectionListDemo,
    },
})

AppRegistry.registerComponent(name, () => createAppContainer(Root))
