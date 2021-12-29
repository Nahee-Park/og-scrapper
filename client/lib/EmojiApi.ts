import axios from 'axios';
import { AbstractApi, CommonResponse } from './AbstractApi';

const BASE_URL = 'https://asia-northeast3-text-replacement-ff7ff.cloudfunctions.net/api';

export type EmojiType = {
  imageUrl: string | undefined;
  rawText: string;
};

export type GetEmojiApiResponse = {
  data: {
    keyword: string;
    emoji: EmojiType[];
  };
} & CommonResponse;

export class EmojiApi extends AbstractApi {
  public static async GetEmojiApi(searchinput: string): Promise<GetEmojiApiResponse | any> {
    const URL = BASE_URL + this.buildPath('emoji') + this.buildQuery({ words: searchinput });
    try {
      const response = await axios.get<GetEmojiApiResponse>(URL);

      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
