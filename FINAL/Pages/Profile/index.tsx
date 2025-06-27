import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  HomeIcon,
  HistoryIcon,
  MentorIcon,
  ProfileIcon,
  Settings,
  Privasi,
  Logout,
  Help,
} from '../../Assets';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>PROFIL</Text>
      </View>

      <View style={styles.headerBackground}>
        <Image source={ProfileIcon} style={styles.profileImage} />
        <Text style={styles.profileName}>jonathan joestar</Text>
        <Text style={styles.profileId}>1050225122</Text>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Image source={Settings} style={styles.menuIcon} />
            <Text style={styles.menuText}>Pengaturan akun</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image source={Help} style={styles.menuIcon} />
            <Text style={styles.menuText}>Tentang & Bantuan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image source={Privasi} style={styles.menuIcon} />
            <Text style={styles.menuText}>Privasi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image source={Logout} style={styles.menuIcon} />
            <Text style={styles.menuText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={HomeIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Riwayat')}>
          <Image source={HistoryIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mentor')}>
          <Image source={MentorIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ProfileIcon} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  headerBackground: {
    flex: 1,
    backgroundColor: '#0B1B3F',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
    paddingTop: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
    textTransform: 'lowercase',
  },
  profileId: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
  },
  menuContainer: {
    width: '90%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10254D',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: '#ccc',
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    paddingHorizontal: 50,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#0B1B3F',
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
