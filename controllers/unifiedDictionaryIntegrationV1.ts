import { Request, Response } from "express";
import { IUnifiedDictionaryEntry } from "../dataModels";
import { getEntryByWord } from "../services/integrations/freeDictionaryAPI";

// handles HTTP GET request for a unified dictionary entry
export const getUnifiedEntry = async (request: Request, response: Response) => {
  const entry = await getEntryByWord('test');

  response.json(entry.data);
};
