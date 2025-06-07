import dotenv from 'dotenv';

const envFile = `.env.${process.env.TEST_ENV || 'dev'}`;
dotenv.config({ path: `./app-commons/environments/${envFile}` });

const ENV = {
  BASE_URL: process.env.BASE_URL,
  BROWSER_NAME: process.env.BROWSER_NAME,
  USER_NAME: process.env.USER_NAME,
  PASSWORD: process.env.PASSWORD,
  PROXY_HOST: process.env.PROXY_HOST,
};

export default ENV;