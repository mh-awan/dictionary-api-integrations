import { getEntryByWord } from "./freeDictionaryAPI";

test('it return a response from the api when given a word argument', async () => {
  const response = await getEntryByWord('hello');

  expect(response.status).toEqual(200)
});
