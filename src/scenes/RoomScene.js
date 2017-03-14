import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {
    Actions, 
} from 'react-native-router-flux';

import AboutScene from  './AboutScene';

class RoomScene extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            dataRoom: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
        }
    }

    countingStar(rating) {
        let star = rowData.ratingValue
        let showStar = '&#9733;'.repeat(star);
        console.log(showStar);
    }

    componentDidMount () {
        fetch('http://localhost:3001/api/room?city=paris')
        .then(res => res.json())
        .then(resRoom => {
            console.log('App#componentDidMount resRoom', resRoom.rooms);
            this.setState({
                dataRoom: this.state.dataRoom.cloneWithRows(resRoom.rooms)
            });
        });
    }

    render() {
        return (
            <ListView 
                dataSource={this.state.dataRoom}
                renderRow={(rowData) => {
                    return (
                        <TouchableHighlight
                            onPress={() => Actions.about({rowData})}>
                            <View style={styles.container}>
                                <Image
                                    source={{ uri: rowData.photos[0] }}
                                    style={{ width: 300, height: 150 }} />
                                <Text style={styles.title}>{rowData.title}</Text>
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
                                        <Image
                                            source={{ uri: rowData.user.account.photos[0] }}
                                            style={{ 
                                                width: 50, 
                                                height: 50,
                                                borderRadius: 25
                                                }} />
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    padding: 30,
/*    fontFamily: 'CircularAirPro-Book'*/
  },
  title: {
    flex: 1,
    fontSize: 18,
/*    fontFamily: 'CircularAirPro-Bold',*/
    marginBottom: 15,
  },
});

export default RoomScene;