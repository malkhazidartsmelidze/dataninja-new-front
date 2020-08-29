import api from 'common/api';

class Language {
  constructor(ob) {
    this.code = ob.code;
    this.name = ob.name;
  }

  getName() {
    return this.name;
  }

  getCode() {
    return this.code;
  }
}

Language.service = {};

export default Language;
