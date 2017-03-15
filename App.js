import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import RoomScene from './src/scenes/RoomScene';
import AboutScene from './src/scenes/AboutScene';
import ProfilScene from './src/scenes/ProfilScene';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'room'} title={'MonAirbnb'} component={RoomScene} />
        <Scene key={'about'} title={'About the Room'} component={AboutScene} />
        <Scene key={'profil'} title={'Profil'} component={ProfilScene} />
      </Router>
    );
  }
}

export default App;