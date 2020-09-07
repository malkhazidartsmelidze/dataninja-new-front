import api from 'common/api';

class FacebookTargetingService {
  static searchCountries(query) {
    return api
      .call('get', '/facebook/targeting/search/country', { params: { q: query } })
      .then(api.getData);
  }
}

export default FacebookTargetingService;
