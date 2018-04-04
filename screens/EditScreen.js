import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class EditScreen extends Component {
    state = {
        text: '',
        times: 1,
        per: 'day'
    };

    OnPress = () => {
        this.props.navigation.navigate('chart');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>
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
                <Text style={styles.titleStyle}>
                    Set a goal:
                </Text>
                <View style={styles.buttonContainerStyle}>
                    < Button
                        title='1'
                        color='black'
                        buttonStyle={styles.buttonRowStyle}
                        onPress={() => this.setState({ times: 1 })}
                    />
                    <Text style={styles.textStyle}>
                        times per
                </Text>
                    < Button
                        title='Day'
                        color='black'
                        buttonStyle={styles.buttonRowStyle}
                        onPress={() => this.setState({ per: 'day' })}
                    />

                </View>
                <View style={styles.buttonContainerStyle}>
                    < Button
                        title='Done'
                        color='black'
                        buttonStyle={styles.buttonConfirmStyle}
                        onPress={this.OnPress}
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
    titleStyle: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 30
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonConfirmStyle: {
        backgroundColor: 'white',
        width: 200,
        height: 55,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20
    },
    buttonRowStyle: {
        backgroundColor: 'white',
        paddingLeft: 30,
        paddingRight: 30,
        height: 55,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 20
    },
};

export default EditScreen;
