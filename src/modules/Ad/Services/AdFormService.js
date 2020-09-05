import api from 'common/api';

class AdFormService {
  static getAllLanguages() {
    return api.call('get', `/adform/languages`).then(api.getData);
  }
}

export default AdFormService;
