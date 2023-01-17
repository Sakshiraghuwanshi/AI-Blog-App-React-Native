
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import WriteBlog from '../Screens/WriteBlog';
import AI from '../Screens/AI';

const Tab = createBottomTabNavigator();

const Tabs= () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="WriteBlog" component={WriteBlog} />
      <Tab.Screen name="AI" component={AI } />
    </Tab.Navigator>
  );
}

export default Tabs;