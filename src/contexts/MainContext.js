import React, { createContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { useTranslation } from 'react-i18next';
import { displayTime } from '../helpers/timeUtils';

const MainContext = createContext();

const MainContextProvider = (props) => {

    const { t, i18n } = useTranslation();
    const { children } = props;
    const [showConfetti, setShowConfetti] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    let intervalId = useRef(null);
    const [remainTime, setRemainTime] = useState({
        time: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        formattedTime: '',
    });
    const me = {
        firstname: 'Muhammet A.',
        lastname: 'Bozkaya',
        birthdate: new Date(1994, 8, 1),
        identityNumber: '1904*******',
        bloodGroup: 'A rh+',
        religion: '-',
        militartServiceStartAt: new Date(2021, 7, 7),
        militartServiceFinishAt: new Date(2021, 8, 4),
    };

    const calculateRemainTime = () => {
        const time = (me.militartServiceFinishAt.getTime() - new Date().getTime()) / 1000;
        const timeString = displayTime(time);

        setRemainTime({
            time,
            day: timeString.split(':')[0],
            hour: timeString.split(':')[1],
            minute: timeString.split(':')[2],
            second: timeString.split(':')[3],
            formattedTime: timeString,
        });
    }


    const fireworks = () => {
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    useLayoutEffect(() => {
        intervalId = setInterval(() => {
            calculateRemainTime();
        }, 1000);

        return () => clearInterval(intervalId.current);
    }, []);

    useEffect(() => {
        debugger;
        if (remainTime.day !== 0 && remainTime.day < 3) {
            if (remainTime.day < 3) {
                fireworks();
            }
        }
    }, [remainTime.day])

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage])

    return (
        <MainContext.Provider value={{
            showConfetti,
            fireworks,
            me,
            remainTime,
            selectedLanguage,
            setSelectedLanguage,
        }}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };