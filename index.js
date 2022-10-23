/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeCC from './src/HomeCC';
import HomeFC from './src/HomeFunctional/HomeFC';
import Home from './src/ThirdWeek/Home';
import AssignmentMarks from './src/FourthWeek/AssignmentMarks';
import FlatListLession from './src/FourthWeek/FlatListLession';

AppRegistry.registerComponent(appName, () => App);
