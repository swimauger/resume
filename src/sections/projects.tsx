import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';

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
    backgroundColor: '#333',
    padding: 5,
    color: '#fff',
    fontSize: 14,
    marginVertical: 5
  }
});

export function Projects() {
  return (
    <View>
      <Text style={styles.title}>Projects</Text>
      <View style={styles.content}>
        <Text>Real Estate Analytics Web App</Text>
        <Text>
          Developed a desktop app for JKV Capital, LLC. to analyze real time market activity from real estate data scraped from the web. Built with TypeScript, AngularJS, Firebase, Electron, GraphQL, Java, GitHub Projects, Agile, and Git.
        </Text>
        <Text>AI Driven Stat Tracking App for Basketball</Text>
        <Text>
          Developed an app for Chicago Sport and Social, LLC. to track basketball player scoring using only a mobile phone's camera and trained object detection/motion tracking models. Built with React, TensorFlow, Python, YOLOv3, Agile, and Git.
        </Text>
        <Text>TypeScript Compiler Hooks Library</Text>
        <Text>
          Over 5000 weekly downloads and featured in numerous developer libraries, a framework for building scripts to execute on different TypeScript compilation lifecycles.
        </Text>
        <Text>DLNA Media Server Library</Text>
        <Text>
          An implementation of DLNA standard protocols from scratch for media streaming to devices like smart TVs over LAN. Built with TypeScript, NodeJS, and Git.
        </Text>
      </View>
    </View>
  );
}
