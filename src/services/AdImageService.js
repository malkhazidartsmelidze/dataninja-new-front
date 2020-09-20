import api from 'common/api';

class AdImageService {
  static getImages(network, params) {
    return api.call('get', `/${network}/image/all`, { params }).then(api.getData);
  }
}

export default AdImageService;
