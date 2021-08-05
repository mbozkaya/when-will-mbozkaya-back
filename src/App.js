import React, { useContext, useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import { MainContext } from './contexts/MainContext';
import Comment from './components/Comment';
import Birthday from './components/Birthday';

const App = () => {
    const { t, i18n } = useTranslation();
    const { showConfetti, fireworks, me } = useContext(MainContext);
    const [showBirthday, setShowBirthday] = useState(false);

    useState(() => {
        const now = new Date();
        if (now.getDate() === me.birthdate.getDate() && now.getMonth() === me.birthdate.getMonth()) {
            setShowBirthday(true);

            setTimeout(() => {
                setShowBirthday(false);
            }, 10 * 1000);
        }
    }, []);
    return (
        <div className="main-wrapper" id="main-wrapper">
            <Header />
            <main className="main-body">
                <div />
                <div className="site-content" >
                    <div>
                        <h3>{t('salut')}</h3>
                        <p>{t('me')}</p>
                        <p>{t('info')}</p>
                        <p>👇 {t('leaveComment')}</p>
                        <p>{t('love')} 🌹</p>
                    </div>
                    <Comment />
                    {
                        showBirthday && <Birthday />
                    }
                </div>
                <div />
            </main>
            <Footer />
        </div >
    )
};

export default App;