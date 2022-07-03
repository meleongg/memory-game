import React, { useState, useEffect } from 'react';
import Panel from './Panel';

const Board = (props) => {
    const { score, incrementScore, setIsGameOver, setBestScore } = props;
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
                        {class: 'fa-apple', text: 'Apple'},
                        {class: 'fa-android', text: 'Android'},
                        {class: 'fa-amazon', text: 'Amazon'}
                       ]
    
    const generateNineUniqueNums = () => {
        const nums = [];
        let num;

        while (nums.length < 9) {
            num = Math.floor(Math.random() * (11 - 0 + 1)) + 0;

            if (!nums.includes(num)) {
                nums.push(num);
            }
        }

        return nums; 
    }

    let nums = generateNineUniqueNums();

    const appendClicked = (className) => {
        let currentClicked = clicked;

        if (!currentClicked.includes(className)) {
            currentClicked.push(className);
            incrementScore();
            setClicked(currentClicked);
            nums = generateNineUniqueNums();
        } else {
            setIsGameOver(true);
            setBestScore(score);
        }
    }

    return (
        <div id='board'>
            <Panel appendClicked={appendClicked} brand={classNames[nums[0]]} />
            <Panel brand={classNames[nums[1]]} />
            <Panel brand={classNames[nums[2]]} />
            <Panel brand={classNames[nums[3]]} />
            <Panel brand={classNames[nums[4]]} />
            <Panel brand={classNames[nums[5]]} />
            <Panel brand={classNames[nums[6]]} />
            <Panel brand={classNames[nums[7]]} />
            <Panel brand={classNames[nums[8]]} />
        </div>
    )
}

export default Board;