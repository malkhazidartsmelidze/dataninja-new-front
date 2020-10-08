import api from 'common/api';
import AuthService from 'services/AuthService';

class User {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.language = obj.language;
  }

  getLanguage() {
    return this.language;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  changeLanguage(languageCode) {
    return AuthService.changeLanguage(languageCode).then(() => {
      api.setLanguageCode(languageCode);
    });
  }
}

export default User;
