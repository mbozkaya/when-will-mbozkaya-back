import React, { createContext, useLayoutEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

const MainContext = createContext();

const MainContextProvider = (props) => {
    const { children } = props;
    const [showConfetti, setShowConfetti] = useState(false);
    const me = {
        firstname: 'Muhammet A.',
        lastname: 'Bozkaya',
        birthdate: new Date(1994, 8, 1),
        identityNumber: '1904*******',
        bloodGroup: 'A rh+',
        religion: '-',
        militartServiceStartAt: new Date(2021, 7, 7),
        militartServiceFinishAt: new Date(2021, 8, 7),
    };

    useLayoutEffect(() => {
        console.log('hitted');
        setShowConfetti(true);
        // setTimeout(() => {
        //     setShowConfetti(false);
        //     console.log('hitted again');
        // }, 5 * 1000);

    }, []);


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

    return (
        <MainContext.Provider value={{
            showConfetti,
            fireworks,
            me
        }}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };