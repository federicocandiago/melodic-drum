import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../assets/styles/styles';

import Loading from '../components/loading';
import { TouchableHighlight } from 'react-native-gesture-handler';
import TitleBar from '../components/titleBar';
import Pad from '../components/pad';
import { SafeAreaView } from 'react-native-safe-area-context';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    alert() {
        this.props.navigation.navigate('AboutScreen');
    }


    render() {
        return this.state.loaded ? (
            <SafeAreaView>
                <TitleBar navigation={this.props.navigation} />
                    <Pad />
            </SafeAreaView>
        ) : (<Loading />)
    }
}



export default MainScreen;