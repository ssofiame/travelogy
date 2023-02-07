import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import Swiper from 'react-native-swiper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const HomeScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor='#04555C'/>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#04555C">
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/location1.jpg')}
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/location2.jpg')}
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/location3.jpg')}
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="attractions" size={25} color="#04555C" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Attractions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="museum" size={25} color="#04555C" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Museum</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto
              name="ticket"
              size={25}
              color="#04555C"
            />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="direction-sign" size={25} color="#04555C" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Tours</Text>
        </TouchableOpacity>
      </View>
      
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="hotel-alt" size={25} color="#04555C" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Hotels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="holiday-village" size={25} color="#04555C" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Holiday Stays</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="car" size={20} color="#04555C" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Transports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="angle-down" size={20} color="#04555C" />
          </View>
          <Text style={[styles.categoryBtnTxt]}>Show More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/map/kbs.jpg')}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Kebun binatang surabaya</Text>
            <StarRating ratings={3} reviews={99} />
            <Text style={styles.cardDetails}>
            Merupakan salah satu kebun binatang yang populer di Indonesia dan terletak di Surabaya.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/map/monumentugupahlawan.jpg')}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Monumen Tugu Pahlawan</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Merupakan monumen untuk mempelajari dan memperdalam peristiwa Sepuluh November 1945.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/map/monumenkapalselam.jpg')}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Monumen Kapal Selam</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Merupakan sebuah monumen yang dibangun menggunakan kapal selam asli.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#dbfffc' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    fontSize: 12,
    marginTop: 5,
    color: '#04555C',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});