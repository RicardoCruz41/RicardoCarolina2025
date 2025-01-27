
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import enMessages from './translations/en.json';
import ptMessages from './translations/pt.json';

const messages = {
  en: enMessages,
  pt: ptMessages,
};

const Main = () => {
  const [locale, setLocale] = useState('pt');

    const switchLanguage = (lang) => {
        setLocale(lang);
  };

  return (
      <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
          <App switchLanguage={switchLanguage} locale={locale} />
    </IntlProvider>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Main />);
