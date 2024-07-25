import React from 'react';
import fs from 'node:fs';
import process from 'node:process';
import { pipeline } from 'node:stream/promises';
import ReactPDF from '@react-pdf/renderer';

process.loadEnvFile();

import { Resume } from './resume.js';

await pipeline(
  await ReactPDF.renderToStream(<Resume/>),
  fs.createWriteStream('resume.pdf')
);
