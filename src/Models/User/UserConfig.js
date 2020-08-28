const defaultAvatar =
  'https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCP3d8JHk5tKWXCILdmNhcmRfcGhvdG8qKDgwNTQ1MGVmMDk4MThkMzc0NzllZGY5M2YyYzc5YTUwZmMxNWJiNjAwAecFeG_QETl0cjpqF-7hUNz8QkSf?sz=48';

class UserConfig {
  constructor(conf) {
    this.language = conf.language;
    this.avatar = conf.avatar;
    this.defaultAccounts = {};
  }

  getAvatar = () => {
    if (this.avatar) return this.avatar;

    return defaultAvatar;
  };

  setDefaultAccounts = (accounts) => {
    this.defaultAccounts = accounts;
  };

  getDefaultAccount = (network) => {
    if (!this.defaultAccounts[network]) return null;

    return this.defaultAccounts[network];
  };
}

UserConfig.service = {};

export default UserConfig;
