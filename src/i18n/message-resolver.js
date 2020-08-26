export default (langCode) => {
  return import(`i18n/messages/${langCode}.json`).then((messages) => {
    return typeof messages.default === 'object' ? messages.default : {};
  });
};
