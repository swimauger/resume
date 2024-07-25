import React from 'react';
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import process from 'node:process';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    fontSize: 11
  },
  title: {
    backgroundColor: '#333',
    padding: 5,
    marginVertical: 5,
    color: '#fff',
    fontSize: 14
  }
});

export function References() {
  return (
    <View>
      <Text style={styles.title}>References</Text>
      <View style={styles.content}>
        <Text>{process.env.TEMPUS_MANAGER_NAME}, Manager, Tempus AI</Text>
        <Link>{process.env.TEMPUS_MANAGER_EMAIL}</Link>
        <Text>{process.env.JKV_CAPITAL_BUSINESS_PARTNER_NAME}, Business Partner, JKV Capital</Text>
        <Text>{process.env.JKV_CAPITAL_BUSINESS_PARTNER_EMAIL}</Text>
        <Text>{process.env.TRADING_TECHNOLOGIES_MANAGER_NAME}, Manager, Trading Technologies</Text>
        <Link>{process.env.TRADING_TECHNOLOGIES_MANAGER_EMAIL}</Link>
        <Text>{process.env.GOOGLE_BROTHER_NAME}, Brother, Google</Text>
        <Link>{process.env.GOOGLE_BROTHER_EMAIL}</Link>
      </View>
    </View>
  )
}
