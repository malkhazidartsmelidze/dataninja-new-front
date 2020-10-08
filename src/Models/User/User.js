import api from 'common/api';
import UserService from 'services/UserService';

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
    return UserService.changeLanguage(languageCode).then(() => {
      api.setLanguageCode(languageCode);
    });
  }
}

export default User;
