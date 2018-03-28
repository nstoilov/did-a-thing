import { Container } from 'unstated';

class StateContainer extends Container {
  state = {
    name: '',
    author: '',
    thing: false
  }
}

export { StateContainer };
