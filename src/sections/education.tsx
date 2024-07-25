import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import styles from './styles.js';

export function Education() {
  return (
    <View>
      <Text style={styles.contentTitle}>Education</Text>
      <Text style={styles.contentSubtitle}>Purdue University School of Science, IUPUI</Text>
      <Text style={styles.contentSubtitle}>Bachelor of Arts in Computer Science, 2017-2021</Text>
    </View>
  );
}
