import api from 'common/api';

class AdImageService {
  static getImages(network) {
    return api.call('get', `/${network}/image/all`).then(api.getData);
  }
}

export default AdImageService;
