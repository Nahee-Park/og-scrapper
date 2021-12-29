import axios from 'axios';

export const baseUrl =
  'https://asia-northeast3-text-replacement-ff7ff.cloudfunctions.net/api/content';

export const client = axios.create({
  baseURL: baseUrl,
});
