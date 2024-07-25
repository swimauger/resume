import React from 'react';
import { Text, StyleSheet, View, Link } from '@react-pdf/renderer';
import process from 'node:process';
import { Redaction } from './redaction.js';

const styles = StyleSheet.create({
  careerContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    position: 'relative',
    top: -15
  },
  career: {
    color: '#000',
    fontSize: 18
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    height: '15%',
    justifyContent: 'center'
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    justifyContent: 'center'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    verticalAlign: 'sub'
  },
  titleContainer: {
    border: '1px solid #fff',
    width: '50%',
    height: '40%'
  }
});

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mark Auger</Text>
      </View>
      <View style={styles.careerContainer}>
        <Text style={styles.career}>Software Engineer</Text>
      </View>
      <View style={styles.links}>
        <Text style={styles.link}>
          {process.env.PERSONAL_ADDRESS ?? <Redaction characters={20} color="#fff"/>}
        </Text>
        <Text>&nbsp;|&nbsp;</Text>
        <Text style={styles.link}>
          {process.env.PERSONAL_PHONE ?? <Redaction characters={20} color="#fff"/>}
        </Text>
        <Text>&nbsp;|&nbsp;</Text>
        <Link style={styles.link}>
          {process.env.PERSONAL_EMAIL ?? <Redaction characters={20} color="#fff"/>}
        </Link>
        <Text>&nbsp;|&nbsp;</Text>
        <Link style={styles.link}>
          {process.env.PERSONAL_WEBSITE ?? <Redaction characters={20} color="#fff"/>}
        </Link>
      </View>
    </View>
  );
}
