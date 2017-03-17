import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {
    Actions, 
} from 'react-native-router-flux';
import Store from 'react-native-simple-store';

const styles = StyleSheet.create({
    input: {
        height: 40,
    }
});

class LoginScene extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            email: 'carine@airbnb-api.com',
            password: 'password01' 
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(user = {email: this.state.email, password: this.state.password}) {
        fetch('http://localhost:3001/api/user/log_in', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user);
            if (!user.error) {
                Store.save('user', {
                    email: 'carine@airbnb-api.com',
                    password: 'password01'
                })
                .then(() => {
                    Actions.tab();
                });
            }
            if (user.error) {
                Alert.alert(user.error);
            }
        });
    }
    
    render() {
        return ( 
            <View style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 60,
            }}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    marginBottom: 20
                }}>WELCOME on myAirbnb!</Text>
                <View style={{
                    borderBottomWidth: 1
                    
                }}>
                    <TextInput
                        placeholder="email"
                        onChangeText={(email) => this.setState({email})}
                        style={styles.input}
                        value={this.state.email}
                        required/>
                </View>
                <View style={{
                    marginTop: 20,
                    marginBottom: 20,
                    borderBottomWidth: 1
                }}>
                    <TextInput 
                        placeholder="password"
                        onChangeText={(password) => this.setState({password})}
                        style={styles.input}
                        value={this.state.password}/>
                </View>
                <Button
                    onPress={() => this.onSubmit()}
                    title= "LogMeIn!"
                    color= 'black' >
                </Button>    
            </View>
        );
    }
}

export default LoginScene;