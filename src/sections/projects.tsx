import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import projects from '../data/projects.js';
import styles from './styles.js';

export function Projects() {
  return (
    <View>
      <Text style={styles.contentTitle}>Projects</Text>
      {projects.map(project => [
        <Text style={styles.contentSubtitle}>{project.title}</Text>,
        <Text style={styles.contentText}>{project.description}</Text>
      ])}
    </View>
  );
}
