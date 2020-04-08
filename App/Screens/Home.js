import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {height, totalSize, width} from 'react-native-dimension';

export const Home = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('About')}>
        <Image
          source={require('../Assets/about.png')}
          resizeMode="contain"
          style={styles.about}
        />
      </TouchableWithoutFeedback>
      <View style={styles.bucksContainer}>
        <TouchableOpacity>
          <Image
            source={require('../Assets/bucks1.png')}
            resizeMode="contain"
            resizeMode="contain"
            style={styles.bucks}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Spin')}>
          <Image
            source={require('../Assets/bucks.png')}
            resizeMode="contain"
            resizeMode="contain"
            style={styles.bucks}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Image
            source={require('../Assets/terms.png')}
            resizeMode="contain"
            resizeMode="contain"
            style={styles.options}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Assets/quiz.png')}
            resizeMode="contain"
            resizeMode="contain"
            style={styles.options}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Assets/privacy.png')}
            resizeMode="contain"
            resizeMode="contain"
            style={styles.options}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  about: {
    height: totalSize(19),
    width: width(100),
    marginTop: height(6),
  },
  bucksContainer: {
    width: width(96),
    flexDirection: 'row',
    marginTop: height(11),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  bucks: {
    height: totalSize(25),
    width: totalSize(21),
  },
  options: {
    height: totalSize(10),
    width: totalSize(10),
  },
  optionsContainer: {
      flexDirection: 'row',
      width:width(74),
      alignSelf:'center',
      justifyContent:'space-between',
      marginTop:height(10)
    },
});
