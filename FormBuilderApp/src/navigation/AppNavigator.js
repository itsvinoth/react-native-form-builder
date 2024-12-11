import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FormEditor from './src/screens/FormEditor';
import FormPreview from './src/screens/FormPreview';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormEditor">
        <Stack.Screen name="FormEditor" component={FormEditor} />
        <Stack.Screen name="FormPreview" component={FormPreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
