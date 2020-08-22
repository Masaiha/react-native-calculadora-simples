import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default props => {
    return(
        <View>
            <Text>{props.history}</Text>
        </View>
    )
}

var style = StyleSheet.create({
    history: {
        flexWrap: 'wrap',
        padding: 5,
    }
});