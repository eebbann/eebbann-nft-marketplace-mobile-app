import {createStackNavigator} from "@react-navigation/stack"
import {NavigatorContainer, DefaultTheme} from '@react-navigation/native'
import {useFonts} from "expo-font"
import Home from "./screen/Home";
export default function App() {

	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: '#3F51B5',
			}
	}
	return (
		<NavigatorContainer theme = {theme}>
			<Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName="Home">
				<Stack.Screen name="Home" component={Home}/>
				<Stack.Screen name/>
				</Stack.Navigator>
 
		</NavigatorContainer>
	);
}

 