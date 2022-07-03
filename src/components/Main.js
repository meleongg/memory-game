import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Board from './Board';

const WINNING_SCORE = 9;

const Main = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    return (
        <div id='main'>
            <Banner score={score} bestScore={bestScore} isGameOver={isGameOver} setScore={setScore} setIsGameOver={setIsGameOver} setBestScore={setBestScore} />
            <Board score={score} isGameOver={isGameOver} setScore={setScore} setIsGameOver={setIsGameOver} />
        </div>
    )
}

// export default Main; 
export { WINNING_SCORE, Main };