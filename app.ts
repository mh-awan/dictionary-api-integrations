import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import { getUnifiedEntry } from './controllers/unifiedDictionaryIntegrationV1';

const app = express();
const port = 3000; // TODO: dev config

app.use(express.urlencoded({ extended: false }));

// TODO: endpoint in config
app.get('/api/v1/dictionaryEntries', getUnifiedEntry);

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});
