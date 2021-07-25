import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t, i18n } = useTranslation();
    const myVar = 1;
    console.log(i18n.language);
    return (
        <div className="main-wrapper" >
            <Header />
            <main className="main-body" >
                <div />
                <div className="content" >
                    {t('test', { myVar })}
                </div>
                <button type="button" onClick={() => { i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr') }}>change</button>
                <div />
            </main>
            <Footer />
        </div>
    )
};

export default App;