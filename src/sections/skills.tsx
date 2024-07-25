import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  content: {
    fontSize: 11
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    marginTop: 5
  },
  title: {
    fontSize: 14,
    backgroundColor: '#333',
    padding: 5,
    color: '#fff',
    marginBottom: 5
  }
});

export function Skills() {
  return (
    <View>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.content}>
        <Text>Languages</Text>
        <Text>TypeScript, JavaScript, Java,</Text>
        <Text>Python, Kotlin, C++, C, PHP, C#</Text>
        <Text>Frameworks</Text>
        <Text>AngularJS, React, Electron,</Text>
        <Text>Express, Backbone, Ionic, Gatsby</Text>
        <Text>Utilities</Text>
        <Text>Git, Firebase, GraphQL, ChartIQ</Text>
        <Text>Project Management</Text>
        <Text>Agile, Waterfall, Kanban, Jira</Text>
      </View>
    </View>
  );
}
