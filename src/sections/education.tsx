import React from 'react';
import { Text, View } from '@react-pdf/renderer';

export function Education() {
  return (
    <View>
      <Text style={{ backgroundColor: '#333', padding: 5, color: '#fff', marginVertical: 5, fontSize: 14 }}>Education</Text>
      <Text style={{ fontSize: 12 }}>Purdue University School of Science, IUPUI</Text>
      <Text style={{ fontSize: 12 }}>Bachelor of Arts in Computer Science, 2017-2021</Text>
    </View>
  );
}
