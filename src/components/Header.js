import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../contexts/MainContext';
import LanguageSelect from './LanguageSelect';

const Header = () => {
    const { t } = useTranslation();
    const { remainTime, me, selectedLanguage } = useContext(MainContext);

    const dawn = parseInt(remainTime.day) + 1;
    const now = new Date();

    useEffect(() => {
        document.title = t('dawnCount', { dawn });
    }, [remainTime.day, selectedLanguage]);

    return (
        <header className="site-header">
            <div />
            <div className="site-header">
                <div className="site-center-logo">
                    <a href="">
                        <img className="site-logo-image" src="/images/military.png" alt="test" />
                    </a>
                </div>
                <div className="site-header-body">
                    {me.militartServiceFinishAt < now ? (
                        <>
                            <h3 className="site-text">{t('finished')}</h3>
                        </>
                    ) : (
                        <>
                            <h3 className="site-text">{me.militartServiceStartAt < now ? t('dawnCount', { dawn }) : t('notStarted')}</h3>
                        </>
                    )}

                </div>
                <div className="site-header-select">
                    <LanguageSelect />
                </div>
            </div >
            <div />
        </header >
    );
};

export default Header;