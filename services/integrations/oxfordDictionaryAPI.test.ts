import { IOxfordDictionaryResponse } from "../../dataModels/oxfordDictionary";
import { getOxfordDictionaryEntryByWord } from "./oxfordDictionaryAPI";


test('it return a response from the api when given a word argument', async () => {
  const response = await getOxfordDictionaryEntryByWord('test') as IOxfordDictionaryResponse;

  expect(response.status).toEqual(200)
});

// TODO: test failure paths
