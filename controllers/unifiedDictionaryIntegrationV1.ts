import { Request, Response } from "express";
import { IFreeDictionaryResponse } from "../dataModels/freeDictionary";
import { IOxfordDictionaryResponse } from "../dataModels/oxfordDictionary";
import { getfreeDictionaryEntryByWord } from "../services/integrations/freeDictionaryAPI";
import { getOxfordDictionaryEntryByWord } from "../services/integrations/oxfordDictionaryAPI";

// handles HTTP GET request for a unified dictionary entry
export const getUnifiedEntry = async (request: Request, response: Response) => {
  const word = request.query.word;
  let freeDictionaryEntry: IFreeDictionaryResponse;
  let oxfordDictionaryEntry: IOxfordDictionaryResponse;

  try {
    freeDictionaryEntry = await getfreeDictionaryEntryByWord(word) as IFreeDictionaryResponse;
  } catch (error) {
    freeDictionaryEntry = {
      status: 204,
      error: Error(error)
    };
  }

  try {
    oxfordDictionaryEntry = await getOxfordDictionaryEntryByWord(word) as IOxfordDictionaryResponse;
  } catch (error) {
    oxfordDictionaryEntry = {
      status: 204,
      error: Error(error)
    };
  }

  // TODO: Implement merging algorithm, extract out and put in utils
  const unifiedDictionaryEntry = Object.assign({}, freeDictionaryEntry.data, oxfordDictionaryEntry.data)

  response.json(unifiedDictionaryEntry);
};
