import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

import Drawer from '../Screen/Drawer'
import Home from '../Screen/Home'
import Login from '../Screen/Login'
import Leaderboard from '../Screen/Leaderboard'

const AppNavigation = createDrawerNavigator({
    
    Home,
    Login,
    Leaderboard,
}, {
    headerMode : 'none',
    contentComponent : Drawer,
    drawerWidth: 225
})

export default createAppContainer(AppNavigation)