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
import Icon from 'react-native-vector-icons/Ionicons';

import RoomScene from './src/scenes/RoomScene';
import AboutScene from './src/scenes/AboutScene';
import ProfilScene from './src/scenes/ProfilScene';
import LoginScene from './src/scenes/LoginScene';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Scene key={'signin'} component={LoginScene} />
        <Scene
          key={'tab'}
          tabs
          style= {{
            backgroundColor: '#dbdbdb',
            borderWidth: StyleSheet.hairlineWidth,
          }}
          type={'replace'}>
          <Scene 
            key={'room'} 
            title={'MonAirbnb'} 
            component={RoomScene} 
            icon={(props) =>
                  <Icon
                    name={'md-home'}
                    color={props.selected ? '#AAA' : '#000' } 
                    style={{
                      fontSize: 20
                    }}/> } />
          <Scene key={'about'} title={'About the Room'} component={AboutScene} />
          <Scene 
            key={'profil'} 
            title={'Profil'} 
            component={ProfilScene} 
            icon={(props) =>
                  <Icon
                    name={'md-contact'}
                    color={props.selected ? '#AAA' : '#000' } 
                    style={{
                      fontSize: 20
                    }}/> } />
        </Scene>
      </Router>
    );
  }
}

export default App;