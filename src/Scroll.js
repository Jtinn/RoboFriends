import React from 'react';
const Scroll = (props) => {
    return (<div style={{ overflowY: 'auto', border: '0px solid black', height: '34em' }}>
        {props.children}
    </div>);
};
export default Scroll;