import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {StatusBar} from 'react-native';
import ConfigurationProvider from './components/configurationProvider/ConfigurationProvider';
import Toast from 'react-native-toast-message';
import { getAllKeys } from './common/helper/storage';
import { useEffect } from 'react';

const App = () => {
  // const isHermes = () => !!global.HermerInternal;
  // console.log('isHermes ', isHermes());

  const xyz = async()=>{
    const x = await getAllKeys()
    console.log(x);
  }
  xyz()
  
  return (
    <Provider store={store}>
      <ConfigurationProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ConfigurationProvider>
      <Toast />
    </Provider>
  );
};

export default App;
