class GoogleAdAccount extends AdAccount {
  constructor(googleAcc) {
    parent(googleAcc);
    this.type = 'google';
  }
}

GoogleAdAccount.service = {};

export default GoogleAdAccount;
