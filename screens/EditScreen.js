import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class EditScreen extends Component {
    state = { text: '' };

    OnButtonPress = () => {
        this.props.navigation.navigate('chart');
    }


    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    Name your thing:
            </Text>
                <View>
                    <TextInput
                        placeholder='thing'
                        value={this.state.value}
                        onChangeText={(text) => this.setState({ text })}
                        underlineColorAndroid='grey'
                        style={styles.inputStyle}
                    />
                </View>
                <View style={styles.buttonContainerStyle}>
                    < Button
                        title='Done'
                        color='black'
                        buttonStyle={styles.buttonStyle}
                        onPress={this.OnButtonPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
        paddingBottom: 10,
        paddingRight: 5,
        paddingLeft: 5
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 30
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonStyle: {
        backgroundColor: 'white',
        width: 200,
        height: 55,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20
    }
};

export default EditScreen;
