import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import experiences from '../data/experiences.js';
import styles from './styles.js';

export function Experiences() {
  return (
    <View>
      <Text style={styles.contentTitle}>Experience</Text>
      <View style={{ paddingHorizontal: '5px' }}>
        {experiences.map(experience => [
            <View style={styles.contentSubtitle}>
              <Text>{experience.company} &nbsp;/&nbsp; {experience.role}</Text>
            </View>,
            <View style={styles.contentText}>
              {experience.ventures.map(venture => (
                <Text>&bull; {venture}</Text>
              ))}
            </View>
        ])}
      </View>
    </View>
  );
}
