import React, { Component } from 'react';
import { PermissionsAndroid, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SoundRecorder from 'react-native-sound-recorder'; //TODO: delete if expo is used. delete expo audio and unimodules
import * as Animatable from 'react-native-animatable';

class TitleBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'isGregorian': this.props.isGregorian,
            'isRecording': false
        }

        this._isRecording = this._isRecording.bind(this)
    }

    //**** LOOK: setState({a:1}, () => {callback function, like then})

    _isRecording() {
        this.setState({ isRecording: !this.state.isRecording },
            async () => {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        if (this.state.isRecording) {
                            SoundRecorder.start(SoundRecorder.PATH_CACHE + '/test.mp4')
                                // .then(function (p) {
                                //     console.log('started recording', p);
                                // });

                            SoundRecorder.start(
                                SoundRecorder.PATH_CACHE + 
                                `/Metronomical_${new Date().toISOString().substr(2,19).replace(/\D/g,'')}.mp3`
                                ).then((p) => {
                                    console.log(`Started recording: ${p}`);
                                });
                        } else {

                            console.log('stop')
                            SoundRecorder.stop()
                                .then(function (result) {
                                    console.log('stopped recording, audio file saved at: ' + result.path);
                                }
                                );
                        }
                    }
                } catch (e) {
                    console.error(`Recording Error: ${e}`)
                }
            }
        );
    }

    render() {
        return (
            <View style={this.styles.titleBar}>
                <StatusBar hidden={true} />
                <Switch style={this.styles.switch}
                    trackColor={{ true: '#226622', false: '#777777' }}
                    onValueChange={() => { this.props.setNotationState(!this.props.isGregorian) }}
                    value={!this.props.isGregorian}
                />

                <Animatable.Text
                    style={[
                        this.styles.recordButton,
                        { backgroundColor: this.state.isRecording ? "#464646" : "#000000" },
                        { borderColor: this.state.isRecording ? "#252525" : "#000000" },
                    ]}
                    onPress={this._isRecording}
                    iterationCount="infinite"
                    animation={this.state.isRecording ? "tada" : ""}
                >🔴</Animatable.Text>

                <Text style={[this.styles.title, this.styles.centerm, this.styles.contained]}>shake for 🥁</Text>
                <View style={this.styles.aboutContainer}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('About') }}>
                        <Text style={this.styles.aboutButton}> ? </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    styles = StyleSheet.create({
        recordButton: {
            top: 10,
            left: 64,
            fontSize: 20,
            width: 56,
            height: 56,
            textAlign: "center",
            textAlignVertical: "center",
            borderRadius: 40,
            borderWidth: 5,
            padding: 15
        },
        aboutButton: {
            height: 40,
            width: 40,
            textAlign: "center",
            textAlignVertical: "center",
            color: "#777777",
            borderColor: "#777777",
            backgroundColor: '#CCCCCC',
            borderWidth: 2,
            borderRadius: 50,
            fontSize: 25,
            fontFamily: "bold"
        },
        title: {
            top: 20,
            left: '25%',
            width: '50%',
            position: 'absolute',
            fontSize: 25,
            color: '#FFFFFF',
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        aboutContainer: {
            position: 'absolute',
            top: 18,
            right: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
        switch: {
            position: 'absolute',
            top: 25,
            left: 20
        },
        titleBar: {
            backgroundColor: '#000000'
        }
    });
}

export default TitleBar;