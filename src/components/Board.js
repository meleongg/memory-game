import React, { useState, useEffect } from 'react';
import Panel from './Panel';
import { WINNING_SCORE } from './Main';

const Board = (props) => {
    const { score, isGameOver, setScore, setIsGameOver } = props;
    const [clicked, setClicked] = useState([]); 
    const classNames = [{class: 'fa-react', text: 'React'}, 
                        {class: 'fa-js', text: 'JS'}, 
                        {class: 'fa-css3', text: 'CSS'}, 
                        {class: 'fa-html5', text: 'HTML'}, 
                        {class: 'fa-python', text: 'Python'}, 
                        {class: 'fa-java', text: 'Java'}, 
                        {class: 'fa-r-project', text: 'R'}, 
                        {class: 'fa-swift', text: 'Swift'}, 
                        {class: 'fa-golang', text: 'Go'},
                       ]
    
    const generateNineUniqueNums = () => {
        const nums = [];
        let num;

        while (nums.length < 9) {
            num = Math.floor(Math.random() * ((WINNING_SCORE - 1) - 0 + 1)) + 0;

            if (!nums.includes(num)) {
                nums.push(num);
            }
        }

        return nums; 
    }

    let nums = generateNineUniqueNums();

    const appendClicked = (className) => {
        let currentClicked = clicked;
        let currentScore = score;

        if (!currentClicked.includes(className) && !isGameOver) {
            currentClicked.push(className);
            setScore(currentScore + 1);
            setClicked(currentClicked);
            if (score >= (WINNING_SCORE - 1)) {
                setIsGameOver(true);
            }
            nums = generateNineUniqueNums();
        } else {
            setIsGameOver(true);
            setClicked([]);
        }
    }

    return (
        <div id='board'>
            <Panel appendClicked={appendClicked} brand={classNames[nums[0]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[1]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[2]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[3]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[4]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[5]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[6]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[7]]} isGameOver={isGameOver}/>
            <Panel appendClicked={appendClicked} brand={classNames[nums[8]]} isGameOver={isGameOver}/>
        </div>
    )
}

export default Board;