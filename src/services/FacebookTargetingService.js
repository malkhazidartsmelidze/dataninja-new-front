import api from 'common/api';

class FacebookTargetingService {
  static searchCountries(query) {
    return api
      .call('get', '/facebook/targeting/search-countries', { params: { q: query } })
      .then(api.getData);
  }

  static searchTargetings(query) {
    return api
      .call('get', '/facebook/targeting/search-targetings', { params: { q: query } })
      .then(api.getData);
  }

  static getSuggestions(params) {
    console.log(params);
    return api.call('post', '/facebook/targeting/targeting-suggestions', params).then(api.getData);
  }
}

export default FacebookTargetingService;
