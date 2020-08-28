import api from 'common/api';

class User {}

User.service = {
  setDefaulGoogleAccount: (account_id) => {
    api
      .call('post', '/user/actions/set-default-google-account', {
        id: account_id,
      })
      .then(api.getData);
  },
  setDefaulFacebookAccount: (account_id) => {
    api
      .call('post', '/user/actions/set-default-facebook-account', {
        id: account_id,
      })
      .then(api.getData);
  },
};

export default User;
