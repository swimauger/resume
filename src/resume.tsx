import React from 'react';
import { Document, Page, View } from '@react-pdf/renderer';

import { Header } from './sections/header.js';
import { Experiences } from './sections/experiences.js';
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
            <Experiences/>
            <References/>
          </View>
          <View style={{ width: '30%' }}>
            <Education/>
            <Skills/>
            <Projects/>
            <Achievements/>
          </View>
        </View>
      </Page>
    </Document>
  );
}
