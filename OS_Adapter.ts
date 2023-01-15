import Constants from 'expo-constants';
import { Platform, StatusBar } from 'react-native';



const statusBarHeightIOS = Constants.statusBarHeight;
const statusBarHeightAndroid = StatusBar.currentHeight; 

const statusBar = () => {
    return Platform.OS == 'android' ? statusBarHeightAndroid : statusBarHeightIOS
}

export default  {statusBar}