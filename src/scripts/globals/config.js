import * as dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  KEY: process.env.YOUR_API_KEY,
  BASE_URL: process.env.BASE_URL,
  BASE_IMAGE_URL: process.env.BASE_IMAGE_URL,
  DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,

};

export default CONFIG;