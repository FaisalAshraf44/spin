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

export const VBucks = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('About')}>
        <Image
          source={require('../Assets/share.png')}
          resizeMode="contain"
          style={styles.share}
        />
      </TouchableWithoutFeedback>
      <Image
        source={require('../Assets/vbucksText.png')}
        resizeMode="contain"
        style={styles.aboutText}
      />

      <View style={{alignItems: 'center', marginTop: height(16)}}>
        <TouchableOpacity onPress={()=>props.navigation.push('VBuckToDollars')}>
          <Image
            source={require('../Assets/vTod.png')}
            resizeMode="contain"
            style={{
              height: totalSize(10),
              width: totalSize(32),
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>props.navigation.push('DollarsToVBucks')}>
          <Image
            source={require('../Assets/dTov.png')}
            resizeMode="contain"
            style={{
              height: totalSize(10),
              width: totalSize(32),
            }}
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
  share: {
    height: totalSize(10),
    width: totalSize(10),
    marginTop: height(4),
    marginRight: width(4),
    alignSelf: 'flex-end',
  },

  aboutText: {
    height: totalSize(4),
    width: totalSize(30),
    marginTop: height(6),
    alignSelf: 'center',
  },
});
