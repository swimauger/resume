import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import process from 'node:process';

import { Redaction } from './redaction.js';
import styles from './styles.js';

export function Header() {
  return (
    <View style={styles.headerBackground}>
      <Text style={styles.headerTitle}>Mark Auger</Text>
      <Text style={styles.headerSubtitle}>Software Engineer</Text>
      <View style={styles.headerLinks}>
        <Text>
          {process.env.PERSONAL_ADDRESS ?? <Redaction characters={20} color="#fff"/>}
        </Text>
        <Text>&nbsp;|&nbsp;</Text>
        <Text>
          {process.env.PERSONAL_PHONE ?? <Redaction characters={20} color="#fff"/>}
        </Text>
        <Text>&nbsp;|&nbsp;</Text>
        <Link style={styles.headerLink}>
          {process.env.PERSONAL_EMAIL ?? <Redaction characters={20} color="#fff"/>}
        </Link>
        <Text>&nbsp;|&nbsp;</Text>
        <Link style={styles.headerLink}>
          {process.env.PERSONAL_WEBSITE ?? <Redaction characters={20} color="#fff"/>}
        </Link>
      </View>
    </View>
  );
}
