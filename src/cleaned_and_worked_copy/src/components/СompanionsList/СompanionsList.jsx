import './СompanionsList.css';

import React, { Component, PureComponent } from 'react';

export default class СompanionsList extends Component {
 
    render() {      
        const { companionsRend } = this.props; 

        return (             
            <div className="companions-block">
                <ul className="companions-list">
                    {companionsRend}
                </ul>     
            </div>
        );
    }
}
