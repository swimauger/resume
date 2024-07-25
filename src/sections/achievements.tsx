import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import achievements from '../data/achievements.js';
import styles from './styles.js';

export function Achievements() {
  return (
    <View>
      <Text style={styles.contentTitle}>Achievements</Text>
      {achievements.map(achievement => (
        <Text style={styles.contentText}>{achievement}</Text>
      ))}
    </View>
  );
}
