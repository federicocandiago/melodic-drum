import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import RNShake from 'react-native-shake';
import { TouchableOpacity } from 'react-native-gesture-handler';

class PadButton extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        RNShake.addEventListener('ShakeEvent', () => {
            alert('TODO');
        });
    }

    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }

    render() {
        return (
            <TouchableOpacity style={this.padButtonStyle.container}>
                <Text style={this.padButtonStyle.button}>{ this.props.isGregorian ? this.props.note.gregorian : this.props.note.anglosaxon }</Text>
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
            width: '90%',
            margin: '5%',
            textAlign: "center",
            textAlignVertical: "center",
            color: "#AAAAAA",
            borderColor: "#AAAAAA",
            backgroundColor: '#EEEEEE',
            borderWidth: 2,
            borderRadius: 10,
        }
    });

}



export default PadButton;