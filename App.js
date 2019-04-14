import HomeScreen from './screens/HomeScreen.js';
import AddNewContactScreen from './screens/AddNewContactScreen.js';
import EditContactScreen from './screens/EditContactScreen.js';
import ViewContactScreen from './screens/ViewContactScreen.js';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Add: {screen: AddNewContactScreen},
    View: {screen:ViewContactScreen},
    Edit: {screen: EditContactScreen}
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle:{
        backgroundColor:'#b83227'
      },
      headerTitleStyle:{
        color:'#fff'
      }
    }
  }
)

const App = createAppContainer(MainNavigator);
export default App;