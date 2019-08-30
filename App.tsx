import React, { useState, useEffect } from 'react';
import { createStackNavigator, createAppContainer, NavigationContainer } from "react-navigation";
import LoginComponent from './screens/unauthenticated/Login';
import Analytics from 'appcenter-analytics';



export default function App() {

  const MainStack = createStackNavigator(
    {
      login: LoginComponent
    },
    {
      initialRouteName : 'login',
      headerMode:'none'
    }
  );

  const AppContainer = createAppContainer(MainStack);

  Analytics.trackEvent('Starting App');

  return(<LoginComponent/>);

/*     if (!fontLoaded){
      return (<LoadFontsComponent fontLoaded={()=>{setFontLoaded(true)}}></LoadFontsComponent>);
    }     
    else {
      return (<AppContainer/>);
    } */
}
