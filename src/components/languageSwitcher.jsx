import React from 'react';
import { useTranslation } from 'react-i18next';
import '../style/languageSwitcher.css'; // Import your CSS file for styling
import { Language } from '../assets/language';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher-container">
            <div className="dropdown">
                <button className="dropbtn"> <Language /> {i18n.language.toUpperCase()}</button>
                <div className="dropdown-content">
                    <button onClick={() => changeLanguage('eng')}>ENG</button>
                    <button onClick={() => changeLanguage('fr')}>FR</button>
                </div>
            </div>
        </div>
    );
}

export default LanguageSwitcher;
