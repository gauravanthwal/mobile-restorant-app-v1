import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {StatusBar} from 'react-native';
import ConfigurationProvider from './components/configurationProvider/ConfigurationProvider';

const App = () => {
  // const isHermes = () => !!global.HermerInternal;
  // console.log('isHermes ', isHermes());

  return (
    <Provider store={store}>
      <ConfigurationProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ConfigurationProvider>
    </Provider>
  );
};

export default App;
