import api from 'common/api';

export default class AdForm {
  constructor() {}
}

AdForm.service = {
  searchLocation: (q) => {
    return api
      .post('/ad/form/action/search-locations', {
        q,
      })
      .then((data) => data.data);
  },
  getFormConfig: () => {
    return api.post('/ad/form/action/get-config').then((data) => data.data);
  },
};
