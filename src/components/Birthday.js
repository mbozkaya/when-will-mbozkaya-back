import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';


const Birthday = () => {
    const colors = ["#8b5642", "#6a696b"];

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
            requestAnimationFrame(frame);
        }
    }

    useEffect(() => {
        frame();
    }, []);

    return (
        <>
        </>
    );
};

export default Birthday;