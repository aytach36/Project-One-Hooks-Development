import { useState, useEffect } from "react";
import PICTURES from './data/pictures';

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;
const minimumIncrement = 1;

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(3 * SECONDS);
    const [increment, setIncrement] = useState(1);

    useEffect(() => {
        console.log('delay', delay, 'increment', increment);

        const interval = setInterval(() => {
            setIndex(
                storedIndex => {
                    return (storedIndex + increment) % PICTURES.length;
                }
            )
        }, delay);

        return () => {
            console.log('Remove last interval');
            clearInterval(interval);
        }

    }, [delay, increment]);

    const updateDelay = e => {
        const delay = Number(e.target.value) * SECONDS;
        setDelay(delay < minimumDelay ? minimumDelay : delay);
    };

    const updateIncrement = e => {
        const increment = Number(e.target.value);
        setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
    }

    return (
        <div className="Gallery">
            <img src={PICTURES[index].image} alt='gallery' />
            <div className="multiform">
                <div>
                    Gallery transition delay (seconds):
                    <input type="number" onChange={updateDelay} />
                </div>
                <div>
                    Gallery increment:
                    <input type="number" onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
};

