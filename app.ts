import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import { getUnifiedDictionaryEntrySimplified } from './controllers/unifiedDictionary';

const app = express();
const port = 3000; // TODO: dev config
const baseAPIV1Path = '/api/v1';

app.use(express.urlencoded({ extended: false }));

// TODO: endpoint in config
app.get(`${baseAPIV1Path}/unifiedDictionaryEntrySimplified`, getUnifiedDictionaryEntrySimplified);

app.get(`${baseAPIV1Path}/unifiedDictionaryEntrySimplified`, getUnifiedDictionaryEntrySimplified);

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});
