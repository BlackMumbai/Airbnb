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

class AboutScene extends React.Component {
  render() {
    console.log(this.props.rowData);
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{this.props.rowData.title}</Text>
          <Image
              source={{ uri: this.props.rowData.photos[0] }}
              style={{ width: 300, height: 150 }} />
          <Text style={{
              marginTop: 15
          }}>{this.props.rowData.description}</Text> 
          <View  style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15
              }}>
              <View style={{
                  alignItems: 'flex-start'
              }}>
                  <Text>Prix: {this.props.rowData.price}€</Text>
                  <Text>{this.props.rowData.reviews} Reviews</Text>
                  <Text style={{
                      color: '#edd900'
                    }}>{'★'.repeat(this.props.rowData.ratingValue)}
                      {'☆'.repeat(5-this.props.rowData.ratingValue)}
                  </Text>
              </View>
              <View style={{
                  alignItems: 'flex-end'
              }}>
                  <Image
                      source={{ uri: this.props.rowData.user.account.photos[0] }}
                      style={{ 
                          width: 50, 
                          height: 50,
                          borderRadius: 25
                          }} />
              </View>
          </View>
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
