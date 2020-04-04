import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';

import Loading from '../components/loading';
import TitleBar from '../components/titleBar';
import Pad from '../components/pad';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        console.log('mount!');
        this.setState({ loaded: true });
    }


    render() {
        return this.state.loaded ? (<View><TitleBar /><Pad /></View>) : (<Loading />)
    }
}



export default MainScreen;