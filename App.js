import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/Homepage';
import ProductDetail from './components/ProductDetails';
import CheckoutPage from './components/CheckoutPage';
import { useState } from 'react';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
}

export default function App() {
    const [refreshFlag, refresh] = useState(false);

    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerLabelStyle: { fontFamily: 'ArefRuqaa_400Regular' },
                }}
            >
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Checkout">
                    {props => <CheckoutPage {...props} refresh={refresh} refreshFlag={refreshFlag} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
