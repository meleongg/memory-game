import React from 'react';

const Banner = (props) => {
    const { score, bestScore, isGameOver } = props; 

    const renderStateMsg = () => {
        return isGameOver ? "You Win! You're a Memory Master!" : "Pick a card you haven't seen!";
    }
    
    return (
        <div id='banner'>
            <h1 id='game-state-msg'>{renderStateMsg()}</h1>
            <div id='score-container'>
                <h2 id='score'>Score: {score} </h2>
                <h2 id='best-score'>Best Score: {bestScore}</h2>
            </div>
        </div>
    )
}

export default Banner;