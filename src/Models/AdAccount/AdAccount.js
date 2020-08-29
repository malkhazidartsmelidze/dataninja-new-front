import api from 'common/api';

class AdAccount {
  constructor(acc) {
    this.name = acc.name;
    this.id = acc.id;
    this.is_default = acc.is_default;
    this.network = '';
  }

  setNetwork = (network) => {
    this.network = network;
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
}

AdAccount.service = {
  setDefaultFacebookAccount: (id) => {
    return api
      .call('post', '/user/actions/set-default-facebook-account', {
        account_id: id,
      })
      .then(api.getData);
  },
  setDefaultGoogleAccount: (id) => {
    return api
      .call('post', '/user/actions/set-default-google-account', {
        account_id: id,
      })
      .then(api.getData);
  },
};

export default AdAccount;
