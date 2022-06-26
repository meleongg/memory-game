import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Board from './Board';

const Main = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const incrementScore = () => {
        setScore(score + 1);
    };

    return (
        <div id='main'>
            <Banner score={score} bestScore={bestScore} isGameOver={isGameOver} />
            <Board incrementScore={incrementScore} />
        </div>
    )
}

export default Main; 