import api from 'common/api';

export default class AdForm {
  constructor() {}
}

AdForm.service = {
  searchLocation: (q) => {
    return api
      .post('/ad/form/action/search-locations', {
        q: q,
      })
      .then((data) => data.data);
  },
};
