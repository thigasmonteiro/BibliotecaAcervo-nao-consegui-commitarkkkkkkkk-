import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs'

import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Home from "../Pages/Home";
import News from "../Pages/News";
import Search from "../Pages/Search";
import Header from "../components/Header";
import LibraryCatalog from "../Pages/Collection";

import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor:'#18117A',
                    borderTopWidth:0,

                    bottom:14,
                    left:14,
                    right:14,
                    elevation:0,
                    borderRadius:4,
                    height:60,
                }
            }}
        >

            <Tab.Screen
                name="Home" component={Home}
                options={{headerShown:false,
                    headerShown:false,
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused){
                            return <Ionicons name="home" size={size} color={color} /> 
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
               

                

            />
             <Tab.Screen
                name="Search" component={Search}
                options={{headerShown:false,
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused){
                            return <Ionicons name="search" size={size} color={color} /> 
                        }
                        return <Ionicons name="search-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Librarycatalog" component={LibraryCatalog}
                options={{headerShown:false,
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused){
                            return <Ionicons name="book" size={size} color={color} /> 
                        }
                        return <Ionicons name="book-outline" size={size} color={color} />
                    }}}
            />
        
        </Tab.Navigator>
    )
}


export default function Routes(){
    return(
        <Stack.Navigator>

        <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown:false}}
        />
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
        name="News"
        component={News}
        options={{headerShown:false}}
        />

        </Stack.Navigator>
    )
}
