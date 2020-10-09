import api from 'common/api';
import { User } from 'Models/User';

class AuthService {
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

  static changeLanguage = (code) => {
    return api
      .call('post', '/user/action/change-language', {
        language: code,
      })
      .then(api.getData);
  };
}

export default AuthService;
