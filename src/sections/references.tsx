import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import references from '../data/references.js';
import styles from './styles.js';
import { Redaction } from './redaction.js';

export function References() {
  return (
    <View>
      <Text style={styles.contentTitle}>References</Text>
      {references.map(reference => [
        <Text style={styles.contentBoldText}>
          {reference.name ?? <Redaction characters={20}/>}, {reference.relation}, {reference.company}
        </Text>,
        <Text style={styles.contentText}>
          {reference.email ?? <Redaction characters={20}/>}
        </Text>
      ])}
    </View>
  )
}
