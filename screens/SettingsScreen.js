import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView, TouchableOpacity, Switch } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Sections = [
  {
    header: 'Account & Security',
    items: [
      {  icon: 'user', label: 'Account Information', type: 'link' },
      {  icon: 'shield', label: 'Password & Security', type: 'link' },
      {  icon: 'lock', label: 'Profile Privacy', type: 'link' },
    ],
  },
  {
    header: 'Preferences',
    items: [
      {  label: 'Country', type: 'select', id: 'country' },
      {  label: 'Currency', type: 'select', id: 'currency'},
      {  label: 'Languange', type: 'select', id: 'language' },
    ],
  },
  {
    header: '',
    items: [
      {  label: 'Passanger Quick Pick', type: 'link' },
      {  label: 'Push Notification', type: 'link' },
      {  label: 'Newsletter & Promo Info', type: 'link' },
    ],
  },
  {
    header: '',
    items: [
      {  label: 'App Version', type: 'select', id: 'appversion' },
      {  label: 'Term & Conditions', type: 'link' },
      {  label: 'Privacy Policy', type: 'link' },
      {  label: 'About Us', type: 'link' },
    ],
  },
  {
    header: '',
    items: [
      {  label: 'Sign Out', type: 'link' }
    ],
  },
];

export default function Example() {
  const [form, setForm] = useState({
    appversion: 'v0.0.1',
    country: 'Indonesia',
    currency: 'Indonesian Rupiah',
    language: 'English',
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        {Sections.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, label, icon, type }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {}}>
                      <View style={styles.row}>
                        <FeatherIcon
                          color="#616161"
                          name={icon}
                          style={styles.rowIcon}
                          size={20}
                        />

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}
                        {(type === 'select' || type === 'link') && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    paddingTop: 10,
    fontSize: 12,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  rowValue: {
    fontSize: 14,
    color: '#616161',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
