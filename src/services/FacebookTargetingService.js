import api from 'common/api';

class FacebookTargetingService {
  static searchCountries(query) {
    return api
      .call('get', '/facebook/targeting/countries', { params: { query } })
      .then(api.getData);
  }
}

export default FacebookTargetingService;
