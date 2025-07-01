import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Iklan,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  HomeIcon,
  HistoryIcon,
  MentorIcon,
  ProfileIcon,
} from '../../Assets';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAuth} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    const loadProfilePhoto = async () => {
      const auth = getAuth();
      const uid = auth.currentUser?.uid;
      if (uid) {
        const savedPhoto = await AsyncStorage.getItem(`profilePhoto-${uid}`);
        if (savedPhoto) {
          setProfilePhoto(savedPhoto);
        } else {
          setProfilePhoto(null);
        }
      }
    };

    const unsubscribe = navigation.addListener('focus', loadProfilePhoto);
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HOME</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={profilePhoto ? {uri: profilePhoto} : ProfileIcon}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Image source={Iklan} style={styles.banner} />
        <Text style={styles.sectionTitle}>
          Yuk, Pilih Cara Belajarmu Sendiri!
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.menuGrid}>
          <TouchableOpacity onPress={() => navigation.navigate('Paket1')}>
            <Image source={Icon1} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Paket2')}>
            <Image source={Icon2} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Paket3')}>
            <Image source={Icon3} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Paket4')}>
            <Image source={Icon4} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Paket5')}>
            <Image source={Icon5} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Paket6')}>
            <Image source={Icon6} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={HomeIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Riwayat')}>
          <Image source={HistoryIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mentor')}>
          <Image source={MentorIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={ProfileIcon} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EAEAEA',
    borderWidth: 1,
    borderColor: '#DADADA',
    resizeMode: 'contain',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 24,
    paddingHorizontal: 25,
    fontFamily: 'Poppins',
    marginTop: 10,
    marginBottom: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: '43%',
    aspectRatio: 1,
    borderRadius: 16,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    paddingHorizontal: 50,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navIcon: {
    width: 45,
    height: 45,
    tintColor: '#999',
  },
});
