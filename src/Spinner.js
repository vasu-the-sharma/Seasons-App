import React from 'react';

const Spinner = (props) =>{
    return (
        <div className="ui active dimmer">
            <div className="ui bog text loader">
            {props.message}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    message: "LOADING..."
};

export default Spinner;