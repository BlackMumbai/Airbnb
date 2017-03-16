import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';
import {
    Actions, 
} from 'react-native-router-flux';

const styles = StyleSheet.create({
    input: {
        height: 40,
    }
});

class LoginScene extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            email: '',
            password: '' 
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
        .then(json => {
            console.log(json);
            if (!json.error) {
            //this.authenticate(json);
            Actions.room();
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
                <View>
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
                    color= 'black' />
            </View>
        );
    }
}

export default LoginScene;