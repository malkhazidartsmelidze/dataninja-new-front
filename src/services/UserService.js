import api from 'common/api';
import { User } from 'Models/User';

class UserService {
  static bootstrap = () => {
    return api.call('get', '/user/bootstrap').then(api.getData);
  };

  static login = (credentials) => {
    return api.call('post', '/auth/login', credentials).then((res) => {
      api.setToken(res.data.token);
      return new User(res.data.user);
    });
  };

  static logout = () => {
    return api.setToken(null).call('post', '/auth/logout');
  };

  static facebookLogin = (data) => {
    return api.call('post', '/auth/facebook/save-token', data).then(api.getData);
  };

  static changeLanguage = (code) => {
    return api
      .call('post', '/user/action/change-language', {
        language: code,
      })
      .then(api.getData);
  };

  static getGoogleLoginUrl = () => {
    return api.call('post', '/auth/google/redirect-url').then(api.getData);
  };
}

export default UserService;
