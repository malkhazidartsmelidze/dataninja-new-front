class AdAccount {
  constructor(acc) {
    this.name = acc.name;
    this.id = acc.id;
    this.is_default = acc.is_default;
  }

  isDefault = () => {
    return Boolean(this.is_default);
  };

  getName = () => {
    return this.name;
  };

  getId = () => {
    return this.id;
  };
}
