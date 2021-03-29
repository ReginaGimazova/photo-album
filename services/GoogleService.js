import axios from 'axios';

class GoogleService {
  constructor(token) {
    this.token = token;
  }

  async getProfilePhotos() {
    try {
      if (!this.token) {
        throw new Error('No token');
      }
      const { data } = await axios.get(process.env.FETCH_MEDIA_ITEMS, {
        headers: {
          Authorization: this.token,
        },
      });
      return data?.mediaItems;
    } catch (error) {
      console.log(error);
    }
  }

  async getProfileData() {
    try {
      if (!this.token) {
        throw new Error('No token');
      }

      const { data } = await axios.get(process.env.FETCH_USER_DATA, {
        headers: {
          Authorization: this.token,
        },
      });

      return data?.name;
    } catch (error) {
      console.log(error);
    }
  }
}

export default GoogleService;
