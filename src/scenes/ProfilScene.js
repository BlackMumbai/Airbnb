import React from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfilScene extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            dataRoom: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
            dataFavorites: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
        }
    }

    componentDidMount () {
        fetch(`http://localhost:3001/api/room/${this.props.rowData.user.account.rooms[0]}`)
        .then(res => res.json())
        .then(myRoom => {
            this.setState({
                dataRoom: this.state.dataRoom.cloneWithRows([myRoom])
            });
        });
        fetch(`http://localhost:3001/api/room/${this.props.rowData.user.account.favorites[0]}`)
        .then(res => res.json())
        .then(myFavorites => {
            this.setState({
                dataFavorites: this.state.dataRoom.cloneWithRows([myFavorites])
            });
        });
    }

    render() {
/*        console.log('this.props.rowData.user.account.rooms[0]',this.props.rowData.user.account.rooms[0]);*/
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{
                        marginBottom: 15,
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>{this.props.rowData.user.account.username}</Text>
                    <Image
                    source={{ uri: this.props.rowData.user.account.photos[0] }}
                    style={{ width: 150, height: 150, borderRadius: 75 }} />
                    <Text style={{
                    marginTop: 15,
                    marginBottom: 15
                    }}>{this.props.rowData.user.account.description}</Text>
                    <Text style={{
                        marginBottom: 10,
                    }}>My Apartment</Text>
                    <ListView 
                        dataSource={this.state.dataRoom}
                        renderRow={(rowData) => {
                            return (
                                <View>
                                    <Image
                                    source={{ uri: rowData.photos[0] }}
                                    style={{ width: 300, height: 150 }} />
                                    <Text style={{
                                        marginTop: 10
                                    }}>{rowData.title}</Text>
                                </View>
                    )}} />
                    <Text style={{
                        marginTop: 15,
                        marginBottom: 10,
                    }}>My Favorites</Text>
                    <ListView 
                        dataSource={this.state.dataFavorites}
                        renderRow={(rowData) => {
                            return (
                                <View>
                                    <Image
                                    source={{ uri: rowData.photos[0] }}
                                    style={{ width: 300, height: 150 }} />
                                    <Text style={{
                                        marginTop: 10
                                    }}>{rowData.title}</Text>
                                </View>
                    )}} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    alignItems:'center'
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
});

export default ProfilScene;