import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#229BD8" />
      <Image
        source={require('../../assets/image/logo-pdl.png')}
        style={styles.image}
      />
      <Text style={styles.text}>PeduliLindungi</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#229BD8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  image: {width: 150, height: 150, marginBottom: 10},
});
