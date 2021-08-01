import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import { MainContext } from './contexts/MainContext';
import Comment  from './components/Comment';

const App = () => {
    const { t, i18n } = useTranslation();
    const { showConfetti, fireworks } = useContext(MainContext);
    const myVar = 1;
    console.log(i18n.language);
    return (
        <div className="main-wrapper" id="main-wrapper">
            <Header />
            <main className="main-body" >
                <div />
                <div className="content" >
                </div>
                <Comment />
                <div />
            </main>
            <Footer />
        </div>
    )
};

export default App;