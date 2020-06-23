import React from 'react';

// Option stateless functional component for User
const Option = (props) => (
        <div className="option">
            <p className="option__text">{props.count}. { props.optionText }</p>
            <button 
                className="button button--link"
                onClick={ (e) => {
                props.handleDeleteIndividualOption (
                    props.optionText
                )
            } }
            >
            <span className="option__remove">&#10008;</span>
            </button>
        </div>
);

export default Option;

