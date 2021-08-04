import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useTranslation } from 'react-i18next';


const Birthday = () => {
    const { t } = useTranslation();
    const colors = ["#8b5642", "#6a696b"];
    let animationId = useRef(null);

    function frame() {
        var duration = 5 * 1000;
        var end = Date.now() + duration;
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            animationId.current = requestAnimationFrame(frame);
        }
    }

    useEffect(() => {
        frame();
        setTimeout(() => {
            cancelAnimationFrame(animationId.current);
            alert(t('leaveMessage'));
        }, 10*1000);
        return ()=> cancelAnimationFrame(animationId.current)
    }, []);

    return (
        <h1 className="office-banner">
            {t('birthday')}
        </h1>
    );
};

export default Birthday;