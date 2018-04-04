import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';


class WelcomeScreen extends Component {

    onPress = async () => {
        await AsyncStorage.setItem('token', 'true');
        this.props.navigation.navigate('edit');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    Welcome!
                </Text>
                <View
                    style={styles.buttonContainerStyle}
                >
                    < Button
                        title='Add thing'
                        color='black'
                        buttonStyle={styles.buttonConfirmStyle}
                        onPress={() => this.onPress()}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 40
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonConfirmStyle: {
        backgroundColor: 'white',
        width: 200,
        height: 55,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20
    }
};

export default WelcomeScreen;
