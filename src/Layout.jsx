import React, { useEffect } from 'react';

const Layout = (props) => {
    const { speedFactor = 0.05, backgroundColor = 'black', starColor = [255, 255, 255], starCount = 5000 } = props;

    useEffect(() => {
        const canvas = document.getElementById('starfield');
        const enduranceImage = new Image();
        enduranceImage.src = './assets/endurance.png'; // Add the correct path to the image here

        if (canvas) {
            const c = canvas.getContext('2d');

            if (c) {
                let w = window.innerWidth;
                let h = window.innerHeight;

                const setCanvasExtents = () => {
                    canvas.width = w;
                    canvas.height = h;
                };

                setCanvasExtents();

                window.onresize = () => {
                    setCanvasExtents();
                };

                const makeStars = (count) => {
                    const out = [];
                    for (let i = 0; i < count; i++) {
                        const s = {
                            x: Math.random() * 1600 - 800,
                            y: Math.random() * 900 - 450,
                            z: Math.random() * 1000,
                        };
                        out.push(s);
                    }
                    return out;
                };

                let stars = makeStars(starCount);

                const clear = () => {
                    c.fillStyle = backgroundColor;
                    c.fillRect(0, 0, canvas.width, canvas.height);
                };

                const putPixel = (x, y, brightness) => {
                    const rgb = `rgba(${starColor[0]},${starColor[1]},${starColor[2]},${brightness})`;
                    c.fillStyle = rgb;
                    c.fillRect(x, y, 1, 1);
                };

                const moveStars = (distance) => {
                    const count = stars.length;
                    for (let i = 0; i < count; i++) {
                        const s = stars[i];
                        s.z -= distance;
                        while (s.z <= 1) {
                            s.z += 1000;
                        }
                    }
                };

                let endurancePosition = {
                    x: Math.random() * w,
                    y: Math.random() * h,
                    visible: Math.random() < 0.001, // Endurance appears very rarely
                    speedX: Math.random() * 1 - 0.5, // Randomized speed for subtle motion
                    speedY: Math.random() * 1 - 0.5,
                };

                const moveEndurance = () => {
                    if (endurancePosition.visible) {
                        endurancePosition.x += endurancePosition.speedX;
                        endurancePosition.y += endurancePosition.speedY;

                        // Keep the Endurance within the bounds
                        if (endurancePosition.x > w || endurancePosition.x < 0) endurancePosition.x = Math.random() * w;
                        if (endurancePosition.y > h || endurancePosition.y < 0) endurancePosition.y = Math.random() * h;
                    }
                };

                const drawEndurance = () => {
                    if (endurancePosition.visible) {
                        c.drawImage(enduranceImage, endurancePosition.x, endurancePosition.y, 100, 100);
                        if (Math.random() < 0.0005) {
                            // Occasionally make it disappear or reappear
                            endurancePosition.visible = !endurancePosition.visible;
                        }
                    } else if (Math.random() < 0.0001) {
                        // Rarely make it reappear
                        endurancePosition.visible = true;
                    }
                };

                let prevTime;
                const init = (time) => {
                    prevTime = time;
                    requestAnimationFrame(tick);
                };

                const tick = (time) => {
                    let elapsed = time - prevTime;
                    prevTime = time;

                    moveStars(elapsed * speedFactor);

                    clear();

                    const cx = w / 2;
                    const cy = h / 2;

                    const count = stars.length;
                    for (let i = 0; i < count; i++) {
                        const star = stars[i];

                        const x = cx + star.x / (star.z * 0.001);
                        const y = cy + star.y / (star.z * 0.001);

                        if (x < 0 || x >= w || y < 0 || y >= h) {
                            continue;
                        }

                        const d = star.z / 1000.0;
                        const b = 1 - d * d;

                        putPixel(x, y, b);
                    }

                    // Move and draw the Endurance
                    moveEndurance();
                    drawEndurance();

                    requestAnimationFrame(tick);
                };

                requestAnimationFrame(init);

                window.addEventListener('resize', function () {
                    w = window.innerWidth;
                    h = window.innerHeight;
                    setCanvasExtents();
                });
            } else {
                console.error('Could not get 2d context from canvas element');
            }
        } else {
            console.error('Could not find canvas element with id "starfield"');
        }

        return () => {
            window.onresize = null;
        };
    }, [starColor, backgroundColor, speedFactor, starCount]);

    return (
        <canvas
            id="starfield"
            style={{
                padding: 0,
                margin: 0,
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 10,
                opacity: 1,
                pointerEvents: 'none',
                mixBlendMode: 'screen',
            }}
        ></canvas>
    );
};

export default Layout;
