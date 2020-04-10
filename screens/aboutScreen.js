import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class AboutScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={this.styles.about}>
                <Text style={this.styles.aboutText}>
                    Press the 🔴 button to record, use the switch on the upper left corner of the screen to change between Gregorian and Anglosaxon notation systems, press the keys to produce sounds, and shake the device to play the shakers.
                    </Text>
                <Text style={this.styles.aboutText}>
                    This piece of sofware is released under the <Text style={this.styles.link}
                        onPress={() => Linking.openURL("https://opensource.org/licenses/MIT")}>MIT licence</Text>, so feel free to <Text style={this.styles.link}
                        onPress={() => Linking.openURL("https://github.com/federicocandiago/melodic-drum/")}>fork</Text> it from github and improve it.
                </Text>
                <View style={this.styles.button}>
                    <Button color="#464646" onPress={() => { this.props.navigation.navigate('Main') }} title="Back" />
                </View>
            </ScrollView>
        )
    }

    styles = StyleSheet.create({
        link: {
            color: '#4646FF',
            textDecorationLine: 'underline'
        },
        about: {
            backgroundColor: '#111111'
        },
        aboutText: {
            fontSize: 20,
            lineHeight: 30,
            fontFamily: 'roboto-medium',
            textAlign: 'justify',
            textAlignVertical: 'center',
            color: '#EEEEEE',
            margin: 20
        },
        loadingText: {
            fontSize: 40,
            textAlign: 'center',
            textAlignVertical: 'center',
            height: '100%'
        },
        button: {
            margin: 30,
            width: 150,
            alignSelf: 'center'
        }
    });

}

export default AboutScreen;