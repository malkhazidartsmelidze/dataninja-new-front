import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import UserService from 'services/UserService';
import useUser from 'store/UserContext';

export default function SocialAuth(props) {
  const { refreshUser } = useUser();

  const callback = (response) => {
    UserService.facebookLogin(response).then((data) => {
      console.log(data);
      refreshUser();
    });
  };

  useEffect(() => {
    callback({
      accessToken:
        'EAAOKTpEnm2EBAPB3lvtiPjRFvgmjqSEHZBvaaCIy5VegzmZBWxxrZB1WjbJo1Yet2FNEDZCszRZAU2kZCJCel23vc3BRmkjMAXyHt739aSG4NvZAyljYgXUMoUMZA0UVGjCMsSgR22rOAYpBjUZClPLn4MpMCa2bC2mrdw6nHBZCb5nAIzNaXlYH07nNcZAQnTQV1ZC9HgC26AC2cr5VwKtQCnh0aPq9eysfXKoZD',
      data_access_expiration_time: 1614714455,
      expiresIn: 4345,
      graphDomain: 'facebook',
      id: '3540776589345115',
      name: 'Malkhazi Dartsmelidze',
      signedRequest:
        'VhFL-QFZRFe0OZ-rD4fgW7pWSvAZOXt_T9wRtGIZneE.eyJ1c2VyX2lkIjoiMzU0MDc3NjU4OTM0NTExNSIsImNvZGUiOiJBUUJzRDlXRDVnWjhxblhheXJZYTRuVDVsRHhyVzIyZE54dXJOMmNEVUhCcEdaSlVXamhjdzZ6YlJoWVBoN0xWWTh6NGpGdUVqREVlYTRIN1hvWklkcFo4ZEV5X0hhaVVSc2lDUmMwVk50cXR6cmZaclBCbXhCMFFfNFEyN3B1Y2x5RHBnQTdKZGFYTU5MVDR1LU1BaktGUG1hNTlHZ3owWVVZM0JKaGNFWU5MZS03cGFZeXdSVW0zUklwbHRlc2RFeGFVUzNIME5vQzlKaXlHZXprVW1EYjJnTVpybEdRYk9VMEdHNHdQMjh5STFPY1hQdWJzamh4Y0NsV0hETGpyVXZYQUF1am1zYTA1dllWelVucTFOZ3k1RnNOVWlmWnAzSHFTTjRGR1FvSWVlUmhmdnUwMHFGczdiRTZ2Mmswb1JjYlkzWEVzMFBsUmgzNGhWaWVKSUFCa3RYWXZRS2E4ME1SZzdqRkRjaUFtVEEiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTYwNjkzODQ1NX0',
      userID: '3540776589345115',
    });
  }, []);

  return (
    <FacebookLogin
      appId='996494977506145'
      scope='ads_management,ads_read,business_management'
      callback={callback}
    />
  );
}
