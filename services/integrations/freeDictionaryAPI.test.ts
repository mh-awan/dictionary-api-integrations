import { getfreeDictionaryEntryByWord } from "./freeDictionaryAPI";
import { IFreeDictionaryResponse } from "../../dataModels/freeDictionary";

test('it return a response from the api when given a word argument', async () => {
  const response = await getfreeDictionaryEntryByWord('hello') as IFreeDictionaryResponse;

  expect(response.status).toEqual(200)
});

// TODO: test failure paths
