import React, {useState} from 'react';
import {Onboarding} from './Screens';
import AppNavigator from './Navigation';
const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(true);

  const loadAssetsAsync = async () => {
    // console.log(assetsLoaded);
    setAssetsLoaded(false);
  };

  // return assetsLoaded ? (
  //   <Onboarding loadAssetsAsync={loadAssetsAsync} />
  // ) : (
  //   <AppNavigator />
  // );

  return <AppNavigator />;
};

export default App;
