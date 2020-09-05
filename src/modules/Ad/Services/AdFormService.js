import api from 'common/api';

class AdFormService {
  static getAllLanguages() {
    return api.call('post', `/adform/languages`).then(api.getData);
  }
}

export default AdFormService;
