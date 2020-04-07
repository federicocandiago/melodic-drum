import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RNShake from 'react-native-shake';
import PadButton from './padButton';
import notes from '../misc/notes';

class Pad extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }

    render() {
        return (
            <View style={this.padStyle.container}>
                <View style={this.padStyle.rowContainer}>
                    <View style={this.padStyle.padHalfButtonArea} ></View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[1]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[3]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[5]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[7]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[9]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[11]} />
                    </View>
                </View>
                <View style={this.padStyle.rowContainer}>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[0]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[2]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[4]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[6]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[8]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[10]} />
                    </View>
                    <View style={this.padStyle.padButtonArea}>
                        <PadButton isGregorian={this.props.isGregorian} note={notes[12]} />
                    </View>
                </View>
            </View>

        )
    }

    padStyle = StyleSheet.create({
        container: {
            flexGrow: 1,
            flexWrap: 'wrap',
            height: '100%',
            backgroundColor: '#000000'
        },
        rowContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            height: '50%'
        },
        padButtonArea: {
            width: '14.28%',
            height: '100%',
            alignContent: 'center'
        },
        padHalfButtonArea: {
            width: '7%'
        }
    });
}



export default Pad;