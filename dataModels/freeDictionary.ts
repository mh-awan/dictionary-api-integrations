export interface IFreeDictionaryResponse {
  status: number;
  data?: IFreeDictionaryData[];
  error?: Error;
}

export interface IFreeDictionaryData {
  word: string,
  phonetic?: string,
  phonetics: IFreeDictionaryPhonetic[],
  meanings: IFreeDictionaryMeaning[],
  license: IFreeDictionaryLicense,
  sourceUrls: string[]
}

export interface IFreeDictionaryPhonetic {
  text: string,
  audio: string,
  sourceUrl?: string,
  license?: IFreeDictionaryLicense
}

export interface IFreeDictionaryMeaning {
  partOfSpeech: string,
  definitions: IFreeDictionaryDefinition[],
  synonyms: string[],
  antonyms: string[]
}

interface IFreeDictionaryDefinition {
  definition: string,
  synonyms: string[],
  antonyms: string[],
  example?: string
}

export interface IFreeDictionaryLicense {
  name: string,
  url: string,
}
