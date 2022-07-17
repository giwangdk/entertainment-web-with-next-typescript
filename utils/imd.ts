import { getWithoutHeader } from './api';

const API_URL = process.env.IMDB_API_URL;
const API_KEY = process.env.IMDB_API_KEY;

export const getTop250Movies = getWithoutHeader(`${API_URL}/Top250Movies/${API_KEY}`);

export const getTop250TVs = getWithoutHeader(`${API_URL}/Top250TVs/${API_KEY}`);

export const getComingSoon = getWithoutHeader(`${API_URL}/ComingSoon/${API_KEY}`);
