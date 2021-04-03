import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux'
import { store } from './redux/store'

import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import CategoriesPage from './pages/categories';
import ProductsPage from './pages/products';
import ProductPage from './pages/product';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ title: 'LabKart' }}
            />
            <Stack.Screen name="Dashboard" component={DashboardPage} />
            <Stack.Screen name="Categories" component={CategoriesPage} />
            <Stack.Screen name="Products" component={ProductsPage} />
            <Stack.Screen name="Product" component={ProductPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
