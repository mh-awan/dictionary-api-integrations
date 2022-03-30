import axios from "axios";
import { IOxfordDictionaryResponse } from "../../dataModels/oxfordDictionary";

// TODO: Add to evn vars
const app_id = "988f1808";
const app_key = "45be7b77608e3acd0074643209870275";
const fields = "pronunciations";
const strictMatch = "false";
const basePath = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/'

export const getOxfordDictionaryEntryByWord = async (word: any): Promise<IOxfordDictionaryResponse | Error> => {
  try {
    const response = await axios.get(
      basePath + word + '?fields=' + fields + '&strictMatch=' + strictMatch,
      {
        headers: {
          'app_id': app_id,
          'app_key': app_key
        }
      }
    )

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Error(error.message);
    } else {
      return Error('An unexpected error occurred');
    }
  }
}
