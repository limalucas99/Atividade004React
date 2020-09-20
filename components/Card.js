import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
      <View style={{...style.cardStyle, ...props.styles}}>
        {props.children}
      </View>
    );

}

const style = StyleSheet.create({
    cardStyle: {
        alignItems: 'center',
        shadowColor: 'black',
        textShadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        elevation: 4,
        padding:12,
        borderRadius: 12
    }
});

export default Card;