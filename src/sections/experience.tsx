import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  content: {
    fontSize: 11,
    paddingHorizontal: 10
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    marginTop: 5,
    paddingHorizontal: 5
  },
  title: {
    backgroundColor: '#333',
    borderRight: '1px solid #444',
    padding: 5,
    color: '#fff',
    fontSize: 14
  }
});

export function Experience() {
  return (
    <View>
      <Text style={styles.title}>Experience</Text>

      <View style={styles.subtitle}>
        <Text>Tempus AI, Inc.</Text>
        <Text>&nbsp;/&nbsp;</Text>
        <Text>Software Engineer 2/22 ~</Text>
      </View>
      <View style={styles.content}>
        <Text>&bull; TypeScript, React, NestJS, Python, C++, Java, MySQL, GCP, AWS, Agile,
        Terraform, Concourse, Jenkins, Jest, Playwright</Text>
        <Text>&bull; Developed the reporting system of three of Tempus' first new assays in over three years</Text>
        <Text>&bull; Marked as a SME (Subject Matter Expert) for the development of the reporting system for the first FDA approved assay by Tempus</Text>
        <Text>&bull; Automated numerous workflows for variant science, pathology, and
        clinical trials.</Text>
        <Text>&bull; Enhanced clinical report load times, saving scientists ~15 minutes daily via C++
        WebKit bindings and caching</Text>
        <Text>&bull; Developed a pipeline automating notes with a React frontend and
        NestJS backend to expedite report preparations.</Text>
        <Text>&bull; Integrated Java services from OncoKB to augment Tempus' FDA approved treatment database.</Text>
        <Text>&bull; Managed and supported releases of new features and bug fixes</Text>
        <Text>&bull; Provided on-call support for internal users of our systems to ensure
        data quality.</Text>
        <Text>&bull; Implemented a version control system for company datasets</Text>
        <Text>&bull; Engineered a dataset for incredibly dynamic genetic statement generation from vendors like MD Anderson.</Text>
        <Text>*Assays at Tempus are typically used to determine the diagnosis and treatments for a cancer patient</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>Trading Technologies, Inc.</Text>
        <Text>&nbsp;/&nbsp;</Text>
        <Text>Software Engineer 6/21 - 2/22</Text>
      </View>
      <View style={styles.content}>
        <Text>&bull; JavaScript, Backbone, React, Python, ESLint, Jest, ChartIQ, Jenkins, JIRA, Agile,
        Git</Text>
        <Text>&bull; Worked closely with Japanese translators to setup internationalization for the Analytics web team</Text>
        <Text>&bull; Developed a VS Code Extension to quickly localize text from previously localized content</Text>
        <Text>&bull; Modernized much of the codebase by helping migrate from BackboneJS to React, Vagrant to Docker, and Jenkins CI to Github Actions</Text>
        <Text>&bull; Developed end-to-end testing for internationalization</Text>
        <Text>&bull; Developed a Debugger widget for clients and developers to solve issues.</Text>
        <Text>&bull; Developed an example widget to guide developers in creating new widgets</Text>
      </View>
    </View>
  );
}
