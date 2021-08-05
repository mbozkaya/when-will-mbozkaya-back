import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../contexts/MainContext';

const Counter = () => {
    const { t } = useTranslation();
    const { remainTime, me, selectedLanguage } = useContext(MainContext);
    return (
        <div className="container">
            <h1 id="headline">{t('countdown')}</h1>
            <div id="countdown">
                <ul>
                    <li><span id="days">{remainTime.day}</span>{parseInt(remainTime.day) < 2 ? t('day') : t('days')}</li>
                    <li><span id="hours">{remainTime.hour}</span>{parseInt(remainTime.hour) < 2 ? t('hour') : t('hours')}</li>
                    <li><span id="minutes">{remainTime.minute}</span>{parseInt(remainTime.minute) < 2 ? t('minute') : t('minutes')}</li>
                    <li><span id="seconds">{remainTime.second}</span>{parseInt(remainTime.second) < 2 ? t('second') : t('seconds')}</li>
                </ul>
            </div>
            <div id="content" className="emoji">
                <span>🥳</span>
                <span>🎉</span>
                <span>🎂</span>
            </div>
        </div>
    )
};

export default Counter;