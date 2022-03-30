export interface IOxfordDictionaryResponse {
  status: number;
  data?: IOxfordDictionaryData;
  error?: Error;
}

export interface IOxfordDictionaryData {
  id: string;
  metadata: IOxfordDictionaryMetadata;
  results: IOxfordDictionaryResult[];
  word: string;
}

interface IOxfordDictionaryResult {
  id: string;
  language: OxfordDictionaryLanguageEnum | string; 
  lexicalEntries: IOxfordDictionaryLexicalEntry[];
  type: string;
  word: string;
}

export interface IOxfordDictionaryLexicalEntry {
  entries: IOxfordDictionaryEntry[];
  language: OxfordDictionaryLanguageEnum | string;
  text: string;
  lexicalCategory: IOxfordDictionaryLexicalCategory;
}

interface IOxfordDictionaryEntry {
  homographNumber: number,
  pronunciations: IOxfordDictionaryPronunciation[];
}

export interface IOxfordDictionaryPronunciation {
  audioFile: string;
  dialects: OxfordDictionaryDialectEnum[] | string[];
  phoneticNotation: OxfordDictionaryPhoneticNotationEnum | string;
  phoneticSpelling: OxfordDictionaryPhoneticSpellingEnum | string;
}

interface IOxfordDictionaryLexicalCategory {
  id: string;
  text: string;
}

export interface IOxfordDictionaryMetadata {
  operation: OxfordDictionaryOperationEnum | string;
  provider: OxfordDictionaryProviderEnum | string;
  schema: OxfordDictionarySchemaEnum | string;
}

enum OxfordDictionaryOperationEnum { }

enum OxfordDictionaryProviderEnum { }

enum OxfordDictionarySchemaEnum { }

enum OxfordDictionaryPhoneticNotationEnum { }

enum OxfordDictionaryPhoneticSpellingEnum { }

enum OxfordDictionaryDialectEnum { }

export enum OxfordDictionaryLanguageEnum { }
