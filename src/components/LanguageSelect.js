import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';
import { useTranslation } from 'react-i18next';


export default () => {
    const { selectedLanguage, setSelectedLanguage } = useContext(MainContext);
    const { t } = useTranslation();

    return (
            <div className="select">
                <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                    <option value="tr" title={t('turkish')}>TR</option>
                    <option value="en" title={t('english')}>EN</option>
                </select>
                <span className="focus"></span>
            </div>
    )
}