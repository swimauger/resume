import React from 'react';
import fs from 'node:fs';
import process from 'node:process';
import ReactPDF from '@react-pdf/renderer';

if (fs.existsSync('.env')) process.loadEnvFile();

const { Resume } = await import('./resume.js');

await ReactPDF.renderToFile(<Resume/>, 'resume.pdf');
