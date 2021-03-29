import axios from 'axios';

async function getProfilePhotos(token) {
  try {
    console.log(process.env.FETCH_MEDIA_ITEMS);
    if (!token) {
      throw new Error('No token');
    }
    const response = await axios.get(process.env.FETCH_MEDIA_ITEMS, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response, 'response');
  } catch (error) {
    console.log(error);
  }
}

export default getProfilePhotos;
