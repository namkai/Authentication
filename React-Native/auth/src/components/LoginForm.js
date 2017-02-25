import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }
    onButtonPress() {
        const { email, password } = this.state;
        console.log(email, password);

        firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            console.log('i\'m the error', error);
            firebase.auth().createUserWithEmailAndPassword(email, password).catch((NewError) => {
                console.log('I\'m the error to create a user', NewError);
                this.setState({ error: 'Authentication Failed.' });
            });
        });
    }
    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                        label="Email"
                        placeholder="user@email.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password123"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
        fontWeight: 'bold'
    }
};

export default LoginForm;
