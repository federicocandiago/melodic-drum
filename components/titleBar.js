import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/styles/styles'

class TitleBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'isGregorian' : this.props.isGregorian
        }
    }

    render() {
        return (
            <View style={this.titleStyles.titleBar}>
                    <Switch style={this.titleStyles.switchContainer}
                        onValueChange={() => {this.props.setNotationState(!this.props.isGregorian)}}
                        value={!this.props.isGregorian}
                    />

                <Text style={[this.titleStyles.title, this.titleStyles.centerm, this.titleStyles.contained]}>Shake for snares</Text>
                <View style={this.titleStyles.aboutContainer}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('About') }}>
                        <Text style={this.titleStyles.aboutButton}> ? </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    titleStyles = StyleSheet.create({
        aboutButton: {
            height: 40,
            width: 40,
            textAlign: "center",
            textAlignVertical: "center",
            color: "#AAAAAA",
            borderColor: "#AAAAAA",
            backgroundColor: '#EEEEEE',
            borderWidth: 2,
            borderRadius: 50
        },
        title: {    
            fontSize: 20,
            color: '#FFFFFF',
            textAlign: 'center',
            textAlignVertical: 'center',
            margin: 20
          },
        aboutContainer: {
            position: 'absolute',
            top: 20,
            right: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
        switchContainer: {
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