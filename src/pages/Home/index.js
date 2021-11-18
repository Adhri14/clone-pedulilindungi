import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IlNotif from '../../assets/image/notif.svg';
import IlMore from '../../assets/image/more.svg';
import IlArrow from '../../assets/image/arrow.svg';
import IlVerified from '../../assets/image/verified.svg';
import IlArrowSmall from '../../assets/image/arrow-small.svg';
import IlQR from '../../assets/image/il-qr.svg';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#229BD8" />
      <View style={styles.header}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/image/person.jpg')}
            style={styles.imageProfile}
          />
          <Text style={styles.name}>Hi, Adhri</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.circle}>
            <IlNotif />
          </View>
          <View style={styles.circle}>
            <IlMore />
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.content}>
          <Text style={styles.title}>Sertifikat Vaksin</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <Pressable
                onPress={() => navigation.navigate('Download')}
                style={styles.certificate}>
                <Text style={styles.label}>Dosis Pertama</Text>
                <Image
                  source={require('../../assets/image/sertifikat.jpeg')}
                  style={styles.imageCertificate}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Download')}
                style={styles.certificate}>
                <Text style={styles.label}>Dosis Kedua</Text>
                <Image
                  source={require('../../assets/image/sertifikat.jpeg')}
                  style={styles.imageCertificate}
                />
              </Pressable>
              <View style={{marginRight: 16}} />
            </View>
          </ScrollView>
          <Text style={styles.title}>Hasil Tes Covid-19</Text>
          <View style={styles.card}>
            <View>
              <View style={styles.row}>
                <Text style={styles.titleCard}>PCR </Text>
                <IlVerified />
              </View>
              <Text style={styles.subtitleCard}>Berlaku 15 November 2021</Text>
            </View>
            <Image
              source={require('../../assets/image/check.png')}
              style={styles.check}
            />
            <IlArrow />
          </View>
          <View style={styles.card}>
            <View>
              <View style={styles.row}>
                <Text style={styles.titleCard}>Antigen </Text>
                <IlVerified />
              </View>
              <Text style={styles.subtitleCard}>Berlaku 15 November 2021</Text>
            </View>
            <Image
              source={require('../../assets/image/check.png')}
              style={styles.check}
            />
            <IlArrow />
          </View>
          <View style={styles.card}>
            <View>
              <View style={styles.row}>
                <Text style={styles.titleCard}>Antigen </Text>
                <IlVerified />
              </View>
              <Text style={styles.subtitleCard}>Berlaku 15 November 2021</Text>
            </View>
            <Image
              source={require('../../assets/image/check.png')}
              style={styles.check}
            />
            <IlArrow />
          </View>
        </View>
        <View style={styles.bgWhite}>
          <View style={styles.recent}>
            <Text style={styles.titleRecent}>Riwayat Check-in</Text>
            <View style={styles.row}>
              <Text style={styles.subtitleRecent}>Riwayat Perjalanan</Text>
              <IlArrowSmall />
            </View>
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>Sallo Mall</Text>
                <Text style={styles.subtitleCardCheckOut}>Masuk 10:00 AM</Text>
              </View>
              <Pressable style={styles.buttonOutline}>
                <Text style={styles.textButton}>CHECKOUT</Text>
              </Pressable>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>Bioskop Dakota</Text>
                <Text style={styles.subtitleCardCheckOut}>
                  03:00 PM - 04:50 PM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>Mall Matahari</Text>
                <Text style={styles.subtitleCardCheckOut}>
                  08:39 PM - 09:30
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>Trans</Text>
                <Text style={styles.subtitleCardCheckOut}>
                  08:00 PM - 10:01 PM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>
                  Bandara Sultan Hasanuddin
                </Text>
                <Text style={styles.subtitleCardCheckOut}>
                  06:00 AM - 07:00 AM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>
                  Bandara Sultan Hasanuddin
                </Text>
                <Text style={styles.subtitleCardCheckOut}>
                  06:00 AM - 07:00 AM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>
                  Bandara Sultan Hasanuddin
                </Text>
                <Text style={styles.subtitleCardCheckOut}>
                  06:00 AM - 07:00 AM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>
                  Bandara Sultan Hasanuddin
                </Text>
                <Text style={styles.subtitleCardCheckOut}>
                  06:00 AM - 07:00 AM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>
                  Bandara Sultan Hasanuddin
                </Text>
                <Text style={styles.subtitleCardCheckOut}>
                  06:00 AM - 07:00 AM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <View style={{marginBottom: 16}}>
            <View style={styles.cardCheckOut}>
              <View>
                <Text style={styles.titleCardCheckOut}>
                  Bandara Sultan Hasanuddin
                </Text>
                <Text style={styles.subtitleCardCheckOut}>
                  06:00 AM - 07:00 AM
                </Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          paddingVertical: 50,
        }}>
        <Pressable style={styles.buttonScanner}>
          <IlQR />
          <Text style={styles.textScanner}>SCAN QR CODE</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {backgroundColor: '#229BD8', flex: 1},
  imageProfile: {width: 50, height: 50, borderRadius: 25},
  thumb: {justifyContent: 'center', alignItems: 'center'},
  name: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'space-between',
    backgroundColor: '#229BD8',
  },
  circle: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 25,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginLeft: 16,
    marginTop: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    marginBottom: 10,
  },
  certificate: {marginLeft: 16},
  imageCertificate: {width: 223, height: 140, borderRadius: 10},
  card: {
    paddingVertical: 23,
    paddingLeft: 18,
    paddingRight: 21,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  check: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    right: 60,
  },
  titleCard: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#202020',
    marginRight: 10,
  },
  subtitleCard: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: 6,
    color: '#023954',
  },
  bgWhite: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    marginTop: 30,
    paddingBottom: 100,
  },
  recent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  titleRecent: {fontSize: 18, fontFamily: 'Inter-SemiBold', color: '#202020'},
  subtitleRecent: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: 'rgba(2, 57, 84, 0.51)',
    marginRight: 4,
  },
  cardCheckOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  titleCardCheckOut: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#202020',
  },
  subtitleCardCheckOut: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#023954',
  },
  buttonOutline: {
    paddingHorizontal: 13,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#229BD8',
    borderRadius: 20,
  },
  textButton: {fontFamily: 'Inter-SemiBold', fontSize: 13, color: '#229BD8'},
  line: {height: 1, backgroundColor: '#E8E8E8'},
  buttonScanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#229BD8',
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
    color: '#fff',
    marginLeft: 10,
  },
});
