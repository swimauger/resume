import React from 'react';
import { Text } from '@react-pdf/renderer';

export interface RedactionProps {
  characters: number;
  color?: string;
}

export function Redaction(props: RedactionProps) {
  return (
    <Text style={{ backgroundColor: props.color ?? '#000' }}>
      {'\s'.repeat(props.characters)}
    </Text>
  );
}
