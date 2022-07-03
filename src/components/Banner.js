import React, { useState, useEffect } from 'react';
import { WINNING_SCORE } from './Main';

const Banner = (props) => {
    const { score, bestScore, isGameOver, setScore, setIsGameOver, setBestScore } = props; 

    const renderStateMsg = () => {
        return isGameOver ? (score >= WINNING_SCORE) ? "You Win! You're a Memory Master!" : `${score} out of ${WINNING_SCORE} unique panels picked!` : "Pick a card you haven't seen!";
    }

    // TODO: render a start again button via useEffect in Banner.js when isGameOver is true
    // TODO: when button is clicked, reset score to 0 and rerandomize the panels
    const handleClick = (e) => {
        setScore(0);
        setIsGameOver(false);
        if (score > bestScore) {
            setBestScore(score);
        }
    }
    
    return (
        <div id='banner'>
            <div id='game-state-container'>
                <h1 id='game-state-msg'>{renderStateMsg()}</h1>
                {isGameOver ? (<button id='play-again-btn' onClick={handleClick}>Play Again</button>) : null }
            </div>
            <div id='score-container'>
                <h2 id='score'>Score: {score} </h2>
                <h2 id='best-score'>Best Score: {bestScore}</h2>
            </div>
        </div>
    )
}

export default Banner;