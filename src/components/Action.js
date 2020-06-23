import React from 'react';

// Action stateless functional component for User
const Action = (props) => (
        <div>
            <button
                className="big-button" 
                onClick={props.handlePickOptions}
                disabled={!props.hasOptions}
                >
                What langueage should I learn?
            </button>
        </div>
);

export default Action;