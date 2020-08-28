class FacebookAdAccount extends AdAccount {
  constructor(fbacc) {
    parent(fbacc);
    this.type = 'facebook';
  }
}

FacebookAdAccount.service = {};

export default FacebookAdAccount;
