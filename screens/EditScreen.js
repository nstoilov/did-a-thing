import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class EditScreen extends Component {

    OnButtonPress = () => {
        this.props.navigation.navigate('chart');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                Edit Screen
            </Text>    
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
