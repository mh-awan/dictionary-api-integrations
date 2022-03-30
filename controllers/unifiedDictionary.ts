import { Request, Response } from "express";
import { IUnifiedDictionaryMergedEntry, IUnifiedDictionarySimplifiedEntry } from "../dataModels/unifiedDictionary";
import { IFreeDictionaryResponse } from "../dataModels/freeDictionary";
import { IOxfordDictionaryResponse } from "../dataModels/oxfordDictionary";
import { getfreeDictionaryEntryByWord } from "../services/integrations/freeDictionaryAPI";
import { getOxfordDictionaryEntryByWord } from "../services/integrations/oxfordDictionaryAPI";

// handles HTTP GET request for a unified dictionary entry
export const getUnifiedDictionaryEntrySimplified = async (request: Request, response: Response) => {
  const word = request.query.word;
  let freeDictionaryEntry: IFreeDictionaryResponse;
  let oxfordDictionaryEntry: IOxfordDictionaryResponse;

  try {
    freeDictionaryEntry = await getfreeDictionaryEntryByWord(word) as IFreeDictionaryResponse;
  } catch (error) {
    return response.status(503).json({ error: Error(error) })
  }

  try {
    oxfordDictionaryEntry = await getOxfordDictionaryEntryByWord(word) as IOxfordDictionaryResponse;
  } catch (error) {
    return response.status(503).json({ error: Error(error) })
  }

  // TODO: Implement merging algorithm, extract out and put in utils
  const unifiedDictionaryEntry: IUnifiedDictionarySimplifiedEntry = {
    freeDictionaryResponse: freeDictionaryEntry.data,
    oxfordDictionaryResponse: oxfordDictionaryEntry.data
  }

  response.json(unifiedDictionaryEntry);
};

// handles HTTP GET request for a unified dictionary entry
export const getUnifiedDictionaryEntryMerged = async (request: Request, response: Response) => {
  const word = request.query.word;
  let freeDictionaryEntry: IFreeDictionaryResponse;
  let oxfordDictionaryEntry: IOxfordDictionaryResponse;

  try {
    freeDictionaryEntry = await getfreeDictionaryEntryByWord(word) as IFreeDictionaryResponse;
  } catch (error) {
    return response.status(503).json({ error: Error(error) })
  }

  try {
    oxfordDictionaryEntry = await getOxfordDictionaryEntryByWord(word) as IOxfordDictionaryResponse;
  } catch (error) {
    return response.status(503).json({ error: Error(error) })
  }

  const freeDictionaryPhonetics = freeDictionaryEntry.data.flatMap(entry => entry.phonetics);
  const freeDictionaryDefinitions = freeDictionaryEntry.data.flatMap(entry => entry.meanings);
  const oxfordDictionaryPronunciations = oxfordDictionaryEntry.data.results.flatMap(result =>
    result.lexicalEntries.flatMap(lexicalEntry => lexicalEntry.entries.flatMap(entry => entry.pronunciations))
  )
  const oxfordDictionaryDefinitions = oxfordDictionaryEntry.data.results.flatMap(result => result.lexicalEntries)

  // TODO: Implement merging algorithm, extract out and put in utils
  const unifiedDictionaryEntry: IUnifiedDictionaryMergedEntry = {
    pronunciations: {
      freeDictionaryPronunciation: freeDictionaryPhonetics,
      oxfordDictionaryPronunciation: oxfordDictionaryPronunciations
    },
    definitions: {
      freeDictionaryDefinitions: freeDictionaryDefinitions,
      oxfordDictionaryDefinitions: oxfordDictionaryDefinitions
    },
    metadata: {
      oxfordDictionaryMetadata: oxfordDictionaryEntry.data.metadata
    },
  }

  response.json(unifiedDictionaryEntry);
};
