import api from 'common/api';

class AdCreativeService {
  static createAdCreative(network, data) {
    return api.call('post', `/${network}/creative/create`, data).then(api.getData);
  }
}

export default AdCreativeService;
