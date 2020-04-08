import React, {Component, useEffect,useState} from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet, Animated,Easing} from 'react-native';
import {totalSize, height} from 'react-native-dimension';

export const Spin = (props) => {
    const [spinValue] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            spinValue,
          {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
            useNativeDriver: true, // <-- Add this

          }
        ).start()
      }, [])

      const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

  return (
    <View style={styles.container}>
      <View style={{overflow: 'hidden'}}>
        <Animated.Image
          source={require('../Assets/wheel.png')}
          resizeMode="contain"
          style={{height: totalSize(30), width: totalSize(30),transform:[{rotate: spin}]}}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
