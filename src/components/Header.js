import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../contexts/MainContext';
import LanguageSelect from './LanguageSelect';

const Header = () => {
    const { t } = useTranslation();
    const { remainTime, me } = useContext(MainContext);

    const dawn = parseInt(remainTime.day) + 1;
    const now = new Date();
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
                            <h3 className="site-text">{me.militartServiceStartAt < now ? t('dawnCount', { dawn }) : t('finished')}</h3>
                        </>
                    ) : (
                        <>
                            <h3 className="site-text">{me.militartServiceStartAt < now ? t('dawnCount', { dawn }) : t('notStarted')}</h3>
                            <span className="site-text">{me.militartServiceStartAt < now ? remainTime.formattedTime : null}</span>
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