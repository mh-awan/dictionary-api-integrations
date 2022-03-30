import { IFreeDictionaryData, IFreeDictionaryLicense, IFreeDictionaryMeaning, IFreeDictionaryPhonetic } from "./freeDictionary";
import { IOxfordDictionaryData, IOxfordDictionaryLexicalEntry, IOxfordDictionaryMetadata, IOxfordDictionaryPronunciation, OxfordDictionaryLanguageEnum } from "./oxfordDictionary";

enum IntegrationNameEnum {
  FreeDictionary = 'Free Dictionary API',
  OxfordDictionary = 'Oxford Dictionary API'
};

export interface IUnifiedDictionarySimplifiedEntry {
  integrationCount?: number;
  integrations?: IntegrationNameEnum;
  freeDictionaryResponse: IFreeDictionaryData[];
  oxfordDictionaryResponse: IOxfordDictionaryData;
}

export interface IUnifiedDictionaryMergedEntry {
  integrationCount?: number;
  integrations?: IntegrationNameEnum;
  wordId?: IWordId;
  definitions: IDefinition;
  pronunciations: IPronunciation;
  language?: ILanguage;
  metadata: IMetadata;
  wordType?: IWordType;
  license?: ILicense;
}

interface IWordId {
  oxfordDictionaryWordId: string;
}

interface IPronunciation {
  freeDictionaryPronunciation: IFreeDictionaryPhonetic[];
  oxfordDictionaryPronunciation: IOxfordDictionaryPronunciation[];
}

interface IDefinition {
  freeDictionaryDefinitions: IFreeDictionaryMeaning[];
  oxfordDictionaryDefinitions: IOxfordDictionaryLexicalEntry[];
}

interface IMetadata {
  oxfordDictionaryMetadata: IOxfordDictionaryMetadata;
}

interface IHomographNumber {
  oxfordDictionaryHomographNumber: number;
}

interface ILanguage {
  oxfordDictionaryLanguage: OxfordDictionaryLanguageEnum | string;
}

interface IWordType {
  oxfordDictionaryWordType: string;
}

interface ILicense {
  freeDictionaryLicense: IFreeDictionaryLicense;
}
