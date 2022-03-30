export interface IFreeDictionaryResponse {
  status: number;
  data?: IFreeDictionaryData[];
  error?: Error;
}

interface IFreeDictionaryData {
  word: string,
  phonetic?: string,
  phonetics: IFreeDictionaryPhonetic[],
  meanings: IFreeDictionaryMeaning[],
  license: IFreeDictionaryLicense,
  sourceUrls: string[]
}

interface IFreeDictionaryPhonetic {
  text: string,
  audio: string,
  sourceUrl?: string,
  license?: IFreeDictionaryLicense
}

interface IFreeDictionaryMeaning {
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

interface IFreeDictionaryLicense {
  name: string,
  url: string,
}
