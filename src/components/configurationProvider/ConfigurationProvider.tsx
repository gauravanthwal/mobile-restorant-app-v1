import {useDispatch, useSelector} from 'react-redux';
import {loginIfToken} from '../../redux/features/authSlice';
import {getFromStorage} from '../../common/helper/storage';
import {View} from 'react-native';
import Loader from '../common/ui/Loader';
import {useEffect} from 'react';

const ConfigurationProvider = ({children}: any) => {
  const dispatch = useDispatch();
  const {isAuthLoader} = useSelector((state: any) => state.auth);

  const getData = async () => {
    const token = await getFromStorage('token');
    
    if (token) {
      dispatch(loginIfToken(token));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* {isAuthLoader && <Loader/>} */}
      {children}
    </>
  );
};

export default ConfigurationProvider;
