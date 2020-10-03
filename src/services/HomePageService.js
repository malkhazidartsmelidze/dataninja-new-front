import api from 'common/api';

class HomePageService {
  static saveEmail(email) {
    return api.call('post', '/home/save-email', { email }).then(api.getData);
  }
}

export default HomePageService;
