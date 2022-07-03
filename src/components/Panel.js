import React from 'react';

const Panel = (props) => {
    const { appendClicked, brand, isGameOver } = props;

    const handleClick = (e) => {
        if (!isGameOver) {
            if (e.target.nodeName !== 'DIV') {
                appendClicked(e.target.parentElement.children[0].className);
            } else {
                appendClicked(e.target.children[0].className);
            }
        }
    }

    return (
        <div onClick={handleClick} className='panel'>
            <i className={"fa-brands " + brand.class}></i>
            <h3 className='panel-label'>{brand.text}</h3>
        </div>
    )
}

export default Panel;