import React from 'react';

const Panel = (props) => {
    const { brand } = props;

    return (
        <div className='panel'>
            <i className={"fa-brands " + brand.class}></i>
            <h3 className='panel-label'>{brand.text}</h3>
        </div>
    )
}

export default Panel;