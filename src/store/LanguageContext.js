import React, { createContext, useState, useContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { languageKey, defaultLanguage } from 'consts';
import Language from 'Models/Language';
import getMessages from 'i18n/message-resolver';
import useUser from 'store/UserContext';
import defaultMessages from 'i18n/messages/en.json';

export const LanguageContext = createContext({});

const aviableLanguages = [
  new Language({ code: 'ka', id: 1, name: 'ქართული' }),
  new Language({ code: 'en', id: 2, name: 'English' }),
  new Language({ code: 'ru', id: 3, name: 'Russian' }),
];

export const LanguageContextProvider = ({ children }) => {
  const [language, setLangauge] = useState(defaultLanguage);
  const { user } = useUser();
  const [messages, setMessages] = useState(defaultMessages);

  const changeLanguage = (chosenLanguageCode) => {
    const chosenLanguage = aviableLanguages.find((l) => l.getCode() == chosenLanguageCode);

    if (!chosenLanguage) return;

    user.changeLanguage(chosenLanguage.getCode()).then(() => {
      setLangauge(chosenLanguage.getCode());
    });
  };

  useEffect(() => {
    getMessages(language).then((messages) => {
      setMessages(messages);
    });
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        languages: aviableLanguages,
        changeLanguage: changeLanguage,
      }}
    >
      <IntlProvider messages={messages} locale={language}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default () => useContext(LanguageContext);
