/* eslint-disable no-alert */
import axios from 'axios'

export const handleNetworkError = (error) => {
  if (error.message === 'Network request failed') {
    alert(
      'Kesalahan Jaringan',
      'Silakan periksa koneksi Anda dan coba kembali.',
    );
  }
  throw error;
};

export const handleCommonError = (error) => {
  if (error && error.data.msg === 'invalid token') {
    alert(
      'Session kamu telah habis',
      'Silakan login kembali dengan akun kamu yg telah terdaftar'
    );
    throw new Error({
      logout: true
    });
  } else {
    throw error;
  }
};

export const getWithoutHeader = (api:string) => (timeout = true) => {
  return axios(
    api,
    {
      method: 'GET'
    },
    { handleNetworkError, handleCommonError },
    timeout
  );
};
