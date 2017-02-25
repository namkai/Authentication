import React, { Component } from 'react';
import firebase from 'firebase';

import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
			apiKey: 'AIzaSyBvJd0Hlm1mXhSwO3yWOLCFZy68LEOEJKo',
			authDomain: 'auth-7f131.firebaseapp.com',
			databaseURL: 'https://auth-7f131.firebaseio.com',
			storageBucket: 'auth-7f131.appspot.com',
			messagingSenderId: '333631200083' });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
