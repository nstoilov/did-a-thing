import React from 'react';
import { TabNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import EditScreen from './screens/EditScreen';
import ChartScreen from './screens/ChartScreen';


export default class App extends React.Component {
//change this to test screen flows
  state = { thing: null };

  render() {
    let MainNavigator = null;

    if (this.state.thing) {
      MainNavigator = TabNavigator({
        main: {
          screen: TabNavigator({
            chart: { screen: ChartScreen },
            edit: { screen: EditScreen }

          },
            {
              swipeEnabled: false,              
              lazy: true,
              animationEnabled: false,
              navigationOptions: {
                tabBarVisible: false
              }
            })
        }
      },
        {
          swipeEnabled: false,
          lazy: true,
          animationEnabled: false,
          navigationOptions: {
            tabBarVisible: false
          }
        }
      );
    } else {
      MainNavigator = TabNavigator({
        main: {
          screen: TabNavigator({
            welcome: { screen: WelcomeScreen },
            chart: { screen: ChartScreen },
            edit: { screen: EditScreen }
          },
            {
              swipeEnabled: false,             
              lazy: true, // Each screen will not mount/load until user clicks on them
              animationEnabled: false,
              navigationOptions: {
                tabBarVisible: false
              }
            })
        }
      },
        { 
          swipeEnabled: false,
          lazy: true, // Each screen will not mount/load until user clicks on them
          animationEnabled: false,
          navigationOptions: {
            tabBarVisible: false
          }
        }
      );
    }

    return (
      <MainNavigator />
    );
  }
}
