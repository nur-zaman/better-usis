// const axios = require('axios');
// const { wrapper } = require('axios-cookiejar-support');
// const { CookieJar } = require('tough-cookie');

import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';

// Define URLs and credentials
export default async function getClient(
  username: string | undefined,
  password: string | undefined,
) {
  const loginUrl = "https://usis.bracu.ac.bd/academia/j_spring_security_check";

  const jar = new CookieJar();
  const client = wrapper(axios.create({ jar }));

  try {
    // Prepare login data
    const data = new URLSearchParams();
    data.append("j_username", username || "");
    data.append("j_password", password || "");

    // Perform the login using obtained cookies
    const response = await client.post(loginUrl, data);
    console.log("Login response status:", response.status);
    return client;
  } catch (error) {
    console.error("Error in getClient:", error);
    return undefined;
  }
}

