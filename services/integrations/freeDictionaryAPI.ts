import axios from "axios";

export const getEntryByWord = async (word: string): Promise<any> => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Error(error.message);
    } else {
      return Error('An unexpected error occurred');
    }
  }
}
