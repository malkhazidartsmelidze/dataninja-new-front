import api from 'common/api';

class FacebookTargetingService {
  static searchCountries(query) {
    return api
      .call('get', '/facebook/targeting/search-countries', { params: { q: query } })
      .then(api.getData);
  }

  static searchLocations(query) {
    return api.call('post', '/facebook/targeting/search-locations', { q: query }).then(api.getData);
  }

  static searchLocationInGoogle(query) {
    return api.call('post', '/google/targeting/search-locations', { q: query }).then(api.getData);
  }

  static searchTargetings(query) {
    return api
      .call('get', '/facebook/targeting/search-targetings', { params: { q: query } })
      .then(api.getData);
  }

  static getSuggestions(params) {
    return api.call('post', '/facebook/targeting/targeting-suggestions', params).then(api.getData);
  }

  static searchLanguages(query) {
    return api.call('post', '/facebook/targeting/search-languages', { q: query }).then(api.getData);
  }
}

export default FacebookTargetingService;
