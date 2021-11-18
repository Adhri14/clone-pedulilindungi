import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IlClose from '../../assets/image/close.svg';
import IlDownload from '../../assets/image/download.svg';

const Download = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#229BD8" />
      <Image
        source={require('../../assets/image/sertifikat.jpeg')}
        style={styles.img}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingVertical: 50,
          flexDirection: 'row',
          paddingHorizontal: 16,
        }}>
        <Pressable style={styles.buttonScanner}>
          <IlDownload />
          <Text style={styles.textScanner}>DOWNLOAD SERTIFIKAT</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()} style={styles.circle}>
          <IlClose />
        </Pressable>
      </View>
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#229BD8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 269,
    resizeMode: 'contain',
    marginHorizontal: 16,
    borderRadius: 10,
  },
  buttonScanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 32,
    paddingVertical: 20,
    borderRadius: 50,
    shadowColor: '#229BD8',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  textScanner: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#229BD8',
    marginLeft: 10,
  },
  circle: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 50,
  },
});
