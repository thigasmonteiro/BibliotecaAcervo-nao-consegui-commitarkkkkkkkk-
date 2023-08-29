import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs'

import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Home from "../Pages/Home";
import News from "../Pages/News";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Home" component={Home}
            />
        </Tab.Navigator>
    )
}


export default function Routes(){
    return(
        <Stack.Navigator>

        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
           />

        <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="News"
        component={News}
        options={{headerShown:false}}
        />

        </Stack.Navigator>
    )
}
