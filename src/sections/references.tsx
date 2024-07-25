import React from 'react';
import { Text, View } from '@react-pdf/renderer';

import references from '../data/references.js';
import styles from './styles.js';
import { Redaction } from './redaction.js';

export function References() {
  return (
    <View>
      <Text style={styles.contentTitle}>References</Text>
      <View style={styles.contentText}>
        {references.map(reference => [
          <Text>
            {reference.name ?? <Redaction characters={20}/>}, {reference.relation}, {reference.company}
          </Text>,
          <Text>
            {reference.email ?? <Redaction characters={20}/>}
          </Text>
        ])}
      </View>
    </View>
  )
}
