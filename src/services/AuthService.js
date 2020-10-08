import api from 'common/api';
import { User } from 'Models/User';

class AuthService {
  static bootstrap = () => {
    return api.call('get', '/user/bootstrap').then(api.getData);
  };

  static login = (credentials) => {
    return api.call('post', '/login', credentials).then((res) => {
      api.setToken(res.data.token);
      return new User(res.data.user);
    });
  };

  static logout = () => {
    return api.setToken(null).call('post', '/logout');
  };

  static changeLanguage = (code) => {
    return api.call('post', '/user/actions', {
      action: 'change-language',
      language: code,
    });
  };
}

export default AuthService;
