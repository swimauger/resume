import React from 'react';
import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';

import { Header } from './sections/header.js';
import { Experience } from './sections/experience.js';
import { Projects } from './sections/projects.js';
import { Education } from './sections/education.js';
import { Skills } from './sections/skills.js';
import { Achievements } from './sections/achievements.js';
import { References } from './sections/references.js';

export function Resume() {
  return (
    <Document>
      <Page size="A4">
        <Header/>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '70%' }}>
            <Experience/>
            <Projects/>
            <Education/>
          </View>
          <View style={{ width: '30%' }}>
            <Skills/>
            <Achievements/>
            <References/>
          </View>
        </View>
      </Page>
    </Document>
  );
}
