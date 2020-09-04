import api from 'common/api';

class AdFormService {
  static getAllLanguages() {
    return api.call('post', `/adform/languages`).then(api.getData);
  }
  static getFacebookPages() {
    return api.call('post', `/adform/fbpages`).then(api.getData);
  }
}

export default AdFormService;
