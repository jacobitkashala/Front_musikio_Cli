import React, {useState} from 'react';
import {Onboarding} from './Screens';
// import {Onboarding, Player} from './Screens';
import AppNavigator from './Navigation';
const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(true);

  const loadAssetsAsync = async () => {
    setAssetsLoaded(false);
  };

  return assetsLoaded ? (
    <Onboarding loadAssetsAsync={loadAssetsAsync} />
  ) : (
    <AppNavigator />
  );

  // return (<Player />)
};

export default App;
