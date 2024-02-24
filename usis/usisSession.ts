// const axios = require('axios');
// const { wrapper } = require('axios-cookiejar-support');
// const { CookieJar } = require('tough-cookie');

import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';

// Define URLs and credentials
export default async function getClient(username: string|undefined, password: string|undefined) {
    const loginUrl = 'https://usis.bracu.ac.bd/academia/j_spring_security_check';

    const jar = new CookieJar();
    const client = wrapper(axios.create({ jar }));

        try {
          // Make a GET request to obtain necessary cookies
        //   const csrfResponse = await client.get(csrfTokenUrl);
      
          // Prepare login data
          const data = new URLSearchParams();
          data.append('j_username', username||'');
          data.append('j_password', password||'');
      
          // Perform the login using obtained cookies
          await client.post(loginUrl, data);
          return client
      
        //   console.log('Scraped Data:', extractData(loginResponse.data));
        } catch (error) {
          return undefined;
        }

    
}
