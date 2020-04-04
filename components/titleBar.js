import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../assets/styles/styles'

class TitleBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={[styles.title, this.titleStyles.centerm, this.titleStyles.contained]}>Shake for snares</Text>
                <View style={this.titleStyles.aboutContainer}>
                    <TouchableOpacity onPress={() => {  this.props.navigation.navigate('About')  }}>
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
        aboutContainer: {
            position: 'absolute',
            top: 20,
            right: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

}

export default TitleBar;