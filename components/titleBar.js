import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TitleBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'isGregorian': this.props.isGregorian
        }
    }

    render() {
        return (
            <View style={this.styles.titleBar}>
                <Switch style={this.styles.switch}
                    trackColor={{ true: '#226622', false: '#777777'}}
                    onValueChange={() => { this.props.setNotationState(!this.props.isGregorian) }}
                    value={!this.props.isGregorian}
                />

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
            fontSize: 25,
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