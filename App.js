import React, { Component } from 'react';

import { Subscribe, Provider } from 'unstated';
import { StateContainer } from './StateContainer';
import AppContainer from './AppContainer';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[StateContainer]}>
          {(stateStore) => (
            <AppContainer
              stateStore={stateStore}
            />
          )}
      </Subscribe>
    </Provider>
    );
  }
}
