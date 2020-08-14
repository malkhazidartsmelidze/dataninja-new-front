export default (langCode) => {
  return import(`common/locales/${langCode}.json`).then((messages) => {
    return typeof messages.default === 'object' ? messages.default : {};
  });
};
