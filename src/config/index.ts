/* eslint-disable no-undef */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });
// add config
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,

  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret_token: process.env.SECRET_TOKEN,
    expire_in: process.env.EXPIRE_IN,
    refresh_token: process.env.REFRESH_SECRET_TOKEN,
    refresh_expire_in: process.env.REFRESH_EXPIRE_IN,
  },
  cloudinary: {
    cloudName: process.env.cloudName,
    apiKey: process.env.apiKey,
    apiSecret: process.env.apiSecret,
  },
  authServiceURL: process.env.AUTH_SERVICE_URL,
  mainServiceURL: process.env.MAIN_SERVICE_URL,
};
