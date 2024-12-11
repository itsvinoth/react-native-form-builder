import { AppRegistry } from 'react-native';
import App from './App';            
import SignUp from './SignUp';      
import { name as appName } from './app.json';


const showFormBuilder = true;

AppRegistry.registerComponent(appName, () => (showFormBuilder ? App : SignUp));
