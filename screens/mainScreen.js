import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import notes from '../misc/notes';

import Loading from '../components/loading';

import TitleBar from '../components/titleBar';
import Pad from '../components/pad';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            isGregorian: true
        };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    _setNotationState(value) {
        this.setState({isGregorian: value})
        console.log('value', value);
    }

    render() {
        return this.state.loaded ? (
            <SafeAreaView>
                <View style={{ height: '20%' }}>
                    <TitleBar 
                    navigation={this.props.navigation} 
                    isGregorian={this.state.isGregorian} 
                    setNotationState={(value)=>{this._setNotationState(value)}}
                    />
                </View>
                <View style={{ height: '80%' }}>
                    <Pad notes={notes} isGregorian={this.state.isGregorian}/>
                </View>
            </SafeAreaView>
        ) : (<Loading />)
    }
}



export default MainScreen;