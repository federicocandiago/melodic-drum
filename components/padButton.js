import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import RNShake from 'react-native-shake';
import { TouchableOpacity } from 'react-native-gesture-handler';

let Sound = require('react-native-sound');

class PadButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sound: new Sound(this.props.note.filename + '.mp3', Sound.MAIN_BUNDLE)
        }
        this._onPress = this._onPress.bind(this)
    }

    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }

    _onPress() {
        this.state.sound.stop(() => {
            this.state.sound.play();
        });
    };

    render() {
        return (
            <TouchableOpacity style={this.padButtonStyle.container} onPress={this._onPress}>
                <Text style={this.padButtonStyle.button}>{this.props.isGregorian ? this.props.note.gregorian : this.props.note.anglosaxon}</Text>
            </TouchableOpacity>
        )
    }

    padButtonStyle = StyleSheet.create({
        container: {
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center'
        },
        button: {
            aspectRatio: 1,
            width: '95%',
            margin: '2.4%',
            textAlign: "center",
            textAlignVertical: "center",
            color: "#888888",
            fontSize: 30,
            borderColor: "#AAAAAA",
            backgroundColor: '#DDDDDD',
            borderWidth: 3,
            borderRadius: 15,
        }
    });

}



export default PadButton;