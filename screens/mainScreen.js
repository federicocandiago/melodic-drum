import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import notes from '../misc/notes';
import RNShake from 'react-native-shake';

import Loading from '../components/loading';
import TitleBar from '../components/titleBar';
import Pad from '../components/pad';

let Sound = require('react-native-sound');

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            isGregorian: true,
            shakeSound: new Sound('shake.mp3', Sound.MAIN_BUNDLE)
        };
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ loaded: true }) }, 2000);

        RNShake.addEventListener('ShakeEvent', () => {
 
            this.state.shakeSound.stop(() => {
                this.state.shakeSound.play();
            });
        });

    }

    _setNotationState(value) {
        this.setState({isGregorian: value})
        console.log('value', value);
    }

    render() {
        return this.state.loaded ? (
            <SafeAreaView style={this.styles.safeAreaView}>
                <View style={this.styles.title}>
                    <TitleBar 
                    navigation={this.props.navigation} 
                    isGregorian={this.state.isGregorian} 
                    setNotationState={(value)=>{this._setNotationState(value)}}
                    />
                </View>
                <View style={this.styles.pad}>
                    <Pad notes={notes} isGregorian={this.state.isGregorian}/>
                </View>
            </SafeAreaView>
        ) : (<Loading />)
    }

    styles = StyleSheet.create({
        safeAreaView: {
            backgroundColor: '#000000', 
            color: 'red'
        },
        title: { 
            height: '20%' 
        },
        pad: { 
            height: '80%' 
        }
    })
}

export default MainScreen;