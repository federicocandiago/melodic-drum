import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = { mounted: true, loadingText: "." };
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.mounted && this.state.loadingText.length < 25) this.setState({ loadingText: this.state.loadingText + '.' })
        }, 200);
    }

    componentWillUnmount() {
        this.setState({ mounted: false })
    }
    render() {
        return (
            <View style={this.styles.container}>
                <View style={{height: '90%'}}>
                    <Image style={this.styles.splash} source={require("../assets/splash.png")} />
                    <Text style={this.styles.text}>Melodic drum</Text>
                    <Text style={this.styles.text}>{this.state.loadingText}</Text>
                </View>

            </View>
        )
    }

    styles = StyleSheet.create({
        container: {
            backgroundColor: '#000000',
            height: '100%'
        },
        splash: {
            width: 180,
            height: 180,
            alignSelf: "center"
        },
        text: {
            color: '#DDDDDD',
            fontSize: 60,
            fontWeight: "bold",
            textAlign: 'center',
        }
    });
}



export default Loading;