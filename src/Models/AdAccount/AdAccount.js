import api from 'common/api';

class AdAccount {
  constructor(acc) {
    this.name = acc.name;
    this.id = acc.id;
    this.is_default = acc.is_default;
    this.network = '';
    this.pages = [];
  }

  setNetwork = (network) => {
    this.network = network;
    return this;
  };

  isDefault = () => {
    return Boolean(this.is_default);
  };

  getName = () => {
    return this.name;
  };

  getId = () => {
    return this.id;
  };

  // getPages = (callback) => {
  //   if (this.pages.length) return this.pages;
  //   return FacebookPage.service.getByAccountId(this.getId()).then((res) => {
  //     if (!Array.isArray(res)) return [];
  //     const pages = res.map((page) => {
  //       return new FacebookPage(page);
  //     });
  //     this.pages = pages;
  //     if (typeof callback === 'function') callback(this.getPages());
  //   });
  // };
}

AdAccount.service = {
  setDefaultFacebookAccount: (id) => {
    return api
      .call('post', '/user/action/set-default-facebook-account', {
        account_id: id,
      })
      .then(api.getData);
  },
  setDefaultGoogleAccount: (id) => {
    return api
      .call('post', '/user/action/set-default-google-account', {
        account_id: id,
      })
      .then(api.getData);
  },
};

export default AdAccount;
