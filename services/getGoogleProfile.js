import axios from 'axios';
const requestUrl = 'https://www.googleapis.com/plus/v1/people/me?access_token=';

async function getGoogleProfile() {
  const token = this.cookies.get('auth._token.google');
  console.log(token);
  try {
    const response = await axios.get(requestUrl + token);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default getGoogleProfile;
