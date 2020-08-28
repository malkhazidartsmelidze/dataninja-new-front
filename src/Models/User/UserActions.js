import api from 'common/api';

class UserActions {}

UserActions.service = {
  setDefaulGoogleAccount: (account_id) => {
    return api
      .call('post', '/user/action/set-default-google-account', {
        account_id: account_id,
      })
      .then(api.getData);
  },
  setDefaulFacebookAccount: (account_id) => {
    return api
      .call('post', '/user/action/set-default-facebook-account', {
        account_id: account_id,
      })
      .then(api.getData);
  },
};

export default UserActions;
