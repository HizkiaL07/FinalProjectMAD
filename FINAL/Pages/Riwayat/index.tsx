import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {HomeIcon, HistoryIcon, MentorIcon, ProfileIcon} from '../../Assets';
import Gap from '../../Components/Atoms/Gap';

const Riwayat = () => {
  const [selectedTab, setSelectedTab] = useState<'aktif' | 'selesai'>('aktif');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAKET SAYA</Text>
      <Gap height={24} />

      {/* Card abu-abu */}
      <View style={styles.card}>
        {/* Tab Toggle: dipindahkan ke bagian atas dalam card */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabItem,
              selectedTab === 'aktif' && styles.tabItemActive,
            ]}
            onPress={() => setSelectedTab('aktif')}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'aktif' && styles.tabTextActive,
              ]}>
              Sedang Berjalan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabItem,
              selectedTab === 'selesai' && styles.tabItemActive,
            ]}
            onPress={() => setSelectedTab('selesai')}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'selesai' && styles.tabTextActive,
              ]}>
              Berakhir
            </Text>
          </TouchableOpacity>
        </View>

        <Gap height={40} />
        <Text style={styles.emptyText}>PAKET BELUM TERSEDIA</Text>
      </View>
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

export default Riwayat;

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
  card: {
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    paddingBottom: 380,
    justifyContent: 'center', // Ini yang penting
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    padding: 4,
  },
  tabItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  tabItemActive: {
    backgroundColor: '#0B1F66',
  },
  tabText: {
    color: '#555',
    fontSize: 12,
  },
  tabTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    marginTop: 170,
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
});
