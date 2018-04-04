import { Container } from 'unstated';
import { AsyncStorage } from 'react-native';

class StateContainer extends Container {
  state = {
    name: '',
    author: '',
    thing: true
  }

  flipState = () => {
    this.setState({ thing: !this.state.thing });
    AsyncStorage.setItem('token', 'true');
    console.log(this.state.thing);
  };
}

export { StateContainer };

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');
//AsyncStorage.removeItem('fb_token')
