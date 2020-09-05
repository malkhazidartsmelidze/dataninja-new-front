import api from 'common/api';

class AudienceService {
  static getAudiences(network) {
    return api.call('get', `/${network}/audience/all`).then(api.getData);
  }

  static createFacebookVideoAudience(data) {
    return api.call('post', `/facebook/audience/video/create`, data).then(api.getData);
  }

  static sync(network) {
    return api.call('post', `/${network}/audience/sync`).then(api.getData);
  }
}

export default AudienceService;
