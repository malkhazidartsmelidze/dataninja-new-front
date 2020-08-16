class UserData {
  constructor(obj) {}
}

UserData.service = {
  fetch: () => {
    return api.get();
  },
};

export default UserData;
