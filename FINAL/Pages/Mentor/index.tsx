import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  HomeIcon,
  HistoryIcon,
  MentorIcon,
  ProfileIcon,
  ARLINO,
  DANIEL,
  DIAN,
  GHEN,
  JEJE,
} from '../../Assets';
import Gap from '../../Components/Atoms/Gap';

const Mentor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MENTOR YANG TERSEDIA</Text>
      <Gap height={24} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.menuGrid}>
          <TouchableOpacity>
            <Image source={ARLINO} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={DANIEL} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={DIAN} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={GHEN} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={JEJE} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={HomeIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={HistoryIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={MentorIcon} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ProfileIcon} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Mentor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
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
    width: '115%',
  },
  navIcon: {
    width: 45,
    height: 45,
    tintColor: '#999',
  },
  scrollContainer: {
    paddingHorizontal: 70,
    paddingBottom: 100,
  },
  menuGrid: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  menuIcon: {
    borderRadius: 10,
    marginBottom: 5,
    resizeMode: 'cover',
  },
});
