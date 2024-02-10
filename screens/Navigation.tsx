import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import FullPost from "./Post/FullPost";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: 'News' }} />
                <Stack.Screen name="Post" component={FullPost} options={{ title: 'Post' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}