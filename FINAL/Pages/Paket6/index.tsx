import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Midnight, ArrowBack} from '../../Assets';

const DetailPaketScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={ArrowBack} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Paket</Text>
        <View style={styles.DetailPaket} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={Midnight} style={styles.image} />

        <Text style={styles.title}>Mentor +1h</Text>
        <Text style={styles.label}>Harga:</Text>
        <Text style={styles.price}>Rp120.000</Text>

        <Text style={styles.label}>Deskripsi:</Text>
        <Text style={styles.description}>
          Anak malam mana suaranya? 🌙 Bua kamu yang paling fokus belajar saat
          dunia udah mulai sepi, paket ini jawabannya! Belajar bareng mentor di
          waktu-waktu tenang biar makin nyantol dan gak keganggu.
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerPrice}>
          Harga: <Text style={styles.footerPriceValue}>Rp120.000</Text>
        </Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Buat Pesanan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPaketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#d3d3d3',
    justifyContent: 'space-between',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 30,
  },
  contentContainer: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    borderRadius: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 19,
  },
  price: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 22,
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerPrice: {
    fontSize: 16,
  },
  footerPriceValue: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  orderButton: {
    backgroundColor: '#3B71F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  DetailPaket: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
    marginRight: 30,
  },
});
