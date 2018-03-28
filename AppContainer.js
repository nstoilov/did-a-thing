import React from 'react';
import { TabNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import EditScreen from './screens/EditScreen';
import ChartScreen from './screens/ChartScreen';


export default class AppContainer extends React.Component {
  //change this to test screen flows
  //state = { thing: null };

  componentDidMount() {
    console.log('this.props.stateStore.state: ', this.props.stateStore.state);
  }

  render() {
    let MainNavigator = null;

    if (this.props.stateStore.state.thing) {
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
              animationEnabled: false,
              navigationOptions: {
                tabBarVisible: false
              }
            })
        }
      },
        {
          swipeEnabled: false,
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