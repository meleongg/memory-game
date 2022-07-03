import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Board from './Board';

const Main = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    // TODO: render a start again button via useEffect in Main.js when isGameOver is true
    // TODO: when button is clicked, reset score to 0 and rerandomize the panels

    const incrementScore = () => {
        setScore(score + 1);
    };

    return (
        <div id='main'>
            <Banner score={score} bestScore={bestScore} isGameOver={isGameOver} />
            <Board score={score} incrementScore={incrementScore} setIsGameOver={setIsGameOver} setBestScore={setBestScore} />
        </div>
    )
}

export default Main; 