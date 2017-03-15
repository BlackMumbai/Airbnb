import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';
import {
    Actions, 
} from 'react-native-router-flux';
import Map from 'react-native-maps';

class AboutScene extends React.Component { 
  render() {
    console.log(this.props.rowData);
    const {
      rowData,
    } = this.props;
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{rowData.title}</Text>
          <Image
              source={{ uri: rowData.photos[0] }}
              style={{ width: 300, height: 150 }} />
          <Text style={{
              marginTop: 15
          }}>{rowData.description}</Text> 
          <View  style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15
              }}>
              <View style={{
                  alignItems: 'flex-start'
              }}>
                  <Text>Prix: {rowData.price}€</Text>
                  <Text>{rowData.reviews} Reviews</Text>
                  <Text style={{
                      color: '#edd900'
                    }}>{'★'.repeat(rowData.ratingValue)}
                      {'☆'.repeat(5-rowData.ratingValue)}
                  </Text>
              </View>
              <View style={{
                  alignItems: 'flex-end'
              }}>
              <TouchableHighlight
                  onPress={() => Actions.profil({rowData})}>
                  <Image
                      source={{ uri: rowData.user.account.photos[0] }}
                      style={{ 
                          width: 50, 
                          height: 50,
                          borderRadius: 25
                          }} />
              </TouchableHighlight>
              </View>
          </View>
          <Map
            initialRegion={{
              latitude: rowData.loc[1],
              longitude: rowData.loc[0],
              latitudeDelta: 0.0120,
              longitudeDelta: 0.0120,
            }} 
            style={{
              height: 150,
              width: 300,
            }}>
          <Map.Marker
            coordinate={{
              latitude: rowData.loc[1],
              longitude: rowData.loc[0],
            }}
            title={rowData.title} />
          </Map>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    justifyContent: 'center',
    padding: 30,
/*    fontFamily: 'CircularAirPro-Book'*/
  },
  title: {
    flex: 1,
    fontSize: 18,
/*    fontFamily: 'CircularAirPro-Bold',*/
/*    marginBottom: 15,*/
  },
});

export default AboutScene;
