import './CompanionItem.css';

import React, { Component, PureComponent } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import classNames from 'classnames';

export default class CompanionItem extends Component {
 
    render() {
        const{ text, id, activeId } = this.props;
        const companionStyles = classNames('companions__item',  {
            'active': +activeId === id,            
        });
          
        return (
            <li className={companionStyles} >
                <Link className="companions__link" to={`/chat/${id}`}>{text}</Link>
                <hr className="companions__hr" />
            </li>     
        )
    }
}
