import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../assets/styles/styles';

// import * as RootNavigation from '../misc/rootNavigation';

import Loading from '../components/loading';
import TitleBar from '../components/titleBar';
import Pad from '../components/pad';
import { ScrollView } from 'react-native-gesture-handler';

class AboutScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.title}>About</Text>
                <View style={styles.button}>
                    <Button onPress={() => { this.props.navigation.navigate('Main') }} title="Back" />
                </View>
            </ScrollView>
        )
    }


}



export default AboutScreen;