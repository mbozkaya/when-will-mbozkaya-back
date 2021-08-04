import React from "react";
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div />
            <div className="site-center-item">
                <p className="text-center"><a href="https://mbozkaya.github.io" target="_blank">mbozkaya</a> © 2021 - {new Date().getFullYear()} <a href="https://mbozkaya.github.io" target="_blank">{t('sourceCode')}</a></p>
            </div>
            <div />
        </footer>
    );
};

export default Footer;