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

const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen
              name="Login"
              component={LoginPage}
              options={{ title: 'LabKart' }}
            />
            <Screen name="Dashboard" component={DashboardPage} />
            <Screen name="Categories" component={CategoriesPage} />
            <Screen name="Products" component={ProductsPage} />
            <Screen name="Product" component={ProductPage} />
        </Navigator>
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
