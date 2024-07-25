import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import styles from './styles.js';

export function Skills() {
  return (
    <View>
      <Text style={styles.contentTitle}>Skills</Text>
      <Text style={styles.contentSubtitle}>Languages</Text>
      <Text style={styles.contentText}>TypeScript, JavaScript, Java, Python, Kotlin, C++, C, PHP, C#</Text>
      <Text style={styles.contentSubtitle}>Frameworks</Text>
      <Text style={styles.contentText}>AngularJS, React, Electron, Express, Backbone, Ionic, Gatsby</Text>
      <Text style={styles.contentSubtitle}>Utilities</Text>
      <Text style={styles.contentText}>Git, Firebase, GraphQL, ChartIQ</Text>
      <Text style={styles.contentSubtitle}>Project Management</Text>
      <Text style={styles.contentText}>Agile, Waterfall, Kanban, Jira</Text>
    </View>
  );
}
