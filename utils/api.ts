/* eslint-disable no-alert */
import axios from 'axios'

export const getWithoutHeader = (api:string) => {
  return axios(
    api,
    {
      method: 'GET' as const
    },
  );
};
