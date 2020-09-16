import api from 'common/api';

class FacebookTargetingService {
  static searchCountries(query) {
    return api
      .call('get', '/facebook/targeting/search/country', { params: { q: query } })
      .then(api.getData);
  }

  static searchInterests(query) {
    return api
      .call('get', '/facebook/targeting/search/interest', { params: { q: query } })
      .then(api.getData);
  }
}

export default FacebookTargetingService;
