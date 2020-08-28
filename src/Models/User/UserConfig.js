import AdAccount from 'Models/AdAccount/AdAccount';

const defaultAvatar =
  'https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCP3d8JHk5tKWXCILdmNhcmRfcGhvdG8qKDgwNTQ1MGVmMDk4MThkMzc0NzllZGY5M2YyYzc5YTUwZmMxNWJiNjAwAecFeG_QETl0cjpqF-7hUNz8QkSf?sz=48';

class UserConfig {
  constructor(conf) {
    this.language = conf.language;
    this.avatar = conf.avatar;
    this.defaultAccounts = {
      facebook: '',
      google: '',
    };
    this.adAccounts = {
      facebook: [],
      google: [],
    };
  }

  getAvatar = () => {
    if (this.avatar) return this.avatar;

    return defaultAvatar;
  };

  getDefaultAccountId = (network) => {
    if (!this.defaultAccounts[network]) return null;

    return this.defaultAccounts[network].id;
  };

  getAdAccounts = (network) => {
    if (this.adAccounts[network] === undefined) throw 'Undefined Network';

    return this.adAccounts[network];
  };

  setDefaultAccounts = (accounts) => {
    this.defaultAccounts = accounts;
    return this;
  };

  setAdAccounts = (accounts) => {
    if (!typeof accounts === 'object') throw 'must provide ad account object';

    this.adAccounts.google = accounts.google.map((acc) => {
      return new AdAccount(acc).setNetwork('google');
    });

    this.adAccounts.facebook = accounts.facebook.map((acc) => {
      return new AdAccount(acc).setNetwork('facebook');
    });

    return this;
  };
}

UserConfig.service = {};

export default UserConfig;
