import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';

class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = { loadingText: "Loading.." };
    }

    componentDidMount(){
        setInterval(() => {
            if (this.state.loadingText.length < 25) this.setState({loadingText: this.state.loadingText + '.'})
        }, 200);
    }


    render() {
        return (
            <View style={styles.loadingText}>
                <Text style={styles.loadingText}>{this.state.loadingText}</Text>
            </View>
        )
    }
}



export default Loading;